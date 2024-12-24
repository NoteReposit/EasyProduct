<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    private $products = [
        ['id' => 1, 'name' => 'Gaming Laptop', 
         'description' => 'Powerful laptop with high-end graphics for gaming', 
         'price' => 2000, 
         'imgSource' => '/images/product.jpg'],
         
        ['id' => 2, 'name' => 'Wireless Earbuds', 
         'description' => 'Noise-cancelling earbuds with excellent sound quality', 
         'price' => 120, 
         'imgSource' => '/images/product.jpg'],
    
        ['id' => 3, 'name' => '4K Monitor', 
         'description' => 'Ultra HD monitor for professional work and entertainment', 
         'price' => 400, 
         'imgSource' => '/images/product.jpg'],
    
        ['id' => 4, 'name' => 'Mechanical Keyboard', 
         'description' => 'RGB mechanical keyboard with customizable keys', 
         'price' => 150, 
         'imgSource' => '/images/product.jpg'],
    
        ['id' => 5, 'name' => 'Smartwatch', 
         'description' => 'Fitness tracking smartwatch with long battery life', 
         'price' => 300, 
         'imgSource' => '/images/product.jpg'],
    
        ['id' => 6, 'name' => 'Bluetooth Speaker', 
         'description' => 'Portable Bluetooth speaker with rich bass', 
         'price' => 80, 
         'imgSource' => '/images/product.jpg'],
    
        ['id' => 7, 'name' => 'Gaming Chair', 
         'description' => 'Ergonomic gaming chair with adjustable features', 
         'price' => 250, 
         'imgSource' => '/images/product.jpg'],
    
        ['id' => 8, 'name' => 'DSLR Camera', 
         'description' => 'Professional DSLR camera for high-quality photography', 
         'price' => 1200, 
         'imgSource' => '/images/product.jpg'],
    
        ['id' => 9, 'name' => 'Electric Scooter', 
         'description' => 'Eco-friendly electric scooter with great range', 
         'price' => 700, 
         'imgSource' => '/images/product.jpg'],
    
        ['id' => 10, 'name' => 'VR Headset', 
         'description' => 'Virtual reality headset for immersive experiences', 
         'price' => 350, 
         'imgSource' => '/images/product.jpg'],
    ];    
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Products/Index', ['products'=>$this->products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $product = collect($this->products)->firstWhere('id', $id);

        if (!$product) {
            abort(404, 'Product not found');
        }

        return Inertia::render('Products/Show', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
