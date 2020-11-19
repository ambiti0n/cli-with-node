#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer,
    removeCustomer,
    updateCustomer,
    listCustomers
} = require('./index');

// questions
const questions = [
    {
    type: 'input',
    name: 'firstname',
    message: 'Customers First Name'
},
{
    type: 'input',
    name: 'lastname',
    message: 'Customers Last Name'
},
{
    type: 'input',
    name: 'phone',
    message: 'Customers Phone number'
},
{
    type: 'input',
    name: 'email',
    message: 'Customers Email Adrress'
}
 ];


program
   .version('1.0.0')
   .description('Client Management System')

//    program
//        .command('add <firstname> <lastname> <phone> <email>')
//        .alias('a')
//        .description('Add a Customer')
//        .action((firstname, lastname, phone, email) => {
//            addCustomer({firstname, lastname, phone, email});
//        });
   // add command
       program
       .command('add')
       .alias('a')
       .description('Add a Customer')
       .action(() => {
           prompt(questions).then(answers => addCustomer(answers));
       });

       // find command
       program
       .command('find <name>')
       .alias('f')
       .description('find a Customer')
       .action(name => findCustomer(name));

       //update command
       program
       .command('update <_id>')
       .alias('u')
       .description('update a Customer')
       .action(_id => {
        prompt(questions).then(answers => updateCustomer(_id, answers));
    });


       //remove command
       program
       .command('remove <_id>')
       .alias('r')
       .description('Remove a Customer')
       .action(_id => removeCustomer(_id));

       //list command
       program
       .command('list')
       .alias('l')
       .description('List all Customer')
       .action(() => listCustomers());



   program.parse(process.argv);