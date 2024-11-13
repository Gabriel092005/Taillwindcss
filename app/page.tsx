
import { Mail } from "lucide-react";
import { SettingsTabs } from "./src/components/SettingsTabs";
import *as Input from './src/components/sidebar/input'



export default function Home() {
  return (
      <>
      <h1 className="text-3xl font-medium text-zinc-900 ">Settings</h1>
      <SettingsTabs/>

      <div className="mt-6 flex flex-col ">
        <div className="flex justify-between  pb-5 border-b border-zinc-200 items-center">
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
            <div className="grid gap-3 grid-cols-form">
              <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
              <div className=" grid gap-6 grid-cols-2">

                <Input.Root>
                <Input.Control id="firstName" defaultValue="Diego"></Input.Control>
                </Input.Root>

                <Input.Root>
                <Input.Control  defaultValue="Fernades"></Input.Control>
                </Input.Root>
              </div>
            </div>

            <div className="grid gap-3 grid-cols-form pt-4">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
                <Input.Root>
                <Input.Prefix>
                     <Mail className="h-5 w-5"/>
                </Input.Prefix>
                <Input.Control id="email" defaultValue="Ex:gabriel@gmail.com...."></Input.Control>
                </Input.Root>
            </div>

            <div className="grid gap-3 grid-cols-form pt-4">
              <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
                 Your Photo
                  <p className="text-sm font-medium text-zinc-500">This will be displayed on your Profile</p>
                  </label>
            </div>

            <div className="grid gap-3 grid-cols-form pt-4">
              <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
                <Input.Root>
                <Input.Control id="role" defaultValue="Ex:CTO"></Input.Control>
                </Input.Root>
            </div>
            <div className="grid gap-3 grid-cols-form pt-4">
              <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
                <Input.Root>
                <Input.Control id="role" defaultValue="Ex:Angola"></Input.Control>
                </Input.Root>
            </div>
            <div className="grid gap-3 grid-cols-form pt-4">
              <label htmlFor="Bio" className="text-sm font-medium text-zinc-700">
                Bio
                <p className="text-sm font-medium text-zinc-500">Write a short Introduction</p>
                </label>
                <Input.Root>
                <Input.Control id="Bio" defaultValue=""></Input.Control>
                </Input.Root>
            </div>
            <div className="grid gap-3 grid-cols-form pt-4">
              <label htmlFor="Bio" className="text-sm font-medium text-zinc-700">
                Portfolio
                <p className="text-sm font-medium text-zinc-500">Portfolio Projects</p>
                </label>
                <Input.Root>
                <Input.Control id="Bio" defaultValue=""></Input.Control>
                </Input.Root>
            </div>
            <div className="flex items-center justify-end pt-5">

            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold border border-zinc-300">Cancel</button>
            <button type="submit"  form="settings" className="rounded-lg px-4 py-2 text-sm font-semibold text-white bg-violet-600">Save</button>
            </div>
        </form>
      </div>
      
      </>
  ); 
}
