<?php

use Illuminate\Support\Facades\Route;


Route::get('/','menuController@index');

Route::resource('menu','menuController');





