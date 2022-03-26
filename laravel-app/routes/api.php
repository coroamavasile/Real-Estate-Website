<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [UserController::class,'register']);
Route::post('login', [UserController::class,'login']);
Route::get('user/all', [UserController::class,'list']);
Route::delete('user/delete/{id}', [UserController::class,'delete']);
Route::get('user/get/{id}', [UserController::class,'getUser']);
Route::put('user/edit', [UserController::class,'editUser']);
Route::post('user/addfile', [UserController::class,'addFile']);
Route::post('user/programare', [UserController::class,'addProgramare']);
Route::post('user/proprietate', [UserController::class,'addProprietate']);
Route::get('user/proprietate/all', [UserController::class,'listProperties']);
Route::get('user/programare/all', [UserController::class,'listAppointments']);

