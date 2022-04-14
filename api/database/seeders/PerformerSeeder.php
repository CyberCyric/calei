<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PerformerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('performers')->insert([ 'name' => 'René Lavand', 'country' => 'Argentina' ]);
        DB::table('performers')->insert([ 'name' => 'Juan Tamariz', 'country' => 'España' ]);
    }
}
