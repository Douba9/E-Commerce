@extends('layouts.app')


@section('content')
<div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <h2>Organisation des zones de livraison</h2>
        </div>
        <div class="pull-right">
        @can('role-create')
            <a class="btn btn-success" href="{{ route('shipping.create') }}"> Crée une nouvelle zones de livraison</a>
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
     <th>country</th>
     <th>Region</th>
     <th>Amount</th>
     <th>Fast 48H</th>
     <th width="280px">Action</th>
  </tr>
    @foreach ($shipping as $key => $ship)
    <tr>
        <td>{{ ++$i }}</td>
        <td>{{ $ship->country }}</td>
        <td>{{ $ship->region }}</td>
        <td>{{ $ship->amount }}</td>
        <td>{{ $ship->fast48H }}</td>
        <td>
            <a class="btn btn-info" href="{{ route('shipping.show',$ship->id) }}">Voir</a>
            @can('role-edit')
                <a class="btn btn-primary" href="{{ route('shipping.edit',$ship->id) }}">Modifier</a>
            @endcan
            @can('role-delete')
                {!! Form::open(['method' => 'DELETE','route' => ['shipping.destroy', $ship->id],'style'=>'display:inline']) !!}
                    {!! Form::submit('Supprimer', ['class' => 'btn btn-danger']) !!}
                {!! Form::close() !!}
            @endcan
        </td>
    </tr>
    @endforeach
</table>


{!! $shipping->render() !!}


@endsection