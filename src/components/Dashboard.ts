const Dashboard =  ` <div class="min-h-screen flex">
        <!-- Sidebar -->


        <!-- Main content -->
        
        <div class="flex-1 p-6">
        
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Sales Pie Chart -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-2">Ventas por Producto</h2>
                    <div id="salesPieChart"></div>
                </div>
                <!-- Revenue Bar Chart -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-2">Ingresos Mensuales</h2>
                    <div id="revenueBarChart"></div>
                </div>
                <!-- Orders Line Chart -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-2">Pedidos Semanales</h2>
                    <div id="ordersLineChart"></div>
                </div>
            </div>
        </div>
    </div>`

document.querySelector<HTMLDivElement>('#content_dash_cp')!.innerHTML = Dashboard;


export default Dashboard;