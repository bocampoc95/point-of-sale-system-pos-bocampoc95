<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SaleController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    print($request);
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Route::post('/email/verify/{id}/{hash}', [AuthController::class, 'emailVerify'])->name('verification.verify');
// Route::post('/resend-email-verify', [AuthController::class, 'resendEmailVerificationMail'])->middleware('auth:sanctum');

// Route::post('/forgot-password', [AuthController::class, 'forgotPassword'])->middleware('web');
// Route::post('/reset-password', [AuthController::class, 'resetPassword'])->middleware('web')->name('password.reset');
// Route::post('/register',function(Request $request){
//     $newUser = new User();
//     $newUser->name = $request->input('name');
//     $newUser->password = $request->input('password');
//     $newUser->email = $request->input('email');
//     print($newUser);
//     print($request);
//     print("API");
//    //  $newUser->save();
//     return response()->json($request, 201);
       
//    });
Route::apiResource('product', ProductController::class);
Route::apiResource('category', CategoryController::class);
Route::apiResource('customer', CustomerController::class);
Route::apiResource('sale', SaleController::class);
Route::apiResource('order', OrderController::class);
Route::apiResource('orderitem', OrderItemController::class);
Route::get('lastcustomer', [CustomerController::class, 'lastregister']);
Route::get('lastorder', [OrderController::class, 'lastorder']);

