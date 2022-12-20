<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ShippingFee;

class ShippingFeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $fdp = [
            [
                'country' => 'France',
                'region' => "Paris",
                "amount" => '9.99',
                'fast48H' => '15.95'
            ],
            [
                'country' => 'France',
                'region' => "Banlieu proche paris",
                "amount" => '14.99',
                'fast48H' => '22.90'
            ],
            [
                'country' => 'France',
                'region' => "Orléan",
                "amount" => '19.99',
                'fast48H' => '29.99'
            ],
            [
                'country' => 'United Kingdom',
                'region' => "London",
                "amount" => '29.90',
                'fast48H' => '44.15'
            ],
            [
                'country' => 'United Kingdom',
                'region' => "Manchester",
                "amount" => '29.90',
                'fast48H' => '44.15'
            ],
            [
                'country' => 'United Kingdom',
                'region' => "Liverpool",
                "amount" => '29.90',
                'fast48H' => '44.15'
            ],

            /**
             * Pour ajouter d'autre destination de livraison
             */
            // [
            //     'country' => 'value',
            //     'region' => "value",
            //     "amount" => 'price decimal accepted',
            //     'fast48H' => 'price decimal accepted'
            // ],
            // [
            //     'country' => 'value',
            //     'region' => "value",
            //     "amount" => 'price decimal accepted',
            //     'fast48H' => 'price decimal accepted'
            // ],
            // [
            //     'country' => 'value',
            //     'region' => "value",
            //     "amount" => 'price decimal accepted',
            //     'fast48H' => 'price decimal accepted'
            // ],
            // [
            //     'country' => 'value',
            //     'region' => "value",
            //     "amount" => 'price decimal accepted',
            //     'fast48H' => 'price decimal accepted'
            // ],
            // [
            //     'country' => 'value',
            //     'region' => "value",
            //     "amount" => 'price decimal accepted',
            //     'fast48H' => 'price decimal accepted'
            // ],
        ];
        ShippingFee::insert($fdp);
    }
}
