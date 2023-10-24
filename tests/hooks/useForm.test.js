import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Carlos',
        email: 'charly15@mail.com'
    }


    test('Debe de regresar los valores por defecto', () => {


        const { result } = renderHook(() => useForm(initialForm))
        //console.log(result.current)
        expect(result.current).toEqual({
            name: 'Carlos',
            email: 'charly15@mail.com',
            formState: { name: 'Carlos', email: 'charly15@mail.com' },
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test('Debe de cambiar el nombre del formulario', () => { 
        
        const newValue = 'Juan'
        
        //montar el hook
        const { result } = renderHook(() => useForm(initialForm))

        // onInputChange() // act, event ...
        act(()=> {
            result.current.onInputChange({target: {name: 'name', value: newValue}})
        })
        // expect, result.current.name === Juan
        expect(result.current.name).toBe(newValue)
        // expect, result.current.formState.name === Juan
        expect(result.current.formState.name).toBe(newValue)

     })


     test('Debe de realizar el reset del formulario', () => { 
        
        const newValue = 'Juan'
        
        //montar el hook
        const { result } = renderHook(() => useForm(initialForm))

        // onInputChange() // act, event ...
        act(()=> {
            result.current.onInputChange({target: {name: 'name', value: newValue}})
            result.current.onResetForm()
        })
        // expect, result.current.name === Juan
        expect(result.current.name).toBe(initialForm.name)
        // expect, result.current.formState.name === Juan
        expect(result.current.formState.name).toBe(initialForm.name)

     })
})