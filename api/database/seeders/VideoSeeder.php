<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('videos')->insert([
            'title' => 'El Cumanés',
            'performer_id' => '1',
            'description' => 'yada yada',
            'language_id' => '1',
            'url' => 'https://www.youtube.com/watch?v=o7_Lfa2jMk0',
            'source_id' => '1'
        ]);
        DB::table('videos')->insert([
            'title' => 'Coincidencia Total',
            'performer_id' => '2',
            'description' => 'yada yada',
            'language_id' => '1',
            'url' => 'https://www.youtube.com/watch?v=3N1In1-QtNY',
            'source_id' => '1'
        ]);
    }
}
