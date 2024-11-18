'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps extends SelectPrimitive.SelectProps{

  children:ReactNode
  placeholder:string
}

export function  Select({children,placeholder,...props}:SelectProps){
    return(
      <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2">
       <SelectPrimitive.Value placeholder={placeholder} className="text-black"/>
       <SelectPrimitive.Icon>
        <ChevronDown className=""/>
       </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger> 
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content sideOffset={3} side='bottom' position='popper' className='z-10 rounded-lg border border-zinc-300 bg-white'>
          <SelectPrimitive.Viewport>
                 {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>

    )

}