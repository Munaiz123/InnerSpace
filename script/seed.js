'use strict'

const db = require('../server/db')
const {User,Unit,Building,Ticket,Note} = require('../server/db/models')
const faker = require('faker')



const USER_COUNT = 30
const UNIT_COUNT = 30
const TICKET_COUNT = 20
const BUILDING_COUNT = 10
const NOTE_COUNT = 23

const createUser = async () => {
  try {
    let pass = faker.internet.password()
    let currentUser = await User.create({
      email: faker.internet.email(),
      unhashedPasswordForTesting:pass,
      password: pass,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      tenantLandlordId: faker.random.number({min:1, max:2})
    })

    return currentUser
  } catch (error) {
    console.log('ERROR FROM SEED FILE - createUser() ')
    console.log(error)
  }
}

const createBuilding = async () => {
  try {
    let currentBuilding = await Building.create({
      buildingName: faker.address.streetName() + ' Apartments',
      address: faker.address.streetAddress(),
      unitsCount: faker.random.number({min: 5, max: 11}),
      landlordId: faker.random.number({min:1,max:2})
    })
    return currentBuilding
  } catch (error) {
    console.log('ERROR FROM SEED FILE - createBuilding() ')
    console.log(error)
  }
}

const createUnit = async (tenId, buildId) => {
  try {
    let unitNum = String(
      faker.random.alphaNumeric(faker.random.number({min: 1, max: 6}))
    )

    let currentUnit = await Unit.create({
      unitNumber: unitNum,
      bedroomCount: faker.random.number({min: 1, max: 3}),
      bathroomCount: faker.random.number({min: 1, max: 2}),
      rent: faker.random.number({min: 900, max: 1300}),
      tenantId: tenId,
      unitLandlordId: faker.random.number({min:1,max:2}),
      buildingId: buildId
    })

    return currentUnit
  } catch (error) {
    console.log('ERROR FROM SEED FILE - createUnit() ')
    console.log(error)
  }
}

const createTicket = async () => {
  try {


    let currentTicket = await Ticket.create({
      issue: faker.random.arrayElement(['HEAT/AC','PLUMBING','ELECTRICAL','OTHER']),
      details: faker.lorem.paragraph(),
      unitId: faker.random.number({min: 1, max: 30}),
      ticketTenantId: faker.random.number({min:3, max:20}),
      ticketLandlordId: faker.random.number({min:1, max:2}),
      buildingId: faker.random.number({min:1, max:10})
    })
    return currentTicket
  } catch (error) {
    console.log('ERROR FROM SEED FILE - createTicket() ')
    console.log(error)
  }
}

const createNote = async () => {
  try {
    let currentNote = await Note.create({
      date: faker.date.past(7),
      header: faker.lorem.sentence(),
      body: faker.lorem.paragraph(1),
      unitId: faker.random.number({min: 1, max: 30})
    })
    return currentNote
  } catch (error) {
    console.log('ERROR FROM SEED FILE - createNote() ')
    console.log(error)
  }
}


async function seed() {
  await db.sync({force: true})
  // console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'landlord@email.com',
      password: '123',
      firstName: 'First',
      lastName: 'Landlord',
      isLandlord: true
    }),

    User.create({
      email: 'landlord2@email.com',
      password: '123',
      firstName: 'Second',
      lastName: 'Landlord',
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

  for (let i = 0; i < BUILDING_COUNT; i++) {
    await createBuilding()
  }

  for (let i = 2; i <= UNIT_COUNT + 1; i++) {
    //creating new unit + at the same time adding tenant
    let buildingNum = faker.random.number({min: 1, max: 7})
    let newUnit = await createUnit(i, buildingNum)
  }

  for (let i = 0; i < TICKET_COUNT; i++) {
    await createTicket()
  }

  for (let i = 0; i < NOTE_COUNT; i++) {
    await createNote()
  }

  // console.log(`seeded successfully!`)
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
