const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required:true},
    email: { type: String, required:true, unique:true},
    password: { type: String, required:true, unique:true},
    cell: { type: String, required:true, unique:true},
    adress: { type: String, required:true, unique:true},
    type: { type: Number, required:true, enum:[0,1,2]},
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('usuario', usuarioSchema);  
