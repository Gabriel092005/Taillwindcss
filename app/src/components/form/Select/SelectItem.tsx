import * as Select from '@radix-ui/react-select'
import { Check } from "lucide-react";

export type SelectItemProps =  Select.SelectItemProps & {
    text:string
}

export function SelectItem({text,...props}:SelectItemProps){
    return(
        <Select.Item  
        className=' data-[highLighted]:bg-zinc-50 flex items-center gap-2 px-3 py-2.5  w-[--radix-select-trigger-width]'
        {...props}
        >
        <Select.ItemText className='text-black'>
          {text}
        </Select.ItemText>
        <Select.ItemIndicator>
          <Check className='h-4 2-4'/>
        </Select.ItemIndicator>
       </Select.Item>
    )
}