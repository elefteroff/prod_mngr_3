// Where the CRUD is done
const PM = require('../models/pm.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Product Manager"
    });
}

// CREATE
module.exports.createPM = (request, response) => {
    const { name, price, description } = request.body;
    PM.create({
        name,
        price,
        description
    })
        // IMPORTANT: what we return here is what we receive in React!
        .then(newPM => response.json(newPM)) // the "newPM" is the new product that we are creating.
        .catch(err => response.status(400).json(err));
}

// READ
module.exports.getAllPMs = (request, response) => {
    PM.find()
        .then(pms => response.json(pms)) // "pms" represents all the products returned as an array.  If want to return as an object need to wrap "pms" along with its key in {}.
        .catch(err => response.json(err))
}

module.exports.getPM = (request, response) => {
    PM.findById(request.params.myCoolID) //"PM" is referencing the model.
        .then(pm => response.json(pm))  //is returning the product we asked for by id = "pm" here
        .catch(err => response.json(err))
}

// UPDATE
module.exports.updateOnePM = (request, response) => {
    PM.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators: true}) //"PM" is referencing the model. "new:true" returns the new object as updated. "runValidators:true" will run validations on update.
        .then( (updatedpm) => response.json({pm: updatedpm})) //Is returning updatedpm as an object.
        .catch(err => response.json(err))
}

// DELETE
module.exports.deleteOnePM = (request, response) => {
    PM.findByIdAndDelete(request.params.id) //"PM" is referencing the model.
        .then( (deleteOnePM) => response.json(deleteOnePM)) //"deleteOnePM" = the response (a.k.a. the data coming back in the response)
        .catch(err => response.json(err))
}