<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Categorie;
use Validator;
use App\Http\Resources\CategoriesRessource;

class CategorieController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Categorie::all();
    
        return $this->sendResponse(CategoriesRessource::collection($categories), 'Catégorie recus avec succès.');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
   
        $validator = Validator::make($input, [
            'name' => 'required'
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $categorie = Categorie::create($input);
   
        return $this->sendResponse(new CategoriesRessource($categorie), 'Catégorie crée avec succès.');
    } 
   
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $categorie = Categorie::find($id);
  
        if (is_null($categorie)) {
            return $this->sendError('Aucune Catégorie trouver.');
        }
   
        return $this->sendResponse(new CategoriesRessource($categorie), 'Catégorie recus avec succès');
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Categorie $categorie)
    {
        $input = $request->all();
   
        $validator = Validator::make($input, [
            'name' => 'required'
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $categorie->name   = $input['name'];         
        $categorie->save();
   
        return $this->sendResponse(new CategoriesRessource($categorie), 'mise à jour de la Catégorie avec succès.');
    }
   
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categorie $categorie)
    {
        $categorie->delete();
   
        return $this->sendResponse([], 'Catégorie supprimer avec succès.');
    }
}