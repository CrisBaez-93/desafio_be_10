class ProductosApi {
  constructor() {
    this.data = [];
  }
  getAll() {
    return [...this.data]
  }
  buscarProducto = (reqQuery) => {
    const { search } = reqQuery;
    let listaProducto = [...this.data];
    if (Object.keys(reqQuery).length > 0) {
      if (search) listaProducto = listaProducto.filter(product => product.nombre.toLowerCase().startsWith(search.toLowerCase()));
      return listaProducto;
    }
    return listaProducto;
  }
  preGuardado(res, reqBody, incomplete) {
    const { nombre, precio, foto } = reqBody;
    if (!nombre || !precio || !foto) {
      incomplete[0] = true;
      setTimeout(() => {
        incomplete[0] = false;
      }, 1000);
    } else {
      incomplete[0] = false;
      this.guardar(reqBody);
    }
    res.redirect("/");
  }
  guardar(reqBody) {
    const { nombre, precio, foto } = reqBody;
    const encontrarID = this.data.map(item => item.id);
    let nuevoID;
    if(encontrarID.length == 0) nuevoID = 1;
    else nuevoID = Math.max.apply(null, encontrarID) + 1;
    const nuevoProducto = {
      id: nuevoID,
      nombre,
      precio,
      foto
    };
    this.data.push(nuevoProducto);
  }
}
const productos = new ProductosApi();

module.exports = productos;