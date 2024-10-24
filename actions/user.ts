"use server";

import { prisma } from "@/db";
import { registerParrentsAccount } from "@/schemas/register";
import { z } from "zod";
import bcrypt from "bcrypt";

const allowedRoles = ["KADER", "KEPALA_KADER"];

export const updateUser = async (
  values: z.infer<typeof registerParrentsAccount>,
  id: string,
  userId: string
) => {
  try {
    console.log("userId:", userId);
    console.log("id:", id);

    const user = await prisma.user.findUnique({ where: { id: userId } });
    const parent = await prisma.user.findUnique({ where: { id: String(id) } });

    // Debug: Cek apakah user dan parent ditemukan
    if (!user || !parent) {
      console.log("User or parent not found", { user, parent });
      return { error: "Data tidak ditemukan!" };
    }

    if (user.id !== parent.id && !allowedRoles.includes(user.role))
      return { error: "Unauthorized" };

    // Hash password only if it's provided
    const hashedPassword = values.password
      ? await bcrypt.hash(values.password, 10)
      : parent.password;

    const updatedParent = await prisma.user.update({
      where: { id: parent.id },
      data: {
        name: values.nama,
        email: values.email,
        nik: values.nik,
        address: values.alamat,
        district: values.kecamatan,
        password: hashedPassword,
      },
    });

    return {
      success: "success",
      data: updatedParent,
    };
  } catch (error) {
    console.error("Internal server error:", error);
    return {
      error: "Internal server error",
    };
  }
};
