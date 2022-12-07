@extends('categorie.layout')
  
@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2> Voir la catégorie</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('categorie.index') }}"> RETOUR</a>
            </div>
        </div>
    </div>
   
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Name:</strong>
                {{ $categorie->name }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Product_id:</strong>
                {{ $categorie->product_id }}
            </div>
        </div>
    </div>
@endsection