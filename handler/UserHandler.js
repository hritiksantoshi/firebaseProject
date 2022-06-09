const admin = require("../connection/admin");
const app = require("../connection/user");
const {
  getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } = require("firebase/auth");
const auth = getAuth(app);
const {validateUser,signinUser}= require('../validations/user.validation');
const accesstoKen = require("../middleware/token");
const { async } = require("@firebase/util");
const createUser = async (userBody) => {
  try {
  let password = "user@123";
   userBody.password = password;
  let response =  validateUser(userBody);
  if(response.error)
{  
  return response.error.details;
}

  let new_user = await createUserWithEmailAndPassword(
    auth,
    userBody.email,
    password
  );

   

  return admin.User.doc(new_user.user.uid).set(userBody);
}
catch (error) {
  return error.message;
}
}


const signIn = async (userData) => {
  try{
       let user = signinUser(userData);
       if(user.error){
         return user.error.details;
       }

  let userCredential = await signInWithEmailAndPassword(
    auth,
    userData.email,
    userData.password
  );
  if (userCredential.user.emailVerified == true) {
    let idtoken = await userCredential.user.getIdToken(true);
    return {msg:"SIGNEDUP_SUCCESSFULLY",accesstoKen:idtoken};
   
  } else {
    return "EMAIL_NOT_VERIFIED_YET";
  }
}
catch (error) {
  return error.message;
}
}

const getIdToken = async(user) =>{
  console.log(user);
}



// const newtoken = async() =>{
//   try{
//        onAuthStateChanged(auth,(user)=>{
  
//   if(user){
//      const token = await user.getIdToken(true);
//      console.log(token);
//      return token;
//   }
//   next();
 
// })
//   }
//   catch (error) {
//     return error.message;
//   }
// }

module.exports = {
  createUser: createUser,
  signIn:signIn,
  getIdToken:getIdToken

}
