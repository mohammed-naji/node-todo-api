//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if(err) {
                console.log('Unable to connect to mongoDB server');
        }

        console.log('Connected to MongoDB server');

        // db.collection('Todos').findOneAndUpdate({
        //         _id: new ObjectID('59fb8d4a57280a12b4390de7')
        // },{
        //         $set : {
        //                 completed: false
        //         }
        // }, {
        //         returnOriginal: false
        // }).then( (res) => {
        //         console.log(res);
        // } );

        db.collection('User').findOneAndUpdate({
                _id : new ObjectID('59fb867557280a12b4390aa4')
        },{
                $set: {
                        name: 'Mohammed Naji'
                },
                $inc: {
                        age : 1
                }
        },{
                returnOriginal : false
        }).then( (res) => {
                console.log(JSON.stringify(res, undefined, 2));
        } );


        //db.close();
})