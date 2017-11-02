//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if(err) {
                console.log('Unable to connect to mongoDB server');
        }

        console.log('Connected to MongoDB server');

        db.collection('Todos').deleteMany({text: "Walk the dog"}).then( (res) => {
                console.log(JSON.stringify(res, undefined, 2));
        } );

        db.collection('Todos').findOneAndDelete({completed: false}).then( (res) => {
                console.log(JSON.stringify(res, undefined, 3));
        } )


        //db.close();
})