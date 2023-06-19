import mongoose, {Schema} from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderItems: [
        {
        name: {
        type: String,
        required: true,},
            image: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
                default: 0,
            },
            product: {
            type:Schema.Types.ObjectId,
                ref: 'Product',
                required:true,
            }

    }],
    shippingAddress: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: Number,
            required: true,
        },
        country: {
            type: Number,
            required: true,
            default: 0,
        },

    },
    paymentMethod: {
       type: String,
        required: true,
    },
    category: {
        id: {type: String},
        status: {type: String},
        email_address: {type: String},
        updatedAt: {
            type: String,
            required: false,
        },
    },
    paidAt: {
        type: String,
        required: true,
    },
    deliveredAt: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    itemsPrice:{
        type: Number,
        required: true,
        default:0.0,

    },
    shippingPrice:{
        type: Number,
        required: true,
        default:0.0,

    },
    taxPrice:{
        type: Number,
        required: true,
        default:0.0,

    },
    totalPrice:{
        type: Number,
        required: true,
        default:0.0,

    },
    isPaid:{
        type: Boolean,
        required: true,
        default: false,

    },
    isDelivered: {
      type:Boolean,
      required:true,
        default: false,
    }

});
const Order = mongoose.model('Order', orderSchema)

export default Order