import { todoReducer } from "../../src/08-useReuder/todoReducer"

describe('Prueba en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('Debe de regresar el estado inicial', () => { 

        const newState = todoReducer(initialState, {})

        expect(newState).toBe(initialState);

     })

     test('Debe de agregar un todo', ()=> {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)
     })

     test('Debe de eliminar un TODO', ()=> {
       
        const deleteAction = {
            type: '[TODO] Remove Todo',
            payload: 1
            
        }

        const newState = todoReducer(initialState, deleteAction)
        expect(newState.length).toBe(0)

     })

     test('Debe de realizar el Toggle del TODO', () => { 
        
        const updateToggleAction = {
            type: '[TODO] Toggle Todo',
            payload: 1             
        }
        const newState = todoReducer(initialState, updateToggleAction)
        expect(newState.length).toBe(1)
        expect(newState[0].done).toBeTruthy()

      })
 })