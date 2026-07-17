'use server'
import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation"

export const getUserData =async () =>{
 const session = await auth.api.getSession({
    headers: await headers()
 })
 //console.log(session.user);
 return session?.user || null ;
}

export const getUserToken =async () =>{
 const session = await auth.api.getSession({
    headers: await headers()
 })
 //console.log(session.user);
 return session?.session?.token || null ;
}

export const requireRole = async(role) =>{
   const user = await getUserData();
  if(user?.role !== role){
   return redirect('/unauthorized')
  }
}