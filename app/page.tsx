'use client'
import {Bold , Italic, Link, List, ListOrdered, Mail} from "lucide-react";
import { SettingsTabs } from "./src/components/SettingsTabs";
import * as Input from './src/components/sidebar/input'
import * as FileInput from '../app/src/components/form/fileInput'
import { Select } from "./src/components/form/Select";
import { SelectItem } from "./src/components/form/Select/SelectItem";
import { TextArea } from "./src/components/textArea/textArea";



export default function Home() {
  return (
      <>
      <h1 className="text-3xl font-medium text-zinc-900 ">Settings</h1>
      <SettingsTabs/>

      <div className="mt-6 flex flex-col lg:absolute ">
        <div className="flex flex-col lg:items-center lg:flex-row justify-between gap-4  pb-5 lg:border-b border-zinc-200 ">
        <div className="space-y-1">
            <h1 className="text-left font-medium">Personal Info</h1>
            <span>Update your photo and your personal Details Here.</span>
        </div>
          <div className="flex items-center  gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold border border-zinc-300">Cancel</button>
            <button type="submit"  form="settings" className="rounded-lg px-4 py-2 text-sm font-semibold text-white bg-violet-600">Save</button>
          </div>
        </div>
        <form action="" className="mt-6 flex flex-col gap-5 w-full divide-y divide-zinc-500">
            <div className=" flex flex-col lg:grid gap-3 lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
                Name
            </label>
              <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
             

                <Input.Root>
                <Input.Control id="firstName" defaultValue="Diego"></Input.Control>
                </Input.Root>

                <label htmlFor="firstName" className="text-sm font-medium lg:hidden text-zinc-700">
                Last Name
                </label>

                <Input.Root>
                <Input.Control  defaultValue="Fernades"></Input.Control>
                </Input.Root>
              </div>
            </div>

            <div className=" flex flex-col lg:grid gap-3 lg:grid-cols-form">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
                <Input.Root>
                <Input.Prefix>
                     <Mail className="h-5 w-5"/>
                </Input.Prefix>
                <Input.Control id="email" defaultValue="Ex:gabriel@gmail.com...."></Input.Control>
                </Input.Root>
            </div>

            <div className="lg:grid gap-3 lg:grid-cols-form pt-5">
              <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
                 Your Photo
                  <span className="text-sm mt-0.5 block font-medium text-zinc-500  lg:flex-nowrap">This will be displayed on your Profile</span>
                  </label>
                  
                  <FileInput.Root className="flex flex-col lg:items-start gap-5 lg:flex-row">
                        <FileInput.ImagePreview/>
                        <FileInput.Trigger/>
                        <FileInput.Control/>
                      </FileInput.Root>
            </div>

            <div className="lg:grid gap-3 lg:grid-cols-form pt-5">
              <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
                <Input.Root>
                <Input.Control id="role" defaultValue="Ex:CTO"></Input.Control>
                </Input.Root>
            </div>
            <div className="lg:grid gap-3 lg:grid-cols-form pt-5">
              <label htmlFor="country" className="text-sm font-medium text-zinc-700"
              >
                Country
                </label>
                <Select placeholder="select a country..">
                  <SelectItem value="br" text="brasil"/>
                </Select>
            </div>
            <div className="lg:grid gap-3 lg:grid-cols-form pt-5">
              <label htmlFor="Bio" className="text-sm font-medium text-zinc-700">
                Bio
                <p className="text-sm font-medium text-zinc-500">Write a short Introduction</p>
                </label>
             
                <div className="space-y-3">
                  <div className="grid gap-3  grid-cols-2">
                 
                  <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" defaultChecked text="Normal text"/>
                  </Select>
                  <div className="flex items-center gap-1">
                  <button type="button" className="  p-2 hover:bg-zinc-50 rounded-full" >
                  <Bold className="w-5 h-5 text-zinc-500"strokeWidth={3}/>
                 </button>
                  <button type="button" className="  p-2 hover:bg-zinc-50 rounded-full" >
                  <Italic className="w-5 h-5 text-zinc-500"strokeWidth={3}/>
                 </button>  
                 <button type="button" className="  p-2 hover:bg-zinc-50 rounded-full" >
                  <Link className="w-5 h-5 text-zinc-500"strokeWidth={3}/>
                 </button>
                 <button type="button" className="  p-2 hover:bg-zinc-50 rounded-full" >
                  <List className="w-5 h-5 text-zinc-500"strokeWidth={3}/>
                 </button>
                 <button type="button" className="  p-2 hover:bg-zinc-50 rounded-full" >
                  <ListOrdered className="w-5 h-5 text-zinc-500"strokeWidth={3}/>
                 </button>
      
                  </div>
                  </div>
                <TextArea/>
                </div>
            </div>
            <div className="lg:grid gap-3 lg:grid-cols-form pt-5">
              <label htmlFor="time" className="text-sm font-medium text-zinc-700">
                Timezone
                <p className="text-sm font-medium text-zinc-500">Write a short Introduction</p>
                </label>
                 <Select placeholder="select a  Timezone..">
                  <SelectItem value="t" text="pacific Standard Time (UTC-08:00)"/>
                  <SelectItem value="b" text="pacific Standard Time (UTC-08:00)"/>
                  </Select>
            </div>
            <div className="lg:grid gap-3 lg:grid-cols-form pt-4">
              <label htmlFor="Bio" className="text-sm font-medium text-zinc-700">
                Portfolio
                <p className="text-sm font-medium text-zinc-500">Portfolio Projects</p>
                </label>
                <Input.Root>
                <Input.Control id="Bio" defaultValue=""></Input.Control>
                </Input.Root>
            </div>
            <FileInput.Root  >
                        <FileInput.Trigger />
                        <FileInput.FileList/>
                        <FileInput.Control multiple />
            </FileInput.Root>
            <div className="flex items-center justify-end pt-5 gap-3">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold border border-zinc-300">Cancel</button>
            <button type="submit"  form="settings" className="rounded-lg px-4 py-2 text-sm font-semibold text-white bg-violet-600">Save</button>
            </div>
        </form>
      </div>
      
      </>
  ); 
}
