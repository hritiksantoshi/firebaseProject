
const adminHandler = require("../../handler/AdminHandler");


//getusers
const getUsers = async(req,res) => {
  
       const users = await adminHandler.getUsers(req.userData,req.params.getUsers);
       res.status(201).send(users);
}

//verifyUser
const verifyUser = async(req,res) =>{
 
       const updateUser = await adminHandler.verifyUser(req.body.uid);
       res.status(201).send(updateUser);

}

const revoketoken = async(req,res) =>{
       const revoketoken = await adminHandler.revokeToken(req.body.uid);
       res.send(revoketoken);                            
}



module.exports = {
  verifyUser: verifyUser,
  getUsers:getUsers,
  revoketoken:revoketoken
};
