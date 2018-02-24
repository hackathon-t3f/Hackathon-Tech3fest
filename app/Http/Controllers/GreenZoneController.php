<?php

namespace App\Http\Controllers;

use App\Models\GreenZone;

class GreenZoneController extends Controller
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

    public function getGreenZonesByLocalization($lat, $lon)
    {
        return $lat . '-' . $lon;
    }
}
