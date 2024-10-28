import React from 'react';
import DataKepalaKader from './_components/data-kepalakader';

const KepalaKaderPage = ({ searchParams }: { searchParams: { query: string } }) => {
  return (
    <div>
      <DataKepalaKader searchParams={searchParams} />
    </div>
  );
}

export default KepalaKaderPage;