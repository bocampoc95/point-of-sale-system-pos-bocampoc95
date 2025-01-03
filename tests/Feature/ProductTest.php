<?php

namespace Tests\Feature;

use App\Models\Products;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductTest extends TestCase
{
  // use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $this->withoutExceptionHandling();
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    /**   @test */ 
    public function product_can_be_created()
    {
        $this -> withoutExceptionHandling();
        
        $response = $this->post('/product',[
            'name'=>'leche',
            'description'=>'don queso',
            'stock'=>10,
            'price'=>10,
            'categories_id'=> 4,
        ]);
        $this ->assertCount(1,Products::all());
        $category = Products::first();
        $this -> assertEquals($category->name,'leche');
    
    }
     /**   @test */ 
    public function product_can_be_retrieved(){
        Products::factory(5)->create();
        $response = $this->get('/categories');
        $response ->assertOk();

        $category = Products::all();

        $this->assertCount(5,$category);
        // $response->assertViewIs('categories.index');
        // $response->assertViewHas('categories',$category);
        
    }
     /**   @test */ 
    public function product_can_be_list()
    {
        $this -> withoutExceptionHandling();
        $response = $this->get('/product');
        $response -> assertOk();
        $data = $this ->assertCount(2,Products::all());
        print($data);

    
    }
         /**   @test */ 
    public function product_can_be_update(){
        $this -> withoutExceptionHandling();
    
        $category = Products::first();
        print($category);
        print($category->id);
        $response = $this->put("/categories/{$category[0]->id}",['name'=>'Carnes']);
        $response ->assertOk();

        $category = Products::findOrFail($category->id);

        // $response-> assertJsonCount()
        $this->assertEquals($category->name,'Carnes');
    
    
            // $response->assertViewIs('categories.index');
            // $response->assertViewHas('categories',$category);
            
        }
      /**   @test */ 
      public function product_can_be_delete()
      {
          $this -> withoutExceptionHandling();
          $id = Products::first()->id;
          $response = $this->delete("/categories/{$id}");
          $response -> assertOk();
          $this ->assertCount(0,Products::all());

      
      }
}
