'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MajorSchema extends Schema {
  up () {
    this.create('majors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('majors')
  }
}

module.exports = MajorSchema
