<?php

namespace App\Controllers;

use App\Models\BarangModel;
use CodeIgniter\RESTful\ResourceController;

class Barang extends ResourceController
{
    protected $modelName = BarangModel::class;
    protected $format = 'json';

    // GET /barang
    public function index()
    {
        $db = \Config\Database::connect();

        $data = $db->table('barang')
            ->select('barang.*, kategori.nama_kategori')
            ->join('kategori', 'kategori.id = barang.kategori_id')
            ->get()
            ->getResult();

        return $this->respond($data);
    }

    // GET /barang/{id}
    public function show($id = null)
    {
        $barang = $this->model->find($id);

        if (!$barang) {
            return $this->failNotFound('Data barang tidak ditemukan');
        }

        return $this->respond($barang);
    }

    // POST /barang
    public function create()
    {
        $data = $this->request->getJSON(true);

        if (!$data) {
            return $this->fail('Data tidak valid');
        }

        $this->model->insert([
            'kategori_id' => $data['kategori_id'],
            'nama_barang' => $data['nama_barang'],
            'stok' => $data['stok'],
            'keterangan' => $data['keterangan']
        ]);

        return $this->respondCreated([
            'status' => true,
            'message' => 'Barang berhasil ditambahkan'
        ]);
    }

    // PUT /barang/{id}
    public function update($id = null)
    {
        $barang = $this->model->find($id);

        if (!$barang) {
            return $this->failNotFound('Data barang tidak ditemukan');
        }

        $data = $this->request->getJSON(true);

        $this->model->update($id, [
            'kategori_id' => $data['kategori_id'],
            'nama_barang' => $data['nama_barang'],
            'stok' => $data['stok'],
            'keterangan' => $data['keterangan']
        ]);

        return $this->respond([
            'status' => true,
            'message' => 'Barang berhasil diperbarui'
        ]);
    }

    // DELETE /barang/{id}
    public function delete($id = null)
    {
        $barang = $this->model->find($id);

        if (!$barang) {
            return $this->failNotFound('Data barang tidak ditemukan');
        }

        $this->model->delete($id);

        return $this->respond([
            'status' => true,
            'message' => 'Barang berhasil dihapus'
        ]);
    }
}