import { server } from './server/server'

server.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor Rodando na Porta ${process.env.PORT || 3333} !`)
})