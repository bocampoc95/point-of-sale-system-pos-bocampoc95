<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return  Categories::all();
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
        $categorie = new Categories();
        $categorie->name = $request->input('name');
        $categorie->save();
        return response()->json($categorie, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $category = Categories::find($id);
        if ($category) {
            return response()->json($category, 200);
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
        return CategoryController::show($id);
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
        $category = Categories::find($id);
        if ($category) {
            $category->delete();
            return response()->json(['message' =>  "Eliminado  id: {$id}"], 200);
        } else {
            return response()->json(['message' =>  "No encontrado id: {$id}"], 404);
        }
    }
}
