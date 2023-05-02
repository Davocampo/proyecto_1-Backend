const mongoose = require('mongoose');

const productoSchema= mongoose.Schema(
{
    name: { type: String, required: true },
    price: { type: Number, required: true},
    description: { type: String, required: true},
    category: { type: String, required: true,
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'restaurante', required: true },
    isDeleted: { type: Boolean, default: false }
}
)

export default mongoose.model('producto', productoSchema);  
