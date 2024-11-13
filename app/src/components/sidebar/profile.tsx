import { LogOut } from "lucide-react";


export  function Profile(){
    return(
        <div className="grid items-center grid-cols-profile">
            <img src="https://github.com/Gabriel092005.png" className="w-10 h-10 rounded-full" alt="" /> 
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Gabriel Cavala Manuel</span>
                <span className="truncate text-sm text-zinc-500">gabrielcavalamanuel@gmail.com</span>
            </div> 
            <button type="button" className="ml-auto  p-2 hover:bg-zinc-50 rounded-full">
                <LogOut className="w-5 h-5 text-zinc-500"/>
            </button>

        </div>
    )
}