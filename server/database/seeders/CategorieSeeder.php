<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categorie;


class CategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'name' => 'Écran'
            ],
            [
                'name' => 'Clavier'
            ],
            [
                'name' => 'Souris'
            ],
            [
                'name' => 'Son et Audio'
            ],
            [
                'name' => 'Carte graphique'
            ],
            [
                'name' => 'Image et Vidéo'
            ],
            [
                'name' => 'Best-seller'
            ],
        ];
        Categorie::insert($products);
    }
}
