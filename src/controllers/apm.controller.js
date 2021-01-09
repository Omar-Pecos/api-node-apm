const {Apm} = require('../models')

class ApmController{
    create = async (req,res,next) =>{
       try {

            const {body} = req;

            const apm = await Apm.create(body);

            return res.status(201).json({
                data : apm,
                status : 'success'
            })

       } catch (error) {

            console.log(error.message);
            return next(error);
            
       } 
    }
}

module.exports = ApmController;