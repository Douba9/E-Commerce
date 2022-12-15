<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CreateAdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //CREATE SUPER USER with all permissions : admin
        $user = User::create([
            'name' => 'Doubacorp', 
            'email' => 'admin@admin.com',
            'password' => bcrypt('123456')
        ]);
    
        $role = Role::create(['name' => 'Admin']);
     
        $permissions = Permission::pluck('id','id')->all();
   
        $role->syncPermissions($permissions);
     
        $user->assignRole([$role->id]);


        //CREATE USER with simple permissions : view categories and products

        $role = Role::create(['name' => 'User']);

        $role->givePermissionTo('categorie-list','product-list');


        $user = User::create([
            'name' => 'Management', 
            'email' => 'product@admin.com',
            'password' => bcrypt('123456')
        ]);
        
        $role = Role::create(['name' => 'Gestion de produit']);

        $role->givePermissionTo('product-list','product-create','product-edit','product-delete','categorie-list','categorie-create','categorie-edit','categorie-delete');
        
        $user->assignRole([$role->id]);

    }
}
