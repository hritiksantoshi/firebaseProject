const {getAuth,onAuthStateChanged} = require('firebase/auth');
const userHandler = require('../handler/UserHandler')
const auth = getAuth();
const accesstoKen = (req,res,next) => {
    onAuthStateChanged(auth,(user) =>{
        if(user){
           user.getIdToken(true)
           .then((token) =>{
              console.log(token);
           })
           .catch((error) =>{
               console.log(error);
           })
        }

    })
    next();
}

module.exports = accesstoKen;