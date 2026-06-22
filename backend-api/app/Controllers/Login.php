<?php

namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\RESTful\ResourceController;

class Login extends ResourceController
{
    public function index()
    {
        $username = $this->request->getJSON()->username;
        $password = $this->request->getJSON()->password;

        $userModel = new UserModel();

        $user = $userModel
                ->where('username', $username)
                ->where('password', $password)
                ->first();

        if (!$user) {
            return $this->failUnauthorized('Login gagal');
        }

        $token = bin2hex(random_bytes(32));

        $userModel->update($user['id'], [
            'token' => $token
        ]);

        return $this->respond([
            'status' => true,
            'token' => $token
        ]);
    }
}