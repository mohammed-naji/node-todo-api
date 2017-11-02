//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if(err) {
                console.log('Unable to connect to mongoDB server');
        }

        console.log('Connected to MongoDB server');
        console.log('Connected to MongoDB server');

        // db.collection('Todos').insertOne({
        //         text: 'Somethinf to do',
        //         completed: false
        // }, (err, res) => {
        //         if(err) {
        //                 return console.log('Unable to insert todo', err);
        //         }

        //         console.log(JSON.stringify(res.ops, undefined, 2))
        // });

        // db.collection('User').insertOne({
        //         name: 'Jasmin Sabha',
        //         age : 23,
        //         location: 'Khan younes'
        // },(err, res) => {
        //         if(err) {
        //                 return console.log('Unable to inser user ', err);
        //         }
        //         console.log(JSON.stringify(res.ops, undefined, 2));
        // });

        db.close();
})