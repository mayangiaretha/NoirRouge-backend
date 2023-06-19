import mongoose, {Schema} from "mongoose";

const reviewSchema = new mongoose.Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },

})

const Review = mongoose.model('Review',reviewSchema)

export default Review