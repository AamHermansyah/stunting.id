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
  height: string;
  weight: string;
  headCircumference: string;
  armCircumference: string;
  date: string;
  nutritionalStatus: string;
}) => {
  try {
    await prisma.measurement.create({
      data: {
        childId: Number(form.childId),
        height: parseFloat(form.height),
        weight: parseFloat(form.weight),
        headCircumference: parseFloat(form.headCircumference),
        armCircumference: parseFloat(form.armCircumference),
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