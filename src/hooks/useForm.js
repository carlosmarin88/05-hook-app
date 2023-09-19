import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        //console.log({ name, value })
        //console.log(event.target.value)
        setformState({
            ...formState,
            [name]: value,
        })
    }

    return {
        ...formState,
        formState,
        onInputChange,
    }
}
