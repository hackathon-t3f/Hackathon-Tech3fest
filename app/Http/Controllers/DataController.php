<?php

namespace App\Http\Controllers;

use App\Models\GreenZone;

class DataController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function getDataByGreenZone($greenZoneId)
    {
        return $greenZoneId;
    }
}
