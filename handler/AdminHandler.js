const admin = require("../connection/admin");
const { getAuth } = require("firebase-admin/auth");
const emailService = require("../services/emailService");
const getUsers = async (uid, userData) => {
    try{
  const user = await admin.User.doc(uid).get(); 
  if (user.data().role == "admin") {
    const Users = await getAuth().listUsers();

    if (userData == "getUnverified") {
      let unverified_users = Users.users.filter((user) => {
        return !user.emailVerified;
      });
      return unverified_users;
    }
    if (userData == "getVerified") {
      let verified_users = Users.users.filter((user) => {
        return user.emailVerified;
      });
      return verified_users;
    }
  } else {
    return "NOT_ALLOWED_TO_ACCESS_THIS";
  }
}
catch (error) {
    return error.message;
  }
}


const verifyUser = async(uid) =>{
    try{
    const userRecord = await getAuth().updateUser(uid,{
        emailVerified:true
    })

    const link = await getAuth().generatePasswordResetLink(userRecord.email);
     
    if(link){
        emailService(userRecord.email,link);
        return "EMAIL_VERIFIED_AND_PASSWORD_RESET_LINK_SEND_TO_THE_REGISTERED_MAIL"
    }
    }
    catch (error) {
        return error.message;
      }
}

const revokeToken = async(uid) =>{
  try{
       const revokeToken = await getAuth().revokeRefreshTokens(uid);
       console.log(revokeToken);
       
       const userRecord = await getAuth().getUser(uid);

       const timestamp = new Date(userRecord.tokensValidAfterTime).getTime();

      if(timestamp){
        return `Tokens revoked at: ${timestamp}`;
      }

  }
  catch(error){
    return error.message;
  }
}




module.exports = {
  getUsers: getUsers,
  verifyUser:verifyUser,
  revokeToken:revokeToken
};
