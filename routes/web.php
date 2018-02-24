<?php

use App\Todo;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'api'], function () use ($router) {

  /**
  * Get all neighborhoods
  */
  $router->get('/neighborhoods', 'NeighborhoodController@getNeighborhoods');

  /**
  * Get all greenzone near localization
  */
  $router->get('greenzones/{lat}/{lon}', 'GreenZoneController@getGreenZonesByLocalization');

  /**
  * Get data by greenzone
  */
  $router->get('data/{greenzoneId}', 'DataController@getDataByGreenZone');

});
