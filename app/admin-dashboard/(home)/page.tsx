import React from "react";

import Overview from "./_components/overview";
import Chart from "./_components/chart";
import Greeting from "./_components/text-greeting";
import DataBalitaPrioritas from "./_components/data-balita-priorias";
import TextHelp from "./_components/text-help";


const AdminHome = () => {
  return (
    <>
      <div className="flex flex-col bg-[#fbfeff] space-y-4">
        <Greeting />
        <Overview />
        <Chart />
      </div>
        <DataBalitaPrioritas/>
        <TextHelp/>
    </>
  );
};

export default AdminHome;
