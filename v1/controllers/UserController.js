const admin = require("../../connection/admin");
const app = require("../../connection/user");
const userHandler = require("../../handler/UserHandler");
const { get } = require("../route");


const createUser = async (req, res) => {
    const user = await userHandler.createUser(req.body);
    res.status(201).send(user);

};



//signIn
const signIn = async (req,res) => {
       const user = await userHandler.signIn(req.body);
       res.status(201).send(user);
}

const getIdToken = async(req,res) =>{
      const token = await userHandler.getIdToken(req.activeuser);
      res.send(token);

}



module.exports = {
  createUser: createUser,
  signIn: signIn,
  getIdToken:getIdToken
};
