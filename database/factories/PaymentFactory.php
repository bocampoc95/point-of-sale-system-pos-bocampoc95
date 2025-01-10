<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'user_id' => rand(1, 4), // Asume que hay 10 usuarios iniciales
            'order_id' => rand(1, 3), // Asume que hay 15 clientes iniciales
            'amount' => 1000, // Será
            'method' => 'card', // Será
            'status' => 'pending', // Será
            
        ];
    }
}
