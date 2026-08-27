import conexao from "../Database/database.js";

async function VerFarm() {
    try {
        const sql = `SELECT * FROM vw_Frutos`
    const [dados] = await conexao.query(sql)
    console.log(dados)
    return dados
    } catch (error) {
        let message = `Erro na tentativa de mostrar os frutos, Tente novamente mais tarde`
        console.error(message)
        
    }
    
}

async function AdicionarFruto(nome, lote, categoria_id, fornecedor_id) {
    try {p
    const sql = `INSERT INTO Fruto (nome, lote, categoria_id, fornecedor_id) VALUES (?, ?, ?, ?)`
    const [dados] = await conexao.query(sql, [nome, lote, categoria_id, fornecedor_id])
    console.log(dados)
    return dados
    } catch{
        
        let message = `Erro na tentativa de adicionar Fruto, tente novamente`
        console.error(message)
    

    }
}
async function DeletarFruto(id) {
    try {
    const sql = `DELETE FROM Fruto where = ?`
    const [dados] = await conexao.query(sql, [id])
    console.log(dados)
    return dados
    } catch {
        let message = `Erro na tentativa de deletar id: ${id}, tente novamente`
        console.error(message)
    }
}

async function PesquisarFruto(id, nome, lote, categoria_id, fornecedor_id) {
    try {

        const filtros = []
        const valores = []

        if (id !== undefined) {
            filtros.push('id = ?')
            valores.push(id)
        }

        if (nome !== undefined) {
            filtros.push('nome LIKE ?')
            valores.push(`%${nome}%`)
        }

        if (lote !== undefined) {
            filtros.push('lote = ?')
            valores.push(lote)
        }

        if (categoria_id !== undefined) {
            filtros.push('categoria_id = ?')
            valores.push(categoria_id)
        }

        if (fornecedor_id !== undefined) {
            filtros.push('fornecedor_id = ?')
            valores.push(fornecedor_id)
        }

        let sql = 'SELECT * FROM Fruto'

        if (filtros.length > 0) {
            sql += ' WHERE ' + filtros.join(' AND ')
        }

        const [dados] = await conexao.query(sql, valores)

        return dados

    } catch (error) {
        console.error('Erro ao Pesquisar Fruto:', error)
        throw error
    }
}
async function EditarFruto(id, nome, lote, categoria_id, fornecedor_id) {
    try {


        const Dados_Frutos = {}
        if (lote !== undefined) {
            Dados_Frutos.lote = lote
        }
        if (nome !== undefined){
            Dados_Frutos.nome = nome
        }
        if (categoria_id !== undefined) {
            Dados_Frutos.categoria_id = categoria_id
        }
        if (fornecedor_id !== undefined) {
            Dados_Frutos.fornecedor_id = fornecedor_id
        }

        const sql = `UPDATE Fruto 
    set ?
    WHERE id = ?
    `
        const [dados] = await conexao.query(sql, [Dados_Frutos, id])
        console.log(dados)
        return dados

    }
    catch (error) {
        let message = `Erro ao Adicionar Fruto`
        console.error(message)
        res.status(404).json(message)

    }
}




export default { VerFarm, AdicionarFruto, DeletarFruto, PesquisarFruto, EditarFruto }