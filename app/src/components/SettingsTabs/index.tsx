'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TableItem'
import { useState } from 'react'


export function SettingsTabs(){
    const [currentTab, SetCurrentTab]=useState('tab1') //bug aqui
    return(
        <>
        <Tabs.Root value={currentTab} onValueChange={SetCurrentTab}> 
          <Tabs.List className='mt-6 flex w-full items-center gap-10 border-b border-zinc-200'>
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
       </Tabs.Root>
        </>
    )
}

