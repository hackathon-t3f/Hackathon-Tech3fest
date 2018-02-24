<?php

namespace App\Http\Controllers;

use App\Neighborhood;

class NeighborhoodController extends Controller
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

    public function getNeighborhoods()
    {
        return json_encode(Neighborhood::getNeighborhoods());
    }
}
