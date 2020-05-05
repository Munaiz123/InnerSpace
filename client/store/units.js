import axios from "axios"

// ACTION TYPES
const GET_UNITS = 'GET_UNITS'
const ADD_UNIT = 'ADD_UNIT'
const DELETE_UNIT = 'DELETE_UNIT'
const UPDATE_UNIT = 'UPDATE_UNIT'

//ACTION CREATORS

export const getUnits = units =>({type: GET_UNITS, units})

export const addUnit = unit =>({type: ADD_UNIT, unit})

export const deleteUnit = unitId => ({type:DELETE_UNIT, unitId})

export const updateUnit = unit =>({type:UPDATE_UNIT, unit})



//THUNKS

export const fetchUnits = () => async dispatch =>{
  try{
    let {data} = await axios.get('/api/units')
    dispatch(getUnits(data))

  } catch(error){
    console.log('ERROR FORM fetchUnits THUNK', error)
  }
}

export const addAUnit = unit => async dispatch =>{
  try{
    let {data} = await axios.post('/api/units/addUnit', unit)
    dispatch(addUnit(unit))

  } catch (error){
    console.log('ERROR FROM addAUnit THUNK', error)
  }
}

export const deleteAUnit = unitId => async dispatch =>{
  try {
    await axios.delete(`/api/units/${unitId}`)
    dispatch(deleteUnit(unitId))

  } catch (error){
    console.log('ERROR FROM deleteAUnit THUNK', error)
  }
}

export const updateAUnit = (unit, id) => async dispatch =>{
  try{
    let {data} = await axios.put(`/api/units/${id}`, unit)
    dispatch(updateUnit(data))

  } catch(error){
    console.log('ERROR FROM updateUnit THUNK', error)
  }
}

// INITIAL STATE
const units = []

// REDUCER

export default function (state = units, action){
  switch(action.type){
    case GET_UNITS:
      return action.units
    case ADD_UNIT:
      return [...state, action.unit]
    case DELETE_UNIT:
      return [... state].filter( unit => action.unitId !== unit.id)
    case UPDATE_UNIT:
      return[...state].map( unit =>{
        if(unit.id === action.unit.id) return action.unit
      })
    default:
      return state
  }
}