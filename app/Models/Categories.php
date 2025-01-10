<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
// use App\Models\Products;

class Categories extends Model
{
    //
    // protected $fillable = [
    //     'name',
    //     'description',
    // ];
    // products relationship
    public function products() {
        return $this->hasMany(Products::class);
    }
    
}
