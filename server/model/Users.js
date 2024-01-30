const mongoose = require('mongoose');

const UsersModel = mongoose.Schema(
    {
        "name": {
            require:true,
            type:String

        },
        "password": {
            require: true,
            type:String
        },
        "location": {
            require:true,
            type:String
        },
        "username": {require: true,
            unique:true,
            index:true,
            type:String
        },

        "role": {require: true,
            type:String
        },

        "contact": {require: true,
            type:Number
        }
    }

);

const Users=mongoose
    .model('Users',UsersModel);

module.exports=Users;
