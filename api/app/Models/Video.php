<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\DocBlock\Tag;

class Video extends Model
{
    use HasFactory;

    public function resourceType()
    {
        return $this->belongsTo(ResourceType::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
