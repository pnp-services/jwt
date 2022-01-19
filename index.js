const fs   = require('fs');
const jwt   = require('jsonwebtoken');


module.exports = {
    sign: (payload, secretKey, expiresIn) => {
        /*
         sOptions = {
          issuer: "Authorizaxtion/Resource/This server",
          subject: "iam@user.me",
          audience: "Client_Identity" // this should be provided by client
         }
        */
        // Token signing options
        let signOptions = {
            issuer:  "mes",
            audience:  "mes",
            expiresIn:  expiresIn,
            algorithm:  "RS256"
        };
        return jwt.sign(payload, secretKey, signOptions, null);
    },
    verify: (token, publicKey, expires) => {


        let verifyOptions = {
            issuer:  "mes",
            //subject:  "mes",
            audience:  "mes",
            expiresIn:  expires,
            algorithm:  ["RS256"]
        };
        try{
            return jwt.verify(token, publicKey, verifyOptions, null);
        }catch (err){
            throw err;
        }
    },
    decode: (token) => {
        return jwt.decode(token, {complete: true});
        //returns null if token is invalid
    }
}