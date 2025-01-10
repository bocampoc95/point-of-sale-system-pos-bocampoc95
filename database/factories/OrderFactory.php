<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => rand(1, 4), // Asume que hay 10 usuarios iniciales
            'customer_id' => rand(1, 15), // Asume que hay 15 clientes iniciales
            'total_amount' => rand(0,1000), // Será calculado más adelante
            'status' => ['Paid', 'Pending'][rand(0, 1)], // Será calculado más adelante
        ];
    }
}
