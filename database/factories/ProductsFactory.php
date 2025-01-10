<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use function Laravel\Prompts\text;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductsFactory extends Factory
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
            'name' => $this->faker->word,
            'description' => $this->faker->sentence,
            'price' => $this->faker->randomFloat(2, 1, 100), // Precio entre 1 y 100
            'stock' => $this->faker->numberBetween(0, 100), // Stock entre 0 y 100
            'categories_id' => rand(1, 3), // Asume que hay 3 categorías iniciales
            'url_image' =>'public/storage/images/products/' . "{$this->faker->image('public/storage/images/products', 640, 480, null, false)}",
            // 'url_image' =>'public/storage/images/products/img1.png',
        ];
    }
}
