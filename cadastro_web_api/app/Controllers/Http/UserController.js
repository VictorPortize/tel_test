'use strict'

const User = use("App/Models/User")

class UserController {
 
async create ({ request, response }) {
    const data = request.all()

    const required = {
        nome : data.nome,
        email : data.email,
        cpf : data.cpf,
        pis : data.pis,
        pais : data.pais,
        estado : data.estado,
        municipio : data.municipio,
        cep : data.cep,
        rua : data.rua,
        numero : data.numero,
        complemento : data.complemento,
        password : data.password,
    }

    if(Object.values(required).every(value => !!value)){
        const user = await User.create(data)
        return user
    }else{
        response.status = 401;
        response.send({'error':"Campos faltando"})
    }


  }

  async get ({ auth, response }) {
      try{
        return await auth.getUser()
      }catch{
        response.status = 400;
        response.send({"error":"Token inválido"})
      }
  }

  async update ({ request, auth, response }){
    const data = request.all();
    const user = await auth.getUser();
    

    
    try{
      user.merge({...data})
      await user.save();
    }catch(e){
      response.status = 500;
      response.send({"error":e.sqlMessage})
    }

    return user;
  }
}
module.exports = UserController
