<?php

namespace App\Http\Controllers\API;


use App\Models\ShippingFee;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\ShippingFeeResource;
use Validator;

    
class ShippingFeeController extends BaseController
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

    public function show($id)
    {
        $shippingFee = ShippingFee::find($id);
  
        if (is_null($shippingFee)) {
            return $this->sendError('Aucunne livraison possible dans cette region ou ce pays.');
        }

        return $this->sendResponse(new ShippingFeeResource($shippingFee), 'Nous livrons chez vous voici le mmontant de la livraison classic '.$shippingFee->amount.'$ et si vous souhaitez une livraison rapide, elle n\'est qu\'à '.$shippingFee->fast48H.'$ .');

    }


}
