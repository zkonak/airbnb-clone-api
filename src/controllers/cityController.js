const city = require('../models/city')

    
    
      exports.findCity = (req, res) => {
        const { cityId } = req.params;
      
        const user = req.body.id_user;
        // l'envoi de id permet de référencier les users
       
      
        city.findCity((error, result) => {
          
           
            const array = [];
            for (let i = 0; i < result.length; i++) {
              const obj = {
                
                id: result[i].id_city,
              
                name: result[i].name,
               
              };
             array.push(obj);
             
             
            }
            res.status(200).json(array);
             
         
          
        });
      };
      