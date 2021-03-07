import {useState} from "react";


export function useInput(initialValue: string) {

    const [value, setValue] = useState<string>(initialValue)
    const onChange = (e: any) => setValue(e.target.value)

    return {
        value, onChange
    }
}