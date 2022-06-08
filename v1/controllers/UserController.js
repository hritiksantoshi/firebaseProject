const admin = require("../../connection/admin");
const app = require("../../connection/user");
const userHandler = require("../../handler/UserHandler");


const createUser = async (req, res) => {
    const user = await userHandler.createUser(req.body);
    res.status(201).send(user);

};



//signIn
const signIn = async (req,res) => {
       const user = await userHandler.signIn(req.body);
       res.status(201).send(user);
}



module.exports = {
  createUser: createUser,
  signIn: signIn
};
