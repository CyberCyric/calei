<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags')->insert([ 'name' => 'Magia con Cartas' ]);
        DB::table('tags')->insert([ 'name' => 'Mentalismo' ]);
        DB::table('tags')->insert([ 'name' => 'Magia con Monedas' ]);
        DB::table('tags')->insert([ 'name' => 'Infantil' ]);
    }
}
