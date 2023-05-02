const mongoose = require('mongoose');

const pedidoSchema= mongoose.Schema(
    {
        status: { type: String, required: true},
        restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'restaurante', required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario', required: true },
        deliver_user: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario',  required: true },
        start_date: {type: Date, required: true},
        end_date: {type: Date, required: false}   
    },
    { timestamps: true }
    )
    
    export default mongoose.model('pedido', pedidoSchema);  