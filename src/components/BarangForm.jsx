import { useNavigate, useParams } from 'react-router-dom';
import { addBarang, getBarangById } from '../service/localstorage';
import { useForm } from '../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editBarang } from '../service/localstorage';

export const BarangForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        id: '',
        nama_barang: '',
        merek: '',
        tanggal_masuk: '',
        jumlah: '',
        harga_satuan: ''
    });

    useEffect(() => {
        if (id) {
            const barang = getBarangById(id);
            setForm(barang);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editBarang(id, inputValues) : addBarang({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);

        setTimeout(() => {
            setshowAlert(false);
            navigate("/"); // Redirect to the BarangList page
        }, 100);
    };

    return (
        <div>
            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>Back</button>
                <h1 className="text-center">{id ? "Edit" : "Tambah"} Item</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">ID</label>
                        <input
                            name="id"
                            type="text"
                            value={inputValues.id}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Nama Barang</label>
                        <input
                            name="nama_barang"
                            type="text"
                            value={inputValues.nama_barang}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Merek</label>
                        <input
                            name="merek"
                            type="text"
                            value={inputValues.merek}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Tanggal Masuk</label>
                        <input
                            type="date"
                            name="tanggal_masuk"
                            value={inputValues.tanggal_masuk}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Jumlah</label>
                        <input
                            name="jumlah"
                            type="text"
                            value={inputValues.jumlah}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Harga Satuan</label>
                        <input
                            name="harga_satuan"
                            type="text"
                            value={inputValues.harga_satuan}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">{id ? "Edit" : "Tambah"} Item</button>
                    </div>
                </form>
            </div>

            {showAlert && (
                <div className="px-5">
                    <div className="alert alert-success">
                        <strong>Well done!</strong> {id ? "edit" : "added a new"} Item.
                    </div>
                </div>
            )}
        </div>
    );
};
