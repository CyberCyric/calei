<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTagVideoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tag_video', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('tag_id');
            $table->unsignedBigInteger('video_id');
            // foreign keys
            $table->foreign('tag_id')->references('id')->on('tags');
            $table->foreign('video_id')->references('id')->on('videos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tag_video', function (Blueprint $table) {
            //
        });
    }
}
