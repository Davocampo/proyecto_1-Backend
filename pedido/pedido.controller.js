import pedido from './pedido.model'

export async function getPedido(req,res) {
  let filter = {};

  if (req.query.user) {
    filter.user = req.query.user;
  }
  if (req.query.deliver_user) {
    filter.delivery = req.query.deliver_user;
  }
  if(req.query.restaurant){
    filter.restaurant = req.query.restaurant
  }
  if (req.query.id) {
    filter.id =  req.query.id
  }
  filter.status = "Enviado"

  restaurante.find(filter)
    .then((restaurants) => {
      if (restaurants.length === 0) {
        res.status(404).send({
          message: 'Could not find pedido',
        });
      } else {
        res.status(200).send({ restaurants });
      }
    })
    .catch((error) => {
      res.status(500).send({ error});
    });

}

export async function createPedido(req, res) {
    try {
      const { status, restaurant, user, deliver_user} = req.body;
      const Pedido = new pedido({ status, restaurant, user, deliver_user });
      const resultado = await Pedido.save();
      res.status(200).json(resultado);
    } catch (err) {
     res.status(500).json(err);
    }
 }

 export async function patchPedido(req, res) {
  try{
    const {_id, ... others} = req.body;
    cur_pedido = pedido.findById(_id)
    if (cur_pedido == "Creado"){
      const resultado = await pedido.findByIdAndUpdate(_id,others, {new: true, runValidators: true})
      res.status(200).send(resultado);;
    }
    res.status(200).send({ message: "Can not update this pedido"})
  }
  catch (err) {
    res.status(500).json(err);
  }
  }
  
  export async function deletePedido(req, res) {
    try{
      const {_id} = req.body;
      const resultado = await pedido.findByIdAndDelete(_id, {new: true, runValidators: true})
      res.status(200).send("Borrado");
    }
    catch (err) {
      res.status(500).json(err);
    }
  }