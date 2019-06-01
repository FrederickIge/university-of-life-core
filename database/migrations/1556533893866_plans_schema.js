'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlansSchema extends Schema {
  up () {
    this.create('plans', (table) => {
      table.increments()
      table.timestamps()
      table.integer('school_opeid')
      table.string('user_id')
      table.string('notes')
      table.string('major_id')
      table.string('projected_salary')
      table.string('projected_cost')
      table.string('in_out_state')
      table.string('user_state')
    })
  }

  down () {
    this.drop('plans')
  }
}

module.exports = PlansSchema
