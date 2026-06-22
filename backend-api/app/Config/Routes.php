<?php

use CodeIgniter\Router\RouteCollection;

$routes->options('(:any)', static function () {
    return service('response')->setStatusCode(200);
});

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->post('login', 'Login::index');

$routes->resource('kategori', [
    'filter' => 'auth'
]);

$routes->resource('barang', [
    'filter' => 'auth'
]);