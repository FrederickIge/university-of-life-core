'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MajorsSchema extends Schema {
  up () {
    this.create('majors', (table) => {
      table.string('in_out_state')
      table.string('user_state')
    })
  }

  down () {
    this.drop('majors')
  }
}

module.exports = MajorsSchema
