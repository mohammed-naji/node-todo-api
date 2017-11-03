var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true});

var Todo = mongoose.model('Todo', {
        text: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
        },
        compleated: {
                type: Boolean,
                default: false
        },
        compleatedAt: {
                type: Number,
                default: null
        }
});

var User = mongoose.model('Users', {
        email: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
        }
});

var user = new User({
        email: ''
});

user.save().then( (docs) => {
        console.log('User Saved Successfuly' ,docs);
}, (err) => {
        console.log('Unable to save user :(');
} )

// var newTodo = new Todo({
//         text: 'Cook dinner'
// });

// newTodo.save().then( (docs) => {
//         console.log('Save todo', docs);
// }, (e) => {
//         console.log('Unable to save todo');
// } );


// var secondTodo = new Todo({
//         text: '      edit this video   '
// });

// secondTodo.save().then( (docs) => {
//         console.log('successfuly save todo', docs);
// }, (e) => {
//         console.log('faild save todo :(');
// } );