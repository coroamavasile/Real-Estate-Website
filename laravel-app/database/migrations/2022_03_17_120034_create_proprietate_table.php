<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proprietate', function (Blueprint $table) {
            $table->id();
            $table->string('userId');
            $table->string('ownerName');
            $table->string('price');
            $table->string('description');
            $table->string('address');
            $table->string("title");
            $table->string("imageUrl");
            $table->string("type");
            $table->boolean("rent");
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
        Schema::dropIfExists('proprietate');
    }
};
