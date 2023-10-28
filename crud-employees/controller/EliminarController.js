const EliminarModel = require("../models/EliminarModel");

//*********************************************REGISTRAR PREINGRESOS********************************************/
async function ControllerEliminar(req, res){
    var {id} = req.body;
    var result = await EliminarModel.QueryEliminar(id);

    res.json(result);
    res.end();
}

module.exports={
    ControllerEliminar:ControllerEliminar
}