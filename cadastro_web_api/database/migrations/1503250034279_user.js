'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nome', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('cpf', 254).notNullable().unique()
      table.string('pis', 11).notNullable().unique()
      table.string('pais', 30).notNullable().unique()
      table.string('estado', 30).notNullable().unique()
      table.string('municipio', 60).notNullable().unique()
      table.string('cep', 11).notNullable().unique()
      table.string('rua', 254).notNullable().unique()
      table.string('numero', 9).notNullable().unique()
      table.string('complemento', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
