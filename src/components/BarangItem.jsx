import React from 'react';
import { removeBarang } from '../service/localstorage';
import { getListBarang } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';

export const BarangItem = ({ barang, setBarang }) => {
    const { id, nama_barang, merek, tanggal_masuk, jumlah, harga_satuan } = barang;
    const navigate = useNavigate();

    const deleteBarang = () => {
        removeBarang(id);
        setBarang(getListBarang());
    };

    return (
        <tr className="table-primary">
            <th>{nama_barang}</th>
            <td>{merek}</td>
            <td>{tanggal_masuk}</td>
            <td>{jumlah}</td>
            <td>{harga_satuan}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-item/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteBarang()}>Hapus</span>
                </div>
            </td>
        </tr>
    );
};
