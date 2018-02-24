<?php

namespace App\Http\Controllers;

use App\Neighborhood;

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

    public function getGreenZonesByLocalization($neighborhoodName)
    {
              $csv = explode('
', file_get_contents('datasets/greenzones.csv'));

              unset($csv[0]);

              $greenzones = [];
              $used = [];

              foreach ($csv as $greenzone) {
                $greenzoneInfo = explode(',', $greenzone);
                $greenzoneNeighborhood = $this->sanitize($greenzoneInfo[0]);
                if (isset($greenzoneInfo[3]) && isset($greenzoneInfo[4]) && isset($greenzoneInfo[5])) {
                $greenzoneName = $this->sanitize($greenzoneInfo[4]);
                  if ($greenzoneNeighborhood == $neighborhoodName && !empty($greenzoneName) && !in_array($greenzoneName, $used)) {
                    $greenzones[] = [
                      'name' => ucwords(strtolower($greenzoneName)),
                      'street' =>$this->sanitize(ucwords(strtolower($greenzoneInfo[3]))),
                      'area' => $this->sanitize(ucwords(strtolower($greenzoneInfo[5]))),
                      'latitude' => isset($greenzoneInfo[6]) ? $greenzoneInfo[6] : '',
                      'longitude' => isset($greenzoneInfo[7]) ? $greenzoneInfo[7] : '',
                    ];

                    $used[] = $greenzoneName;
                  }
                }
              }

              return $greenzones;
    }

    private function sanitize($str) {
      return utf8_encode(trim($str));
    }

}
