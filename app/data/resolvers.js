// app/data/resolvers.js

'use strict'

const School = use('App/Models/School')
const Plan = use('App/Models/Plan')
const Major = use('App/Models/Major')
const Database = use('Database')

// Define resolvers
const resolvers = {
  Query: {
    // Fetch all users
    async allSchools() {
      const schools = await School.all();
      return schools.toJSON();
    },
    async searchSchools(parent, {name}) {
      const schools = await Database.raw("select * from schools where LOWER(name) like LOWER('%" + name + "%')");
      console.log('aye')
      return schools.rows;
    },
    async searchMajors(parent, {name}) {
      const majors = await Database.raw("select * from majors where LOWER(name) like LOWER('%" + name + "%')");
      return majors.rows;
    },
    async getPlansByUser(parent, {user_id}) {
      const plans = await Database.raw("select * from plans where user_id = ?", [user_id]);
      return plans.rows;
    },
    async getPlanById(parent, {id}) {
      console.log(id)
      const plans = await Database.raw("select * from plans where id = ?", [id]);
      console.log(plans.rows)
      return plans.rows[0];
    }
  },

  Plan: {
    major: async (plan) =>{
      var result = await Database.raw("select * from majors where id = ?", [plan.major_id]);
      result = result.rows[0]
      return result
    } ,
    school: async (plan) =>{
      var school = await School.findBy('unit_id', plan.school_id);
      return school
    } 
  },

  Mutation: {
    // Add a new post
    async savePlan(_, {school_id, major_id, projected_salary, projected_cost, user_id}) {
      try {

        // Add new post
        var result = await Plan.create({
          school_id,
          major_id,
          projected_salary,
          projected_cost,
          user_id
        });

        return {
          school_id,
          major_id,
          projected_salary,
          projected_cost,
          user_id
        };

      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    async deletePlan(_, {plan_id}) {
      try {

        console.log(plan_id)
        // Add new post
        var result = await await Database
        .table('plans')
        .where('id', plan_id)
        .delete()

        return true

      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    }
  }
};

module.exports = resolvers



// {
//   getPlansByUser(user_id: "pj7XQzQbVgUx2NZFtRhSK7DdY9c2") {
//     id
// 		projected_salary
//     projected_cost
// 		major {
//       id
//       name
//       starting_medium_salary
//       mid_careeer_medium_salary
//     }
//     school{
//       name
//       net_price
//       sector_name
//       unit_id
//     }
//   }
// }


// {
//   getPlanById(id: 55) {
//     id
// 		projected_salary
//     projected_cost
// 		major {
//       id
//       name
//       starting_medium_salary
//       mid_careeer_medium_salary
//     }
//     school{
//       name
//       net_price
//       sector_name
//       unit_id
//     }
//   }
// }
