<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    function __construct()
    {
         $this->middleware('permission:categorie-list|categorie-create|categorie-edit|categorie-delete', ['only' => ['index','store']]);
         $this->middleware('permission:categorie-create', ['only' => ['create','store']]);
         $this->middleware('permission:categorie-edit', ['only' => ['edit','update']]);
         $this->middleware('permission:categorie-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categorie = Categorie::latest()->paginate(5);
        return view('categorie.index',compact('categorie'))->with('i', (request()->input('page', 1) - 1) * 5);
    }
  
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('categorie.create');
    }
  
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
      
        Categorie::create($request->all());
    
        return redirect()->route('categorie.index')->with('success','Catégorie crée avec succès.');
    }
  
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function show(Categorie $categorie)
    {
        return view('categorie.show',compact('categorie'));
    }
  
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function edit(Categorie $categorie)
    {
        return view('categorie.edit',compact('categorie'));
    }
  
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categorie  $Categorie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Categorie $categorie)
    {
        $request->validate([
            'name' => 'required',
        ]);
      
        $categorie->update($request->all());
    
        return redirect()->route('categorie.index')->with('success','Catégorie mise à jour avec succès');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categorie  $Categorie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categorie $categorie)
    {
        $categorie->delete();
    
        return redirect()->route('categorie.index')->with('success','Catégorie supprimer avec succès');
    }
}