
import restaurante from './restaurantemodel';

export async function getRestaurante(req,res) {
  let filter = {};

  if (req.query.name) {
    filter.nombre = req.query.name;
  }
  if (req.query.category) {
    filter.categorias = req.query.category;
  }
  if (req.query.id) {
    filter.id =  req.query.id
  }
  restaurante.find(filter)
    .then((restaurants) => {
      if (restaurants.length === 0) {
        res.status(404).send({
          message: 'Could not find restaurant',
        });
      } else {
        res.status(200).send({ restaurants });
      }
    })
    .catch((error) => {
      res.status(500).send({ error});
    });
}

export async function createRestaurante(req, res) {
   try {
     const { name, category, products, adress} = req.body;
     const Restaurante = new restaurante({ name, category, products, adress });
     const resultado = await Restaurante.save();
     res.status(200).json(resultado);
   } catch (err) {
    res.status(500).json(err);
   }
}

export async function patchRestaurante(req, res) {
  try{
    const {_id, ... others} = req.body;
    const resultado = await restaurante.findByIdAndUpdate(_id,others, {new: true, runValidators: true})
    res.status(200).send(resultado);;
  }
  catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteRestaurante(req, res) {
  try{
    const {_id} = req.body;
    const resultado = await restaurante.findByIdAndDelete(_id, {new: true, runValidators: true})
    res.status(200).send("Borrado");
  }
  catch (err) {
    res.status(500).json(err);
  }
}