const User = require('../connection/admin');
const sendOtp=async (payload)=>{
    const eventType=payload.eventType;
    const otpCode=Math.floor(100000 + Math.random() * 900000);
   
    const otpData = await User.Otp.add({
        otpCode: otpCode,userId: payload.userid,phoneNo:payload.phoneNo,
        countryCode:payload.countryCode, eventType:eventType}); 
     return otpData;
}

module.exports = {
    sendOtp:sendOtp
}