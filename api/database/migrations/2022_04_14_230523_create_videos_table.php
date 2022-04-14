<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('performer_id');
            $table->string('description')->nullable();;
            $table->string('location')->nullable();;
            $table->string('date')->nullable();;
            $table->string('thumbnail')->nullable();;
            $table->unsignedBigInteger('language_id');
            $table->string('url');
            $table->unsignedBigInteger('source_id');
            $table->foreign('performer_id')->references('id')->on('performers');
            $table->foreign('language_id')->references('id')->on('languages');
            $table->foreign('source_id')->references('id')->on('sources');
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
        Schema::dropIfExists('videos');
    }
}
