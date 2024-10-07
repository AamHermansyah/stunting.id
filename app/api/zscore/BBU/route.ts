import { json } from '@/lib/json';
import { readFileSync } from 'fs';
import path from 'path';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const gender = searchParams.get('gender');

  if (!gender) return new Response(json({
    status: 400,
    message: 'Gender query is not found'
  }));

  if (gender !== 'girl' && gender !== 'boy') return new Response(json({
    status: 400,
    message: 'Gender not valid'
  }));

  try {
    // Use process.cwd() to get the current working directory
    const currentDirectory = process.cwd();
    const filename = `${gender}s.csv`;

    // Construct the absolute path to the CSV file
    const csvFilePath = path.join(currentDirectory, 'app', 'api', 'zscore', 'BBU', filename);

    // Read the CSV file synchronously
    const csvData = readFileSync(csvFilePath, 'utf8');

    // Split the CSV data into header and rows
    const [, ...csvRows] = csvData.split('\n');

    const responseData = {
      data: csvRows
        .filter((row) => row !== '')
        .map((row) => row.replace('\r', '').split(',').map((col) => +col))
        .map((row) => {
          const resultObject = {
            month: row[0],
            mean: row[4],
            SDsNeg: [row[1], row[2], row[3]],
            SDsPos: [row[5], row[6], row[7]],
          };

          return resultObject;
        }),
      status: 200,
    };

    return new Response(json(responseData));
  } catch (error) {
    console.error('Error:', error);
    return new Response(json({ message: 'Internal Server Error', status: 500 }), { status: 500 });
  }
}
