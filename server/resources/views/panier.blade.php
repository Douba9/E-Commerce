<!-- resources/views/panier.blade.php -->

<!-- Affiche un message d'erreur si le panier est vide -->
{{-- @if ($items->isEmpty()) --}}
    <p>Votre panier est vide.</p>
{{-- @else --}}
    <!-- Affiche une table contenant les articles du panier -->

    <a href="{{ url('/home') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Acceuil</a>
    <table>
        <thead>
            <tr>
                <th>Article</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <!-- Itère sur chaque article du panier et affiche ses informations -->
            {{-- @foreach ($items as $item)
                <tr>
                    <td>{{ $item->name }}</td>
                    <td>{{ $item->price }} €</td>
                    <td>{{ $item->quantity }}</td>
                    <td>{{ $item->total }} €</td>
                </tr>
            @endforeach --}}
        </tbody>
    </table>

    <!-- Affiche le prix total du panier -->
    <p>Prix total: {{ 12 }} €</p>
{{-- @endif --}}