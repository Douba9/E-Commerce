<?php

namespace App\Http\Controllers;


use App\Models\ShippingFee;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\ShippingFeeResource;

    
class ShippingFeeController extends Controller
{
    public function getShippingFee(Request $request)
    {
        $country = $request->input('country');
        $region = $request->input('region');

        $shippingFee = ShippingFee::where('country', $country)
            ->where('region', $region)
            ->first();

        if ($shippingFee) {
            return response()->json([
                'success' => true,
                'shipping_fee' => $shippingFee->amount
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'La livraison n\'est pas disponible dans votre pays ou votre région.'
            ]);
        }
    }

    public function index()
    {
        $shipping = ShippingFee::orderBy('id')->paginate(5);
        return view('shipping.index', compact('shipping'))->with('i', (request()->input('page', 1) - 1) * 5);
    }

    public function create()
    {
        return view('shipping.create');
    }

    public function store(Request $request)
    {
        request()->validate([
            'country' => 'required',
            'region' => 'required',
            'amount' => 'required',
            'fast48H'=> 'required'
        ]);
        
    
        ShippingFee::create($request->all());
    
        return redirect()->route('shipping.index')->with('success','Zone de livraison crée avec succès.');
    }

    public function show(ShippingFee $shipping)
    {
        return view('shipping.show',compact('shipping'));
    }

    public function edit(ShippingFee $shipping)
    {
        return view('shipping.edit',compact('shipping'));
    }

    public function update(Request $request, ShippingFee $shipping)
    {
        request()->validate([
            'country' => 'required',
            'region' => 'required',
            'amount' => 'required',
            'fast48H'=> 'required'
        ]);
    
        $shipping->update($request->all());
    
        return redirect()->route('shipping.index')->with('success','Zone de livraison mise à jour avec succès');
    }

    public function destroy(ShippingFee $shipping)
    {
        $shipping->delete();
    
        return redirect()->route('shipping.index')->with('success','Zone de livraison supprimer avec succès');
    }


}
