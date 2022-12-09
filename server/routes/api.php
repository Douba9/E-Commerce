<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\CategorieController;

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
    Route::post('register', 'register'); // création de compte
    Route::post('login', 'login'); // connexion
});

Route::controller(ProductController::class)->group(function() {
    Route::post('store-product', 'store'); // création du produit
    Route::put('update-product/{id}', 'update'); // mise à jour du produit
    Route::get('show-products', 'index'); // affichage des produit
    Route::get('get-product/{id}', 'show'); // affichage du produit
    Route::delete('delete-product/{id}', 'destroy'); // suppression du produit
});

Route::controller(CategorieController::class)->group(function() {
    Route::post('store-categorie', 'store');
    Route::put('update-categorie/{id}', 'update'); 
    Route::get('show-categories', 'index'); ;
    Route::get('get-categorie/{id}', 'show');;
    Route::delete('delete-categorie/{id}', 'destroy'); 
});

Route::controller(RoleController::class)->group(function() {
    Route::post('store-role', 'store'); 
    Route::put('update-role/{id}', 'update'); 
    Route::get('show-roles', 'index'); 
    Route::get('get-role/{id}', 'show'); 
    Route::delete('delete-role/{id}', 'destroy'); 
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
    
});
