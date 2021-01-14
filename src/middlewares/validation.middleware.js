const { ValidationError, ValidationErrorItem } = require("sequelize");

module.exports = (err,req,res,next) =>{

    //Validation Error
    if (err instanceof ValidationError){
        var errCollection = err.errors;
        var errorMessage = '';

        errCollection.map((err,i) =>{
            errorMessage += err.message;
            if (i < (errCollection.length - 1))
                errorMessage += ', ';
        });
        
        return res.status(400).json({
            status : 'error',
            error : errorMessage
        })
    }

    next(err);

     /* //1062 - Entrada duplicada
     if (err instanceof ValidationError){
        return res.status(400).json({
            code : 400,
            error : err.original.message || 'Validation Error - Duplicated entry'
        })
    }*/

}