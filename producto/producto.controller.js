import producto from './producto.model'

export async function getProducto(req,res) {
  let filter = {};

  if (req.query.restaurant) {
    filter.nombre = req.query.restaurant;
  }
  if (req.query.category) {
    filter.categorias = req.query.category;
  }
  if (req.query.id) {
    filter.id =  req.query.id
  }
  producto.find(filter)
    .then((products) => {
      if (products.length === 0) {
        res.status(404).send({
          message: 'Could not find product',
        });
      } else {
        res.status(200).send({ products });
      }
    })
    .catch((error) => {
      res.status(500).send({ error});
    });
}


  export async function createProducto(req, res) {
    try {
      const { name, price, description, category, restaurant, start_date} = req.body;
      const Producto = new producto({ name, price, description, category, restaurant, start_date});
      const resultado = await Producto.save();
      res.status(200).json(resultado);
    } catch (err) {
     res.status(500).json(err);
    }
 }

 export async function patchProducto(req, res) {
  try{
    const {_id, ... others} = req.body;
    const resultado = await producto.findByIdAndUpdate(_id,others, {new: true, runValidators: true})
    res.status(200).send(resultado);;
  }
  catch (err) {
    res.status(500).json(err);
  }
  }
  
  export async function deleteProducto(req, res) {
    try{
      const {_id} = req.body;
      const resultado = await producto.findByIdAndDelete(_id, {new: true, runValidators: true})
      res.status(200).send("Borrado");
    }
    catch (err) {
      res.status(500).json(err);
    }
  }