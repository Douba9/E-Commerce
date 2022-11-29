<?php
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
  
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\ProductController;
  
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
Route::controller(ProductController::class)->group(function(){
    Route::post('store-product', 'store'); //création du produit ok
    Route::put('update/{id}', 'update'); //update
    Route::get('get-products', 'index'); // voir tt les produits ok
    Route::get('get-product/{id}', 'show'); // voir un produit en particulier ok
    Route::delete('delete-product/{id}', 'destroy'); // supprimer le produit
});
        
Route::middleware('auth:sanctum')->group( function () {
    Route::resource('products', ProductController::class);
});