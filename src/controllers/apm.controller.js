const {Apm} = require('../models')

class ApmController{

    getAll = async (req,res) =>{
        const apms = await Apm.findAll({
            order : [
                ['id','DESC']
            ]
        });

        return res.status(200).json({
            data : apms,
            status : 'success'
        })
    }

    create = async (req,res) =>{

        const {body} = req;

        const apm = await Apm.create(body);

        return res.status(201).json({
            data : apm,
            status : 'success'
        })
    }
}

module.exports = ApmController;