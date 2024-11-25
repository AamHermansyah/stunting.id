"use server";

import { prisma } from "@/db";

// Fetch children associated with a user or all if role is KADER or KEPALA_KADER
export const getChildren = async (userId: string, role: string) => {
  try {
    const children = role === "KADER" || role === "KEPALA_KADER"
      ? await prisma.child.findMany()
      : await prisma.child.findMany({
          where: { userId },
        });
    return children;
  } catch (error) {
    console.error("Error fetching children:", error);
    return [];
  }
};

// Create a new measurement
export const createMeasurement = async (form: {
  childId: string;
  height: number;
  weight: number;
  headCircumference: number;
  armCircumference: number;
  date: string;
  nutritionalStatus: string;
  userId: string; // Include userId in the form data
}) => {
  try {
    await prisma.measurement.create({
      data: {
        childId: Number(form.childId),
        userId: form.userId, // Add userId here
        height: form.height,
        weight: form.weight,
        headCircumference: form.headCircumference,
        armCircumference: form.armCircumference,
        date: new Date(form.date),
        nutritionalStatus: form.nutritionalStatus,
      },
    });
    return true;
  } catch (error) {
    console.error("Error creating measurement:", error);
    return false;
  }
};



// Fetch data measurements from database
export const getMeasurements = async () => {
    try {
      const measurements = await prisma.measurement.findMany({
        include: { Child: true },
      });
      return measurements.map((measurement) => ({
        id: measurement.id,
        namaOrangTua: measurement.Child.name, // Sesuaikan dengan field
        tinggiBadan: `${measurement.height} Cm`,
        beratBadan: `${measurement.weight} Kg`,
        lingkarKepala: `${measurement.headCircumference} Cm`,
        lingkarLengan: `${measurement.armCircumference} Cm`,
        usia: calculateAge(measurement.date), // Fungsi bantu
        statusGizi: measurement.nutritionalStatus,
      }));
    } catch (error) {
      console.error("Error fetching measurements:", error);
      return [];
    }
  };
  
  // Fungsi untuk menghitung usia (dari tanggal pengukuran ke saat ini)
  const calculateAge = (date: Date): string => {
    const diff = new Date().getTime() - new Date(date).getTime();
    const ageDate = new Date(diff);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    return `${years} Tahun ${months} Bulan`;
  };

// Fetch measurements for children associated with a specific user
export const getMeasurementsByUserId = async (userId: string, childId: string) => {
  try {
    // Ambil pengukuran hanya untuk childId yang terkait dengan userId
    const measurements = await prisma.measurement.findMany({
      where: {
        childId: Number(childId),
        Child: {
          userId: userId,
        },
      },
      include: { Child: true },
    });

    return measurements.map((measurement) => ({
      id: measurement.id,
      namaOrangTua: measurement.Child.name,
      tinggiBadan: `${measurement.height} Cm`,
      beratBadan: `${measurement.weight} Kg`,
      lingkarKepala: `${measurement.headCircumference} Cm`,
      lingkarLengan: `${measurement.armCircumference} Cm`,
      usia: calculateAge(measurement.date),
      statusGizi: measurement.nutritionalStatus,
      tanggalInput: measurement.date.toISOString().split("T")[0], // Format tanggal sesuai kebutuhan
    }));
  } catch (error) {
    console.error("Error fetching measurements by userId and childId:", error);
    return [];
  }
};