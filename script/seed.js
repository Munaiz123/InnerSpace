'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const faker = require('faker')



const USER_COUNT = 30
const UNIT_COUNT = 30
const TICKET_COUNT = 45
const BUILDING_COUNT = 7
const NOTE_COUNT = 23

const createUser = async () =>{

  try{
    let pass = faker.internet.password()
    let currentUser = await User.create({
      email:faker.internet.email(),
      password: pass,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    })

    return currentUser;

  } catch(error){
    console.log('ERROR FROM SEED FILE - createUser() ')
    console.log(error)
  }
}


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'landlord@email.com',
      password: '123',
      firstName: 'Land',
      lastName: 'lord',
      isLandlord: true
    }),

    User.create({
      email: 'tenant@email.com',
      password: '123',
      firstName: 'Cody',
      lastName: 'Boy'
    })
  ])

  for (let i = 0; i < USER_COUNT; i++) {
    await createUser()
  }

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.


async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) runSeed()

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
