<?php
  
use Illuminate\Support\Facades\Route;
  
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UsersController;
  
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group that
| contains the "web" middleware group. Now create something great!
|
*/
  
Route::resource('admin/products', ProductController::class);
Route::resource('admin/users', UsersController::class);