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
                    $greenzones['greenzones'][] = [
                      'name' => ucwords(strtolower($greenzoneName)),
                      'street' =>$this->sanitize(ucwords(strtolower($greenzoneInfo[3]))),
                      'area' => $this->sanitize(ucwords(strtolower($greenzoneInfo[5]))),
                      'latitude' => isset($greenzoneInfo[6]) ? $greenzoneInfo[6] : '',
                      'longitude' => isset($greenzoneInfo[7]) ? $greenzoneInfo[7] : ''
                    ];

                    $used[] = $greenzoneName;
                  }
                }
              }

              $greenzones['air'] = $this->getAirQuality($neighborhoodName);

              return $greenzones;
    }

    private function sanitize($str)
    {
      return utf8_encode(trim($str));
    }

    private function getAirQuality($greenzoneNeighborhood)
    {
      $stations = array_filter(explode('
', file_get_contents('datasets/stations.csv')));

$stationsProcessed = [];
foreach ($stations as $station) {
  $stationData = explode(';', $station);
  $stationsProcessed[$stationData[0]] = $stationData[1];
}

$districtCode = $stationsProcessed[$greenzoneNeighborhood];

      $csv = explode('
', file_get_contents('datasets/air.csv'));

      foreach ($csv as $airData) {
        $airData = explode(',', $airData);

        if (isset( $airData[0]) && isset( $airData[1]) && isset( $airData[2])) {
          $thisCode = $airData[0] . $airData[1] . $airData[2];
          if (intval($thisCode) == intval($districtCode)) {
            return [
              '00' => $airData[28],
              '02' => $airData[32],
              '04' => $airData[36],
              '06' => $airData[40],
              '08' => $airData[44],
              '10' => $airData[48],
              '12' => $airData[52],
              '14' => $airData[8],
              '16' => $airData[12],
              '18' => $airData[16],
              '20' => $airData[20],
              '22' => $airData[24],
            ];
          }
      }
    }
  }

}
