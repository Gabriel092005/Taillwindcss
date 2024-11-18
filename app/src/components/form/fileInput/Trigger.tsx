'use client'

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export interface TriggerProps{}

export function Trigger(){

    const { id  } = useFileInput()

    return(
        <label htmlFor={id} className=" group flex-1 cursor-pointer flex items-center gap- rounded-lg border border-zinc-300 px-6 py-4 text-center shadow-sm flex-col hover:bg-violet-50">
        <div className="rounded-full border-spacing-6 border-zinc-50 bg-zinc-100 p-2 group-hover:via-violet-50 group-hover:bg-violet-100">
          <UploadCloud className=" group-hover:text-violet-600 h-5 w-5 text-zinc-600"/>
        </div>
        <div className="flex flex-col items-center ">
          <span><span className="font-semibold text-violet-700">Click to upload</span> or drag an drop</span>
          <span className="text-sm group-hover:text-violet-500">SVG , PNG, JPEG,or GIF(max.800x400px)to upload or drag an drop</span>
        </div>
        </label>
    )
}