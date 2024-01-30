const {userList} = require("../constants/const");
const Users = require('../model/Users');



const UserController = {
    getAllUsers:async function (req, res, next) {
        try {
            const find = await Users.find();
            res.status(200).json(find);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({error: "Something went wrong"});
        }

    },

    saveUsers:async function (req, res, next) {
        try{
            const userData = req.body;
            const users = await Users.create(userData)
            res.status(200).json(users);
        } catch (err) {
            console.error(err);
            res.status(500)
                .json({error: 'Somthing Went Wrong!'
                })
        }

    },

    getUsers: async function (req, res, next) {
        try {
            const username = req.params.username;
            const userdata = await Users.find({ username: username });
            res.status(200).json(userdata);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }

    }

}

module.exports=UserController
