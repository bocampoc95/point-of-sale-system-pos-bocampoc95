<?php

namespace Tests\Feature;

use App\Models\Categories;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryTest extends TestCase
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
    public function category_can_be_created()
    {
        $this -> withoutExceptionHandling();
        $response = $this->post('/categories',[
            'name' => 'lacteos'
        ]); 
        $this ->assertCount(1,Categories::all());
        $category = Categories::first();
        $this -> assertEquals($category->name,'lacteos');
    
    }
     /**   @test */ 
    public function category_can_be_retrieved(){
        Categories::factory(5)->create();
        $response = $this->get('/categories');
        $response ->assertOk();

        $category = Categories::all();

        $this->assertCount(5,$category);

        // $response->assertViewIs('categories.index');
        // $response->assertViewHas('categories',$category);
        
    }
     /**   @test */ 
    public function category_can_be_list()
    {
        $this -> withoutExceptionHandling();
        $response = $this->get('/categories'); 
        $response -> assertOk();
        $data = $this ->assertCount(0,Categories::all());
        print($data);
        $category = Categories::first();
        print($category);
        $this -> assertEquals($category->name,'lacteos');
        $category = Categories::latest()->first();
        print($category);
        $this -> assertEquals($category->name,'category name');
    
    }
         /**   @test */ 
    public function category_can_be_update(){
        $this -> withoutExceptionHandling();
    
        $category = Categories::first();
        print($category);
        print($category->id);
        $response = $this->put("/categories/{$category[0]->id}",['name'=>'Carnes']);
        $response ->assertOk();
        $category = Categories::findOrFail($category->id);
        $this->assertEquals($category->name,'Carnes');

            // $response->assertViewIs('categories.index');
            // $response->assertViewHas('categories',$category);
            
        }
      /**   @test */ 
      public function category_can_be_delete()
      {
          $this -> withoutExceptionHandling();
          $id = Categories::first()->id;
          $response = $this->delete("/categories/{$id}");
          $response -> assertOk();
          $this ->assertCount(0,Categories::all());
      }
}
