<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Categories;
use App\Models\OrderItem;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Products extends Model
{
    use HasFactory;
    //
    protected $fillable = [
        'name',
        'description',
        'stock',
        'price',
        'url_image',
    ];
    // category relationship
    public function category() {
        return $this->belongsTo(Categories::class);
    }
    // orderItems relationship
    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }
    
}
