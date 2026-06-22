<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class AuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $header = $request->getHeaderLine('Authorization');

        if (!$header) {
            return service('response')
                ->setStatusCode(401)
                ->setJSON([
                    'message' => 'Token tidak ada'
                ]);
        }

        $token = str_replace('Bearer ', '', $header);

        $db = \Config\Database::connect();

        $user = $db->table('users')
            ->where('token', $token)
            ->get()
            ->getRow();

        if (!$user) {
            return service('response')
                ->setStatusCode(401)
                ->setJSON([
                    'message' => 'Token tidak valid'
                ]);
        }
    }

    public function after(
        RequestInterface $request,
        ResponseInterface $response,
        $arguments = null
    ) {
    }
}