const {expect} = require('chai')
const db = require('../index')
const Note = db.model('note')

describe('Note Model', ()=>{
  let note1, note2;

  before(async () => {
    note1 = await Note.create({
      header: 'note1 header',
      body: 'here is a note',
      date: new Date()
    })

    note2 = await Note.create({
      header:'note2 header',
      body: 'here is a note',
      date: new Date()

    })
  })

  it('Header, body & date cannot be null or empty string', ()=>{

    expect(note1.header).to.be.a('string')
    expect(note1.header).to.not.equal('')
    expect(note1.header).to.not.equal(null)

    expect(note1.body).to.be.a('string')
    expect(note1.body).to.not.equal('')
    expect(note1.body).to.not.equal(null)

    expect(note2.header).to.be.a('string')
    expect(note2.header).to.not.equal('')
    expect(note2.header).to.not.equal(null)

    expect(note2.body).to.be.a('string')
    expect(note2.body).to.not.equal('')
    expect(note2.body).to.not.equal(null)

  })


})
