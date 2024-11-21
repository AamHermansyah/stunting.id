"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getChildren, createMeasurement } from "@/actions/measurement";

type Child = {
  id: number;
  name: string;
};

const InputMeasurementForm = ({ userId, role }: { userId: string; role: string }) => {
  const [children, setChildren] = useState<Child[]>([]);
  const [form, setForm] = useState({
    childId: "",
    height: "",
    weight: "",
    headCircumference: "",
    armCircumference: "",
    date: "",
    nutritionalStatus: "",
  });

  const router = useRouter();

  // Fetch children on load
  useEffect(() => {
    const fetchData = async () => {
      const data = await getChildren(userId, role);
      setChildren(data);
    };

    fetchData();
  }, [userId, role]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await createMeasurement(form);

    if (success) {
      alert("Measurement added successfully!");
      router.push("/management/pengukuran-balita");
    } else {
      alert("Failed to add measurement.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded border">
      <div>
        <label className="block font-medium mb-2">Child</label>
        <select
          name="childId"
          value={form.childId}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        >
          <option value="">Select a child</option>
          {children.map((child) => (
            <option key={child.id} value={child.id}>
              {child.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-2">Height (cm)</label>
        <input
          type="number"
          name="height"
          value={form.height}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">Weight (kg)</label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">Head Circumference (cm)</label>
        <input
          type="number"
          name="headCircumference"
          value={form.headCircumference}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">Arm Circumference (cm)</label>
        <input
          type="number"
          name="armCircumference"
          value={form.armCircumference}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">Nutritional Status</label>
        <input
          type="text"
          name="nutritionalStatus"
          value={form.nutritionalStatus}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default InputMeasurementForm;
