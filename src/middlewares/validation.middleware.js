const { ValidationError, ValidationErrorItem } = require("sequelize");

module.exports = (err,req,res,next) =>{

    //Errores validacion
    if (err.errors){
        var errCollection = err.errors;
        var errMessages = errCollection.map(err => err.message);
        
        if (errCollection[0] instanceof ValidationErrorItem){
            return res.status(400).json({
                status : 'error',
                errors : errMessages
            })
        }
    }

     /* //1062 - Entrada duplicada
     if (err instanceof ValidationError){
        return res.status(400).json({
            code : 400,
            error : err.original.message || 'Validation Error - Duplicated entry'
        })
    }*/

   
    next();
}