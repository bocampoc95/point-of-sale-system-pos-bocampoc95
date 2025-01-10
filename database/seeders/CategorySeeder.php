<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Categories::insert([
            ['name' => 'Bebidas', 'description' => 'Refrescos, agua, jugos', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Snacks', 'description' => 'Productos pequeños como galletas y papas fritas', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Limpieza', 'description' => 'Productos de limpieza doméstica', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
