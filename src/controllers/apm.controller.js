const { ValidationError, ValidationErrorItem } = require("sequelize");
const { Apm } = require("../models");

class ApmController {
  getAll = async (req, res) => {
    const apms = await Apm.findAll({
      order: [["name", "ASC"]],
    });

    return res.status(200).json({
      data: apms,
      status: "success",
    });
  };

  get = async (req, res) => {
    const { id } = req.params;

    const apm = await Apm.findOne({
      where: { id },
    });

    if (!apm) {
      const error = new Error("Apm not found");
      error.status = 404;
      throw error;
    }

    return res.status(200).json({
      data: apm,
      status: "success",
    });
  };

  create = async (req, res) => {
    const { body } = req;
    
    //small validation
    this.validateInput(body);
    
    // try/catch block is not needed cause we using express-async-errors
    const apm = await Apm.create(body);

    return res.status(201).json({
      data: apm,
      status: "success",
    });
  };

  update = async (req, res) => {
    const { id: apmId } = req.params;
    const { body } = req;

    //small validation
    this.validateInput(body);

    const apm = await Apm.findByPk(apmId);

    if (!apm){
        const error = new Error('Apm not found');
        error.status = 404;
        throw error;
    }

    await apm.update(body);

    return res.status(200).json({
        data: apm,
        status: "success",
    });
  };

  delete = async (req,res) =>{
    const {id : apmId} = req.params;

    const apm = await Apm.findByPk(apmId);

    if (!apm){
        const error = new Error('Apm not found');
        error.status = 404;
        throw error;
    }

    await apm.destroy();

    return res.status(200).json({
        data: apm,
        status: "success",
    });
  }

  validateInput(body){
    const error = new ValidationError('Validation Error');
    var errors = [];

    if (body.name != undefined && body.name == ''){
      errors.push(
        new ValidationErrorItem('Name can´t be a empty string')
      );
    }

    if (body.command != undefined && body.command == ''){
      errors.push(
        new ValidationErrorItem('Command can´t be a empty string')
      );
    }

    if (body.url != undefined && body.url == ''){
      errors.push(
        new ValidationErrorItem('Url can´t be a empty string')
      );
    }

    if (errors.length > 0){
        error.errors = errors;
        throw error;
    }

  }
}

module.exports = ApmController;
