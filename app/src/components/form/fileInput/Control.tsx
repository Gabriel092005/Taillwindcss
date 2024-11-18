'use client'

import { ChangeEvent, ComponentProps } from "react"
import { useFileInput } from "./Root"

export type controlProps = ComponentProps<'input'>

export function Control(props:controlProps){

    const {id,onFileselected  } = useFileInput()

    function handleFilesSelected(event:ChangeEvent<HTMLInputElement>){
        if(!event.target.files?.length){
            return
        }
        const files = Array.from(event.target.files)
        onFileselected(files)


    }

    return <input 
    type="file" 
    className="sr-only"
    onChange={handleFilesSelected}
     id={id}{...props} 
    />
}