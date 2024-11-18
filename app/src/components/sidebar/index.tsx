import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, User } from "lucide-react";

import { NavItem } from "./main-navigation/NavIntem";
import { SvgComponent } from "./logo";
import { UsedSpaceWidGet } from "./usedSpaceWidget";
import { Profile } from "./profile";
import * as Input from  './input'

export interface InputProps{
}

export function SideBar(){
    return(
         
          <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-4">
            <div className="flex items-center">
            <SvgComponent/>
            <strong>Untitled UI</strong>
            </div>
            <Input.Root>
            <Input.Prefix>
                  <Search className="h-5 w-5 text-zinc-500"/>
            </Input.Prefix>
              <Input.Control placeholder="Search"/>
            </Input.Root>
        <nav className="space-y-0.5">
         <NavItem title="Home" icon={Home}/>
         <NavItem title="DashBoard" icon={BarChart}/>
         <NavItem title="Projects" icon={SquareStack}/>
         <NavItem title="Tasks" icon={CheckSquare}/>
         <NavItem title="Reporting" icon={Flag}/>
         <NavItem title="Users" icon={User}/>
        </nav>
     
         
            <div className="mt-auto flex flex-col gap-3">
                 <NavItem title="support" icon={LifeBuoy}></NavItem>
                 <NavItem title="Settings" icon={Cog}></NavItem>
            </div>   
            <UsedSpaceWidGet/>
            <div className="h-px bg-zinc-200">
             <Profile/>
            </div>
          </aside>
      
    )
}