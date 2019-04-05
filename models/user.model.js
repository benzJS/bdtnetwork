const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     partner: { type: Schema.Types.ObjectId, ref: 'Partner' },
//     date: { type: Date, default: new Date },
//     ip: String,
//     userAgent: String,
//     os: String,
//     country: String
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

const optionSchema = mongoose.Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product'
	},
	size: String,
	color: String
});

const Option = mongoose.model('Option', optionSchema);

const memSchema = mongoose.Schema({
	fbId: String,
    fullname: String,
    email: String,
    password: String,
    cart: [
        {
            option: { type: Schema.Types.ObjectId, ref: 'Option' },
            quantity: Number
        }
    ],
    role: String,
    phone: String,
    address: String
}, { minimize: false })

const Member = mongoose.model('Member', memSchema, 'users');

const productSchema = mongoose.Schema({
    name: {type: String, lowercase: true},
    price: Number,
    categories: {
    	type: String,
    	lowercase: true
    },
    image: Array,
    badge: Array
})

const Product = mongoose.model('Product', productSchema);

mongoose.connect('mongodb://localhost:27017/hhshop', { useNewUrlParser: true });

Member.findById('5ca6175633d48b2184713700').populate({
    path: 'cart.option',
    populate: { path: 'product' }
}).exec((err, data) => console.log(err ? err : data.cart[0].option));
// Option.findOne({_id: '5c8bb3551d21a21010666297'}).populate('product').exec((err, data) => console.log(err ? err : data));
