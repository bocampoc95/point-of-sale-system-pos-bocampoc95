<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $orders = Order::with(['customer:id,name,email']) // Carga la relación con Customer
        ->select('id as order_id', 'customer_id', 'created_at as date','total_amount', 'status')
        ->where('status', 'paid') // Selecciona columnas de Order
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
    $TotalAcount = $orders->sum('total_amount');
    return [$orders, $TotalAcount];
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
        $newSale = new Payment();
        $newSale->order_id = $request->input('order_id');
        $newSale->amount = $request->input('amount');
        $newSale->method = $request->input('method');
        $newSale->status = $request->input('status');
        $newSale->save();
        return response()->json($newSale, 200);
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
