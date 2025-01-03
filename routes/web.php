<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


//  Categories
Route::post('/categories', [CategoryController::class,'store']);
Route::get('/categories', [CategoryController::class,'index']);
Route::put('/categories/{categories}', [CategoryController::class,'update']);
Route::delete('categories/{id}', [CategoryController::class,'destroy']);


// Product
Route::post('/product', [ProductController::class,'store']);
Route::get('/product', [ProductController::class,'index']);
Route::put('/product/{categories}', [ProductController::class,'update']);
Route::delete('product/{id}', [ProductController::class,'destroy']);
