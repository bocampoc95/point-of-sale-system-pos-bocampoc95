<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Products;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $orders = Order::all();
        $products = Products::all();

        foreach ($orders as $order) {
            $randomProducts = $products->random(rand(1, count($products))); // Selecciona entre 1 y 5 productos aleatorios
            foreach ($randomProducts as $product) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'quantity' => rand(1, 10),
                    'unit_price' => $product->price,
                    'subtotal' => $product->price * rand(1, 10),
                ]);
            }
        }
    }
}
