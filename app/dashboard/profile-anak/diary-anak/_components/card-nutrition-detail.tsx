import React from "react";

const CardNutritionDetail = () => {
  return (
    <div className="p-4 w-full col-span-12 lg:col-span-5 xl:col-span-3 order-1 border rounded-lg space-y-2">
      <div className="flex flex-col p-4 space-2">
        <div className="space-y-2 flex flex-col">
          <h1 className="font-medium text-xl">Senin</h1>
          <span>22 - 07 - 2024</span>
        </div>
        <h2>Nutrisi Pribadi</h2>
        <div className="grid grid-cols-2">
          <div className="col-span-2">
            <h3>Asupan Asi</h3>
            <span>-</span>
          </div>
          <h3>
            Makan Pagi
            <span>-</span>
          </h3>
          <h3>
            Makan Pagi
            <span>-</span>
          </h3>
          <h3>
            Makan Pagi
            <span>-</span>
          </h3>
          <h3>
            Makan Pagi
            <span>-</span>
          </h3>
          <h3>
            Makan Pagi
            <span>-</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardNutritionDetail;
