'use strict'

/*
|--------------------------------------------------------------------------
| SchoolSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class SchoolSeeder {
  async run () {
    const schools = await Database.table('schools')
    console.log(schools)
  }
}

module.exports = SchoolSeeder
