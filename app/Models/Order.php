<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    //user relationship
    public function user() {
        return $this->belongsTo(User::class);
    }
    // customer relationship
    public function customer() {
        return $this->belongsTo(Customer::class);
    }
    // orderItems relationship
    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }
    // payments relationship
    public function payments() {
        return $this->hasMany(Payment::class);
    }
    
    
}
