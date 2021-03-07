<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::all();
        return $categories;
    }

    public function get($id){
        $category = Category::findById($id);
        return $category;
    }

    public function create(Request $req){
        $category = new Category();
        return $category;
    }

    public function update(Request $req){
        $category = Category::findById($req->id);
        return $category;
    }
}
