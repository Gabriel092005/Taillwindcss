import { Search } from "lucide-react";
import { ComponentProps } from "react";


type InputsPrefixProps =  ComponentProps<'div'>

 export function Prefix(props:InputsPrefixProps){
    return  <div{...props}/>
}

type InputsControlProps = ComponentProps<'input'>

export  function Control(props:InputsControlProps){

      return  <input type="text" className="flex-1 border-0 bg-transparent  placeholder-zinc-600 p-0" 
      {...props} />
    
    
}
type  InputRootProps = ComponentProps<'div'>



 export function Root(props:InputRootProps){
    return(
        <div className="flex w-full mt-6 items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"{...props}
        />
    )
}

