<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $orders = Order::all();

        foreach ($orders as $order) {
            Payment::create([
                'order_id' => $order->id,
                'amount' => $order->total_amount,
                'method' => ['Cash', 'Card', 'Online'][rand(0, 2)], // Métodos de pago aleatorios
                'status' => ['Paid', 'Pending'][rand(0, 1)], // Estado aleatorio
            ]);
        }
    
    }
}
