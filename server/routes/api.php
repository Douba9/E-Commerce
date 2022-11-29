<?php

use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});

Route::controller(ProductController::class)->group(function() {
    Route::post('store-product', 'store');
    Route::put('update-product/{id}', 'update');
    Route::get('products', 'index');
    Route::get('get-product/{id}', 'show');
    Route::delete('delete-product/{id}', 'destroy');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
