<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return OrderItem::all();
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
        $data = $request->all();

        // Verificar si el request es un array de órdenes o una sola orden
        if (isset($data[0])&& is_array($data)) {
            // Si es un array de órdenes
            foreach ($data as $orderData) {
                $this->createOrderItem($orderData);
            }
            return response()->json(['message' => 'Órdenes creadas correctamente.', 'data' => $data], 201);
        } else {
            // Si es una sola orden
            $this->createOrderItem($data);
            return response()->json(['message' => 'Orden creada correctamente.', 'data' => $data], 201);
        }
    }

    private function createOrderItem($orderData)
    {
        $orderItem = new OrderItem();
        $orderItem->order_id = $orderData['order_id'];
        $orderItem->product_id = $orderData['product_id'];
        $orderItem->quantity = $orderData['quantity'];
        $orderItem->unit_price = $orderData['unit_price'];
        $orderItem->subtotal = $orderData['subtotal'];
        $orderItem->save();
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
