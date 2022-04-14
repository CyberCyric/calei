<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->insert([ 'video_id' => '1', 'user' => 'Santiago Rodriguez', 'comment' => 'First comment yada yada yada' ]);
        DB::table('comments')->insert([ 'video_id' => '1', 'user' => 'Santiago Rodriguez', 'comment' => 'Second comment yada yada yada' ]);
    }
}
