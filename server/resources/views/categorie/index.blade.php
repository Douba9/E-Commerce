@extends('layouts.app')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Produit</h2>
            </div>
            <div class="pull-right">
                @can('categorie-create')
                <a class="btn btn-success" href="{{ route('categorie.create') }}"> Crée une nouvelle categorie</a>
                @endcan
            </div>
        </div>
    </div>


    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif


    <table class="table table-bordered">
        <tr>
            <th>No</th>
            <th>Nom</th>
            <th>categorie_id</th>

            <th width="280px">Action</th>
        </tr>
	    @foreach ($categorie as $categorie)
	    <tr>
	        <td>{{ ++$i }}</td>
	        <td>{{ $categorie->name }}</td>
	        <td>{{ $categorie->product_id }}</td>

	        <td>
                <form action="{{ route('categorie.destroy',$categorie->id) }}" method="POST">
                    <a class="btn btn-info" href="{{ route('categorie.show',$categorie->id) }}">voir</a>
                    @can('categorie-edit')
                    <a class="btn btn-primary" href="{{ route('categorie.edit',$categorie->id) }}">modifier</a>
                    @endcan


                    @csrf
                    @method('DELETE')
                    @can('categorie-delete')
                    <button type="submit" class="btn btn-danger">supprimer</button>
                    @endcan
                </form>
	        </td>
	    </tr>
	    @endforeach
    </table>


    <!-- {!! $categorie !!} -->


@endsection