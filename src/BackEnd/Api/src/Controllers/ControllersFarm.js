import modelFarm from "../Models/Farm.js"


class ControllersFarm {
    static async VerLista_Farm(req, res) {
        try {

            const Lista_Farm_Frutos = await modelFarm.VerFarm();
            return res.status(200).json(Lista_Farm_Frutos)

        } catch (error) {
            console.error(error)
            let message = `Erro ao requisitar Lista`
            return res.status(500).json({ message })
        }


    }

    static async Procurar_Farm_Frutos(req, res) {
        try {

            const {
                id,
                nome,
                lote,
                categoria_id,
                fornecedor_id
            } = req.query

            if (
                id === undefined &&
                nome === undefined &&
                lote === undefined &&
                categoria_id === undefined &&
                fornecedor_id === undefined
            ) {
                return res.status(400).json({
                    message: 'Informe pelo menos um campo para pesquisa'
                })
            }

            if (id !== undefined && isNaN(id)) {
                return res.status(400).json({
                    message: 'ID inválido, coloque apenas números'
                })
            }

            const dados = await modelFarm.PesquisarFruto(
                id,
                nome,
                lote,
                categoria_id,
                fornecedor_id
            )

            if (dados.length === 0) {
                return res.status(404).json({
                    message: 'Nenhum fruto encontrado'
                })
            }

            return res.status(200).json(dados)

        } catch (error) {

            console.error(error)

            return res.status(500).json({
                message: 'Erro ao realizar pesquisa'
            })
        }
    }

    static async Criar_Farm_Frutos(req, res) {
        try {

            const { nome, lote, categoria_id, fornecedor_id } = req.body
            if (!nome || !lote || !categoria_id || !fornecedor_id) {
                return res.status(400).json({
                    message: "Erro, todos os campos são obrigatórios"
                })
            }

            const Registrar_Fruto = await modelFarm.AdicionarFruto(nome, lote, categoria_id, fornecedor_id)

            if (Registrar_Fruto.affectedRows === 0) {
                return res.status(400).json({
                    message: "Erro, Não houve a adição do fruto, tente novamente "
                })
            }

            return res.status(201).json({
                message: "Fruto adicionado com sucesso",
                Id: Registrar_Fruto.insertId
            })



        } catch (error) {
            console.error(error)
            let message = `Erro ao adicionar fruto`
            return res.status(500).json({ message })

        }
    }


    static async Deletar_Farm_Frutos(req, res) {
        try {
            const { id } = req.body
            if (!id) return res.status(400).json({ message: "Ops, esqueceu de colocar o ID" })

            const Fruto_Delete = await modelFarm.DeletarFruto(id)

            return res.status(202).json({
                message: "Fruto retirado com sucesso",
                Fruto_Delete
            })


        } catch (error) {
            console.error(error)
            let message = `Erro ao requisitar exclusão`
            return res.status(500).json({ message })

        }
    }

    static async Editar_Farm_Frutos(req, res) {

        const { id, nome, lote, categoria_id, fornecedor_id } = req.body
        if (!id) return res.status(404).json({ message: `O campo "ID", Está vazio` })
        if (isNaN(id)) return res.status(404).json({ message: 'Id inválido, Coloque apenas números' })
        if (!lote) return res.status(404).json({ message: `O campo "Lote", Está vazio` })
        if (!nome) return res.status(404).json({ message: `O campo "nome", Está vazio` })
        if (!categoria_id) return res.status(404).json({ message: `O campo "Categoria", Está vazio` })
        if (!fornecedor_id) return res.status(404).json({ message: `O campo "Fornecedor", Está vazio` })

        const Editar_Farm = await modelFarm.EditarFruto(id, nome, lote, categoria_id, fornecedor_id)

        if (!Editar_Farm) return res.status(404).json({ message: "ID nao encontrado ou não existe" })
        if (Editar_Farm.affectedRows === 0) return res.status(400).json({ message: "Não houve nenhuma alteração" })

        return res.status(201).json({
            message: "Atualização concluida com sucesso",
            Editar_Farm
        })

    }

}

export default ControllersFarm



