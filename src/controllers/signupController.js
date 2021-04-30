const User = require("../models/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const utils = require("../utils/utils")


exports.newAccount = (request, response) => {
    const{email,password,first_name,last_name,role } = request.body; //recuperer ce qui a dans mon request.body dans variable separer pour les recuperer plus facilement
    console.log(request.body);

    User.getByEmail(email,(error,result)=>{

        if(result.length !==0){
            response.status(409).json({ message: "Un utilisateur utilisant cette adresse email est déjà enregistré" });
        }else {

            const saltRounds = 10;
            bcrypt.hash(password,saltRounds,(error,hash)=>{
                if(error){
                   response.status(400).json({ message: error });
                }
                
                const newUser ={
                    first_name,
                    last_name,
                    role,
                    email,
                    password:hash
                }
             
            
            
    
                User.create(newUser,request.body,(error,result)=>{
    
                    if(utils.requiresInputs(request.body).length > 0) {
                        response.status(400).json({ message: `Le champ ${utils.requiresInputs(request.body)} n'est pas renseigné`});
                   
        
                    } else if(utils.dataType(request.body).length > 0) {
                        response.status(400).json({ message: `Le champ ${utils.dataType(request.body)} doit être une chaîne de caractères`});
                   }
                    else {
                        response.status(201).json({ lien: '/api/signup' });


    
                      }
                   
    
            })
            
    
    });
    
    }
})
  
    }
    
    
      //unicité, pas 2 utilisateur pareil existant sur le nom


     
