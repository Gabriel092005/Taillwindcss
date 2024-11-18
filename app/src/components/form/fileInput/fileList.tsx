'use client'

import { UploadCloud } from "lucide-react"
import { useFileInput } from "./Root"
import { formatBytes } from "../../utills/format-byte"
import {useAutoAnimate } from '@formkit/auto-animate/react'


export function  FileList(){

    const { files   } = useFileInput()
    const [parent] = useAutoAnimate()
    
    return(
        <div ref={parent} className="mt-4 space-y-3">
            {files.map(files=>{
                return(
                    <div key={files.name} className=" border-4 border-zinc-100 flex items-start gap-4">
                          <UploadCloud className="text-violet-700 h-4 w-4"/>
                      <div className=" flex pading-2 text-violet-600">
                      
                        <div className="flex flex-1 flex-col gap-3">
                            <div className="flex flex-col ">
                                <span className="text-sm font-medium text-zinc-700">{files.name}</span>
                                <span className="text-sm text-zinc-500">{formatBytes(files.size)}</span>
                            </div>
                            <div className="flex w-full items-center gap-3 ">
                                
                                <div className="h-2 flex-1 bg-zinc-100">
                                    <div className="rounded-full h-2 bg-violet-500"></div>
                                </div>
                                <span className="text-sm fonnt-medium text-zinc-700">100%</span>
                            </div>
                        </div>
                      </div>
                    </div>
                )
            })}

        </div>
    )
}