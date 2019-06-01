'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanSchema extends Schema {
  up () {
    this.create('plans', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('plans')
  }
}

module.exports = PlanSchema
