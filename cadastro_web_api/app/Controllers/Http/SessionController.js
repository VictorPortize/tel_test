'use strict'

class SessionController {
    async login ({ request, auth, response }) { 
        const { login, password } = request.all()

        let token;
        try{
            token = await auth.attempt(login, password)
        }catch{
            try{
                token = await auth.authenticator('pis').attempt(login, password)
            }catch{
                try{
                    token = await auth.authenticator('cpf').attempt(login, password)
                }catch{
                    response.status = 400;
                    return  response.send({'error':"Usuário não encontrado"})
                }
            }
        }
        
        return token
    }
      
}

module.exports = SessionController
