<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Order::all();
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
        $order = new Order();
        $order-> user_id = $request->input("user_id");
        $order-> customer_id = $request->input("customer_id");
        $order-> total_amount = $request->input("total_amount");
        $order-> status = $request->input("status");

        $order -> save();
        return response()->json($order, 201);
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
        $order = Order::find($id);;
           

        //  return dd($product_json);
         if ($order) {
            $order->status = $request->input('status');
        
            $order->save();

             return response()->json($order, 200);
         } else {
             return response()->json(['message' =>  "No encontrado id: {$id}"], 404);
         }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function lastorder(){
        // $consulta = Customer::all()->latest()->first();
        $consulta = Order::all()->last();
        return response()->json($consulta, 200);
    }
}
