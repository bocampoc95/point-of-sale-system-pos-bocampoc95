import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getSale } from "../services/saleService";

const Dashboard = () => {
  const meses = Array.from({ length: 12 }, (_, i) => 
    new Date(0, i).toLocaleString("es", { month: "long" })
  );
  
  console.log(meses);
  
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [daySale, setDay] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    salesPie: {},
    revenueBar: {},
    ordersLine: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSale();
        const totalAmounts = response.data[0].map(order => parseFloat(order.total_amount));
        const productNames = response.data[0].map(order => order.name);
        const ticketDates = response.data[0].map(order => order.date);
        setSales(totalAmounts);
        setProducts(productNames);
        setDay(ticketDates);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (sales.length > 0 && products.length > 0) {
      setChartOptions({
        salesPie: {
          chart: { type: "pie", height: 500 },
          series: sales,
          labels: products,
        },
        revenueBar: {
          chart: { type: "bar", height: 280 },
          series: [{ name: "Ingresos", data: [10000, 12000, 15000, 13000, 17000, 19000, 22000] }],
          // xaxis: { categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"] },
          xaxis: { categories: meses },
        },
        ordersLine: {
          chart: { type: "line", height: 280 },
          series: [{ name: "Pedidos", data:sales }],
          xaxis: { categories: daySale },
        },
      });
    }
  }, [sales, products]);

  return (
    <div className="w-full flex-auto font-sans flex flex-col items-center justify-between">
      {/* HEADER */}
      <div id="header_cp" className="w-full"></div>

      <main className="w-full md:flex 4xl:flex-col items-center gap-2 justify-between">
        <div className="w-full flex flex-col justify-between p-6">
          {/* Título */}
          <div className="Topo w-full justify-between items-center inline-flex p-4">
            <h1 className="text-[#464646] text-[32px] font-bold font-['Raleway']">Reportes</h1>
            <div className="Botao justify-start items-center gap-2 flex">
              <span className="text-[#2a7ae4] text-base font-bold font-['Raleway']">Opciones</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Gráfica de Ventas por Producto */}
            <ChartCard title="Ventas por Producto" options={chartOptions.salesPie} type="pie" />

            {/* Gráfica de Ingresos Mensuales */}
            <ChartCard title="Ingresos Mensuales" options={chartOptions.revenueBar} type="bar" height={280} />

            {/* Gráfica de Pedidos Semanales */}
            <ChartCard title="Pedidos Semanales" options={chartOptions.ordersLine} type="line" height={280} />
          </div>
        </div>
      </main>
    </div>
  );
};

// Componente reutilizable para las gráficas
const ChartCard = ({ title, options, type, height = 500 }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {Object.keys(options).length === 0 ? (
      <p>Cargando datos...</p>
    ) : (
      <Chart options={options} series={options.series} type={type} height={height} />
    )}
  </div>
);

export default Dashboard;
