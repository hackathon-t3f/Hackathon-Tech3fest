<?php

namespace App\Http\Controllers;

use App\Models\GreenZone;

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
        $csv = explode('
', file_get_contents('datasets/greenzones.csv'));

        unset($csv[0]);

        $neighborhoods = [];
        foreach ($csv as $neighborhood) {
          $neighborhoods[] = utf8_encode(trim(ucwords(strtolower(explode(';', $neighborhood)[0]))));
        }

        $neighborhoods = array_values(array_filter(array_unique($neighborhoods)));

        $results = [];
        foreach ($neighborhoods as $key=>$neighborhood) {
          $results[] = [
            'id' => $key,
            'text' => $neighborhood
          ];
        }

        return json_encode($results);
    }
}
