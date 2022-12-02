## E-COMMERCE PROJECT  (DIGITAL/ITECH)

## Installation 

1. git clone repository_link "name (as you want for your folder, not required)" 
1. example: git clone https://github.com/Douba9/E-Commerce

2. cd  folder_name
2. example: cd E-commerce: _ cd server && npm i && composer i
                           _ cd front && npm i
3. create .env file and update your DATABASE section (database_name, user_login, password_login) . 
3. example : touch .env and rewrite values here : 
                                                    DB_CONNECTION = mysql
                                                    DB_HOST       =  127.0.0.1
                                                    DB_PORT       =  "write your port number here"
                                                    DB_DATABASE   =  "write your database name here"
                                                    DB_USERNAME   =  "write your database user_name here"
                                                    DB_PASSWORD   =  "write your database user_password here"
4. run : php artisan migrate (to create all necesary tables on your database)
5. run : php artisan serve (to run and start your API)


## Nous utilisons Laravel 9.x pour configurer notre API

<!-- route -->

1. /register => Inscription
1. Opérationnel

2. /login => Connection
2. Opérationnel

3. /store-product => Ajouter un produit
3. Opérationnel

4. /update/{id} => Mettre à jour le produit
4. Opérationnel

5. /get-products => Affichez la liste de tout les produits
5. Opérationnel

6. /get-product/{id} => Affiche un produit selectionner
6. Opérationnel

7. /delete-product/{id} => Supprime le prosuit séléctionner
7. Opérationnel
