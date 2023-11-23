import { Router } from 'express'
import {
    listarCarros,
    excluirCarro,
    detalharCarro,
    cadastrarCarro,
    atualizarCarro
} from './controladores/carros'

const rotas = Router()


rotas.get('/carros', listarCarros)

rotas.get('/carros/:id', detalharCarro)

rotas.post('/carros', cadastrarCarro)

rotas.put('/carros/:id', atualizarCarro)

rotas.delete('/carros/:id', excluirCarro)

export default rotas