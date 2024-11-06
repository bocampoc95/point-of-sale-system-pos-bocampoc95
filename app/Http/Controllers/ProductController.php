<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 
        // $products = Products::all();
        // return view('coches.index', compact('coches'));

        
        return  Products::all();
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
        // 'name'
        // 'description',
        // 'stock',
        // 'price',
        $product = new Products();
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->stock = $request->input('stock');
        $product->price = $request->input('price');
        $product->categories_id = $request->input('categories_id');
        $product->save();
        return response()->json($request, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $product = Products::find($id);
        if ($product) {
            return response()->json($product, 200);
        } else {
            return response()->json(['message' => "No encontrado id: {$id}"], 404);
        }

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
      return ProductController::show($id);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
            // $product = json_decode(ProductController::show($id)->content(), true);
            
            $product = Products::find($id);;
           

            //  return dd($product_json);
             if ($product) {
                $product->name = $request->input('name');
                $product->description = $request->input('description');
                $product->stock = $request->input('stock');
                $product->price = $request->input('price');
                $product->categories_id = $request->input('categories_id');
                $product->save();
    
                 return response()->json($product, 200);
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
        $product = Products::find($id);
        if ($product) {
            $product->delete();
            return response()->json(['message' =>  "Eliminado encontrado id: {$id}"], 200);
        } else {
            return response()->json(['message' =>  "No encontrado id: {$id}"], 404);
        }
    }

    
}
