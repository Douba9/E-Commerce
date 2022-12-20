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
                "amount" => '9.99'
            ],
            [
                'country' => 'France',
                'region' => "Banlieu proche paris",
                "amount" => '14.99'
            ],
            [
                'country' => 'France',
                'region' => "Orléan",
                "amount" => '19.99'
            ],
            [
                'country' => 'United Kingdom',
                'region' => "London",
                "amount" => '29.90'
            ],
            [
                'country' => 'United Kingdom',
                'region' => "Manchester",
                "amount" => '29.90'
            ],
            [
                'country' => 'United Kingdom',
                'region' => "Liverpool",
                "amount" => '29.90'
            ],
        ];
        ShippingFee::insert($fdp);
    }
}
