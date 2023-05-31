const experienciasRepository = require('../repositories/experienciasRepository');

exports.getAllExperiencias = async (req, res) => {
    const tipo = req.query.tipo;
    const  exeperiencias = await experienciasRepository.getAllExperiencias(tipo);
        res.json(exeperiencias);
};

exports.getExperienciaById = async (req, res) => {
    const id = parseInt(req.params.id);
    const exeperiencia = await experienciasRepository.getExperienciaById(id);
    res.json(exeperiencia);
};

exports.createExperiencia = async (req,res) => {
    const experiencia = req.body;
    const newExperiencia = await experienciasRepository.createExperiencia(experiencia);
    res.json(newExperiencia);
};

exports.updateExperiencia = async (req,res) => {
    const id = parseInt(req.params.id);
    const experiencia = req.body;
    const updatedExperiencia = await experienciasRepository.updateExperiencia(id, experiencia);
    res.json(updatedExperiencia);
};

exports.deleteExperiencia = async (req,res) => {
    const id = parseInt(req.params.id);
    await experienciasRepository.deleteExperiencia(id);
    res.json({message: `Experiencia ${id} deleted`});   
};