export const getListBarang = () => {
  if (!localStorage["Barang"]) {
    localStorage["Barang"] = "[]";
  }

  let Barang = localStorage["Barang"];
  Barang = JSON.parse(Barang);
  return Barang;
};

export const addBarang = (barang) => {
  const Barang = getListBarang();
  Barang.push(barang);
  localStorage["Barang"] = JSON.stringify(Barang);
};

export const removeBarang = (id) => {
  let Barang = getListBarang();
  Barang = Barang.filter((barang) => barang.id !== id);
  localStorage["Barang"] = JSON.stringify(Barang);
};

export const getBarangById = (id) => {
  const Barang = getListBarang();
  const barang = Barang.find((barang) => barang.id === id);
  return barang;
};

export const editBarang = (id, newBarang) => {
  let Barang = getListBarang();
  Barang = Barang.filter((barang) => barang.id !== id);
  Barang.push(newBarang);
  localStorage["Barang"] = JSON.stringify(Barang);
};