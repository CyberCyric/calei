<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Video extends Model
{
    use HasFactory;

    public function resourceType()
    {
        return $this->belongsTo(ResourceType::class);
    }

    public function performer()
    {
        return $this->belongsTo(Performer::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
