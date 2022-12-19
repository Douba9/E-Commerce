<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\CategorieController;
use App\Http\Controllers\API\CartController;

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

    //Route login/register
Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register'); // création de compte
    Route::post('login', 'login'); // connexion
});

    //Route produits
Route::controller(ProductController::class)->group(function() {
    Route::post('store-product', 'store'); // création du produit
    Route::put('update-product/{id}', 'update'); // mise à jour du produit
    Route::get('show-products', 'index'); // affichage des produit
    Route::get('get-product/{id}', 'show'); // affichage du produit
    Route::delete('delete-product/{id}', 'destroy'); // suppression du produit
    Route::get('product-by-name/{name}', 'show_by_name'); // recherche par nom du produit
});

    //Route Categorie
Route::controller(CategorieController::class)->group(function() {
    Route::post('store-categorie', 'store'); // création du produit
    Route::put('update-categorie/{id}', 'update'); // mise à jour du produit
    Route::get('show-categories', 'index'); // affichage des produit
    Route::get('get-categorie/{id}', 'show'); // affichage du produit
    Route::delete('delete-categorie/{id}', 'destroy'); // suppression du produit
});

    //Route panier
Route::controller(CartController::class)->group(function(){
    Route::post('cart/add', 'add'); // Ajout d'un produit au panier
    Route::post('cart/show', 'show'); // Affichage des produits du panier
    Route::post('cart/clear', 'clear'); // Vide le panier
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
