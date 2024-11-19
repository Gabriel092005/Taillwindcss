'use client'

import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Menu, Search, SquareStack, User } from "lucide-react";

import { NavItem } from "./main-navigation/NavIntem";
import { SvgComponent } from "./logo";
import { UsedSpaceWidGet } from "./usedSpaceWidget";
import { Profile } from "./profile";
import * as Input from  './input'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from "@/components/ui/button";

import { useAutoAnimate } from "@formkit/auto-animate/react";

export interface InputProps{
}

export function SideBar(){
  const [parent] = useAutoAnimate()

    return(
    
         
          <Collapsible.Root
        
           className="border-b dark:bg-black  data-[state=open]:h-screen border-zinc-200  flex data-[state=open]:bottom-0 lg:data-[state=closed]:buttom-0 flex-col gap-4 fixed left-0 top-0 right-0 z-10 bg-white lg:auto lg:w-80 lg:border-r lg:px-5 lg:py-8  lg:auto ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
              <SvgComponent/>
              <strong>Untitled UI</strong>
              </div>
        
            <Collapsible.Trigger asChild className="lg:hidden">
               <Button variant={"ghost"}>
                <Menu className="h-4 w-4"/>
               </Button>

            </Collapsible.Trigger>
            </div>
          
         <Collapsible.Content forceMount ref={parent} className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex" >

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
  

    
        </Collapsible.Content>
          </Collapsible.Root>
       

      
    )
}