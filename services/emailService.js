var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure:false,
   
    auth:{
        user: 'hrxtos@gmail.com',
        pass: "Hs70@122017"
    }
});


module.exports = function Sendmail(email,link){
    var mailOptions = {
        from:'hrxtos@gmail.com',
        to:email,
        subject:'Reset Password',
        text: link
    }
transporter.sendMail(mailOptions, function(err,info){
  if(err){
      console.log(err)
  }
  else{
      console.log('email has been send',info.response);
  }
})
}