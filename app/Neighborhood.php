<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Neighborhood extends Model {

    protected $fillable = [];

    public static function getNeighborhoods() {
      $csv = explode('
', file_get_contents('datasets/greenzones.csv'));

      unset($csv[0]);

      $neighborhoods = [];
      foreach ($csv as $neighborhood) {
        $neighborhoods[] = utf8_encode(trim(explode(';', $neighborhood)[0]));
      }

      return array_values(array_filter(array_unique($neighborhoods)));
    }

}
