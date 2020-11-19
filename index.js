const mongoose = require('mongoose');

// map global promis get rid of warning 
mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/customerCli',{useMongoClient: true
});

//import module
const Customer = require('./models/customer');

//Add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer =>{
        console.info('New Customer Added');
        db.close();
    });
}

//find customer 
const findCustomer = (name) => {
  // make case insensitive
  const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        db.close();
    });

}

//update customrs
const updateCustomer = (_id, customer) => {
    Customer.update({_id}, customer)
    .then(customer =>{
        console.info('Customer Updated');
        db.close();
    });
}

//remove customrs
const removeCustomer = (_id) => {
    Customer.remove({_id})
    .then(customer =>{
        console.info('Customer Removed');
        db.close();
    });
}

//list customers
const listCustomers = ()=> {
 Customer.find()
 .then(customers => {
     console.info(customers);
     console.info(`${customers.length} customers`)
     db.close();
 })
}


//export all methods
module.exports = {
    addCustomer, 
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}