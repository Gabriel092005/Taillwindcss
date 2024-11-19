'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TableItem'
import { useState } from 'react'


export function SettingsTabs(){
    const [currentTab, SetCurrentTab]=useState('tab1') //bug aqui
    return(
        <>
        <Tabs.Root value={currentTab} onValueChange={SetCurrentTab}> 
          <ScrollArea.Root className='w-ful' type='scroll'>
            <ScrollArea.ScrollAreaViewport>
          <Tabs.List className='whitespace-nowrap mt-6 flex w-full items-center gap-10 border-b border-zinc-200'>
              <TabItem value='tab-1' title='Details' isSelected={currentTab==='tab-1'}/>
               <TabItem value='tab-2' title='Profile'isSelected={currentTab==='tab-2'} />
               <TabItem value='tab-3' title='Password'isSelected={currentTab==='tab-3'}/>
               <TabItem value='tab-4' title='Team'isSelected={currentTab==='tab-4'} />
               <TabItem value='tab-5' title='Plan' isSelected={currentTab=='tab-5'}/>
               <TabItem value='tab-6' title='Billing'isSelected={currentTab=='tab-6'} />
               <TabItem value='tab-7' title='Email'isSelected={currentTab=='tab-7'} />
               <TabItem value='tab-8' title='Notifications ' isSelected={currentTab==='tab-8'}/> 
               <TabItem value='tab-9' title='API'isSelected={currentTab==='tab-9'}/>
          </Tabs.List>
          </ScrollArea.ScrollAreaViewport>
          <ScrollArea.Scrollbar className='flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100' orientation='horizontal'>
            <ScrollArea.Thumb className='relative flex-1 rounded-lg bg-zinc-300'></ScrollArea.Thumb>
          </ScrollArea.Scrollbar>
          </ScrollArea.Root>
       </Tabs.Root>
        </>
    )
}

