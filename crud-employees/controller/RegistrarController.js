const RegistrarModel = require("../models/RegistrarModel");

//*********************************************REGISTRAR PREINGRESOS********************************************/
async function ControllerRegistrar(req, res){
    var {nombre,apellido,ciudad,pais} = req.body;
    var result = await RegistrarModel.QueryRegistrar(nombre,apellido,ciudad,pais);

    res.json(result);
    res.end();
}

module.exports={
    ControllerRegistrar:ControllerRegistrar
}