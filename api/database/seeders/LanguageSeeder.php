<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('languages')->insert([ 'name' => 'Español', 'code' => 'es' ]);
        DB::table('languages')->insert([ 'name' => 'Inglés', 'code' => 'en' ]);
        DB::table('languages')->insert([ 'name' => '--', 'code' => '--' ]);
    }
}
