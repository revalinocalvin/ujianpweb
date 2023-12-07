import { BarangItem } from './BarangItem';
import { useEffect, useState } from 'react';
import { getListBarang } from '../service/localstorage';

export const BarangList = () => {
    const [Barang, setBarang] = useState([]);

    useEffect(() => {
        setBarang(getListBarang());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Daftar Barang</h1>

            {Barang.length > 0 ? (
                <div className="card bg-secondary p-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nama Barang</th>
                                <th scope="col">Merek</th>
                                <th scope="col">Tanggal Masuk</th>
                                <th scope="col">Jumlah</th>
                                <th scope="col">Harga Satuan</th>
                                <th scope="col">Lakukan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Barang.map((barang) => (
                                <BarangItem
                                    barang={barang}
                                    key={barang.id}
                                    setBarang={setBarang}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h3 className="text-center">No items</h3>
            )}
        </div>
    );
};
