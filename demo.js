const mongoose = require('mongoose');

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

const optionSchema = mongoose.Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order'
	},
	size: String,
	color: String
});

const Option = mongoose.model('Option', optionSchema);

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: [
	  {
		option: {
			type: mongoose.Schema.Types.ObjectId
		},
		quantity: Number
	  }
  ]
}, { minimize: false })

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/hhshop', { useNewUrlParser: true });

User.find().skip(1).limit(1).select('-_id email fullname').exec((err, data) => Object.keys(data[0]._doc).forEach(key => {
	console.log(key, data[0]._doc[key]);
}));
