
import usuario from './usuario.model';

export async function getUsuario(req,res) {
  // const { name } = req.query;

  const Usuarios = await usuario.find(req.query);

  res.status(200).json(Usuarios);
}

export async function createUsuario(req, res) {
   try {
     const { name, email, password, cell, adress, type  } = req.body;
     const Usuario = new usuario({ name, email, password, cell, adress, type });
     const resultado = await Usuario.save();
     res.status(200).json(resultado);
   } catch (err) {
    res.status(500).json(err);
   }
}

export async function patchUsuario(req, res) {
  try{
    const {_id, ... others} = req.body;
    const resultado = await usuario.findByIdAndUpdate(_id,others, {new: true, runValidators: true})
    res.status(200).send(resultado);;
  }
  catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteUsuario(req, res) {
  try{
    const {_id} = req.body;
    const resultado = await usuario.findByIdAndDelete(_id, {new: true, runValidators: true})
    res.status(200).send("Borrado");
  }
  catch (err) {
    res.status(500).json(err);
  }
}