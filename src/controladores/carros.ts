import { knex } from "../bancodedados/conexao"
import { Request, Response } from 'express'
import { Carro } from '../tipos'


export const listarCarros = async (_: Request, res: Response) => {
    try {
        const listar = await knex<Carro>('carros').orderBy('id')

        return res.status(200).json(listar)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" })
    }
}

export const detalharCarro = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const detalhar = await knex<Carro>('carros')
            .where({ id: Number(id) })
            .first()

        if (!detalhar) {
            return res.status(404).json({ mensagem: "Esse carro não foi encontrada" })
        }

        return res.status(200).json(detalhar)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" })
    }
}

export const cadastrarCarro = async (req: Request, res: Response) => {
    const { marca, modelo, ano, cor, valor } = req.body

    try {
        const cadastro = await knex<Omit<Carro, 'id'>>('carros').insert({
            marca,
            modelo,
            ano,
            cor,
            valor
        }).returning('*')

        return res.status(201).json(cadastro[0])
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" })
    }
}

export const atualizarCarro = async (req: Request, res: Response) => {
    const { marca, modelo, ano, cor, valor } = req.body
    const { id } = req.params
    try {
        const detalhar = await knex<Carro>('carros')
            .where({ id: Number(id) })
            .first()

        if (!detalhar) {
            return res.status(404).json({ mensagem: "Esse carro não foi encontrada" })
        }

        await knex<Carro>('carros').update({
            marca,
            modelo,
            ano,
            cor,
            valor
        }).where({ id: Number(id) })

        return res.status(200).json()
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" })
    }
}

export const excluirCarro = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const encontrarCarro = await knex<Carro>('carros')
            .where({ id: Number(id) })
            .first()

        if (!encontrarCarro) {
            return res.status(404).json({ mensagem: "Esse carro não foi encontrada" })
        }

        await knex<Carro>('carros')
            .del()
            .where({ id: Number(id) })

        return res.status(204).json()
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" })
    }
}
