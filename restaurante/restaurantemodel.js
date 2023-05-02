const mongoose = require('mongoose');

const restauranteSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required:true},
    category: { type: String, required:true, unique:true},
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'producto' }],
    adress: { type: String, required:true, unique:true},
    isDeleted: { type: Boolean, default: false },
  },
);

export default mongoose.model('restaurante', restauranteSchema);  
