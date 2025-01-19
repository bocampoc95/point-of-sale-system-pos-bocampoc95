import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
// import "tailwindcss/tailwind.css";

const Dashboard = () => {
  const [salesPieOptions, setSalesPieOptions] = useState({});
  const [revenueBarOptions, setRevenueBarOptions] = useState({});
  const [ordersLineOptions, setOrdersLineOptions] = useState({});
  
  useEffect(() => {
    setSalesPieOptions({
      chart: { type: "pie", height: 500 },
      series: [44, 55, 13, 43, 22],
      labels: ["Producto A", "Producto B", "Producto C", "Producto D", "Producto E"],
    });

    setRevenueBarOptions({
      chart: { type: "bar", height: 280 },
      series: [{ name: "Ingresos", data: [10000, 12000, 15000, 13000, 17000, 19000, 22000] }],
      xaxis: { categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"] },
    });

    setOrdersLineOptions({
      chart: { type: "line", height: 280 },
      series: [{ name: "Pedidos", data: [30, 40, 35, 50, 49, 60, 70] }],
      xaxis: { categories: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5", "Semana 6", "Semana 7"] },
    });
  }, []);
  const isSalesPieOptionsEmpty = Object.keys(salesPieOptions).length === 0;
  const isRevenuePieOptionsEmpty = Object.keys(revenueBarOptions).length === 0;
  const isOrdersPieOptionsEmpty = Object.keys(ordersLineOptions).length === 0;
  return (
    <div className="w-full flex-auto font-sans flex flex-col items-center justify-between">
      {/* HEADER */}
      <div id="header_cp" className="w-full"></div>
      
      <main className="w-full md:flex 4xl:flex-col items-center gap-2 justify-between">
        <div className="w-full flex flex-col justify-between p-6">
          {/* Producto title */}
          <div className="Topo w-full justify-between items-center inline-flex p-4">
            <div className="Productos text-[#464646] text-[32px] font-bold font-['Raleway']">Reportes</div>
            <div className="Botao justify-start items-center gap-2 flex">
              <div className="VerTodo text-[#2a7ae4] text-base font-bold font-['Raleway']">Opciones</div>
            </div>
          </div>
          {/* Producto title */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Sales Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Ventas por Producto</h2>
              <div>
      {isSalesPieOptionsEmpty ? (
        <p>El estado salesPieOptions está vacío</p>
      ) : (
        <Chart options={salesPieOptions} series={salesPieOptions.series} type="pie"  />

      )}
    </div>
            </div>

            {/* Revenue Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Ingresos Mensuales</h2>
              <div>
      {isRevenuePieOptionsEmpty ? (
        <p>El estado revenurBarOptions está vacío</p>
      ) : (
        <Chart options={revenueBarOptions} series={revenueBarOptions.series} type="bar" height={280} />

      )}
    </div>
            
            </div>

            {/* Orders Line Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Pedidos Semanales</h2>
              <div>
      {isOrdersPieOptionsEmpty ? (
        <p>El estado revenurBarOptions está vacío</p>
      ) : (
        <Chart options={ordersLineOptions} series={ordersLineOptions.series} type="line" height={280} />

      )}
    </div>
            </div>
          </div>
        </div>

      </main>

   
    </div>
  );
};

export default Dashboard;
