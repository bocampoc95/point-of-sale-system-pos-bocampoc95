<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $customers_orders = Customer::with('orders')->get();
        // // foreach ($customers_orders as $customer) {
        // //     echo "Customer Name: " . $customer->name . "\n";
        // //     foreach ($customer->orders as $order) {
        // //         echo "Order ID: " . $order->id . " | Amount: " . $order->amount . "\n";
        // //     }
        // // }
        // $orders = Order::with(['customer:id,name,email']) // Selecciona solo los campos necesarios
        //     ->select('id as order_id', 'customer_id', 'date', 'status')->get();
        $orders = Order::with(['customer:id,name,email']) // Carga la relación con Customer
            ->select('id as order_id', 'customer_id', 'created_at as date','total_amount', 'status') // Selecciona columnas de Order
            ->get()->map(function ($order) {
                return [
                    'order_id' => $order->order_id,
                    'date' => $order->date,
                    'total_amount' => $order->total_amount,
                    'status' => $order->status,
                    'name' => $order->customer->name ?? null,
                    'email' => $order->customer->email ?? null,
                ];
            });;
        // $order = Order::all();
        return $orders;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
