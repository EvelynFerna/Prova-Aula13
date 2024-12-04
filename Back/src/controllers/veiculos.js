const con = require ('../connect/connect')

const create = (req, res) => {
    let veiculos_id = req.body.veiculos_id;
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiculo;
    let cliente_id = req.body.cliente_id;

    let query = `INSERT INTO veiculos (veiculos_id,marca_veiculo,modelo_veiculo,ano_veiculo,fabricacao_veiculo,clientes_id) VALUES`
    query += `('${veiculos_id}', '${marca_veiculo}', '${modelo_veiculo}', '${ano_veiculo}', '${fabricacao_veiculo}', '${cliente_id}')`;
    con.query(query, (err, result) => {
        if (err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const read = (req,res) => {
    con.query('SELECT * FROM veiculos', (err, result) =>{
        if (err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const update = (req,res) =>{
    let id = Number(req.params.id);
    let veiculos_id = req.body.veiculos_id;
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiculo;
    let cliente_id = req.body.cliente_id;

    let query = `UPDATE veiculos SET veiculos_id = '${veiculos_id}', marca_veiculo = '${marca_veiculo}',  modelo_veiculo = '${modelo_veiculo}', ano_veiculo = '${ano_veiculo}', fabricacao_veiculo = '${fabricacao_veiculo}', cliente_id = '${cliente_id}' WHERE veiculos_id = ${id}`;
    con.query(query, (err, result) =>{
        if (err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) =>{
    const id = Number(req.params.id)
    const query = `DELETE FROM veiculos WHERE veiculos_id = ?`
    con.query(query, [id], (err, result) =>{
        if (err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}
module.exports = {
    create,
    read,
    update,
    deletar
}