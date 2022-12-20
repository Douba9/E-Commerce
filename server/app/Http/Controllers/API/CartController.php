<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Orders;
use App\Models\OrdersItems;

class CartController extends Controller
{
    // Ajoute un produit au panier
    public function add(Request $request)
    {
        // Validation des données de la requête
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        // Récupération du produit
        $product = Product::find($request->product_id);

        // Vérification de la disponibilité du produit
        if ($product->stock < $request->quantity) {
            return response()->json([
                'error' => 'La quantité demandée n\'est pas disponible'
            ], 400);
        }

        // Vérification de l'existence d'une commande en cours pour l'utilisateur connecté
        $order = Orders::where('user_id', $request->user_id)
            ->where('status', 'pending')
            ->first();

        if (!$order) {
            // Création d'une nouvelle commande en cours
            $order = Orders::create([
                'user_id' => $request->user_id,
                'status' => 'pending',
                'total' => 0
            ]);
        }

        // Vérification de l'existence d'un élément de commande pour le produit ajouté
        $orderItem = OrdersItems::where('orders_id', $order->id)
            ->where('product_id', $product->id)
            ->first();

        if ($orderItem) {
            // Mise à jour de la quantité de l'élément de commande existant
            $orderItem->update([
                'quantity' => $orderItem->quantity + $request->quantity
            ]);
        } else {
            // Création d'un nouvel élément de commande
            OrdersItems::create([
                'orders_id' => $order->id,
                'product_id' => $product->id,
                'quantity' => $request->quantity,
                'price' => intval(str_replace('$', '', $product->price)),
            ]);
        }

        return response()->json([
            'success' => 'Le produit a été ajouté au panier'
        ]);
    }

    // Affiche le contenu du panier
    public function show(Request $request)
    {

        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);
        // Récupération de la commande en cours pour l'utilisateur connecté
        $order = Orders::with(['items.product'])
            ->where('user_id', $request->user_id)
            ->where('status', 'pending')
            ->first();

        if (!$order) {
            // Pas de commande en cours
            return response()->json([]);
        }

        // Calcul du total de la commande
        $total = $order->items->sum(function ($item) {
            return $item->quantity * $item->price;
        });

        return response()->json([
            'items' => $order->items,
            'total' => $total,
        ]);
    }

    // Vide le panier
    public function clear(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);
        // Récupération de la commande en cours pour l'utilisateur connecté
        $order = Orders::where('user_id', $request->user_id)
            ->where('status', 'pending')
            ->first();

        if (!$order) {
            // Pas de commande en cours
            return response()->json([
                'success' => 'Le panier est déjà vide'
            ]);
        }

        // Suppression de tous les éléments de commande de la commande en cours
        OrdersItems::where('orders_id', $order->id)->delete();

        return response()->json([
            'success' => 'Le panier a été vidé'
        ]);
    }
}
