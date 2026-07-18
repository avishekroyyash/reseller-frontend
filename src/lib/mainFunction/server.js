
import { redirect } from "next/navigation"
import { getUserToken } from "./session"

export const serverDelete = async(path)=>{
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,{
      method: 'DELETE'
   })
   const data = await res.json()
   return data
}


export const authHeader =async()=>{
 const token = await getUserToken()
 const header = token ? {
   authorization : `Bearer ${token}`
 } : {}
 return header
}


export const serverFetch =async(path)=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`)
 const data = await res.json()
 return data 
}


export const secureFetch =async(path)=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,{
   headers : await authHeader()
})
 return handleStatus(res)
}


export const serverMutation = async(path,data,method='POST')=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,{
 method: method,
 headers : {
    'Content-Type' : 'application/json',
    ... await authHeader()
 },
 body: JSON.stringify(data)
})
// console.log(res.status,'STATUS-Code');
return handleStatus(res)
}


//handle 401,403,404
const handleStatus = res =>{
if(res.status === 401){
   redirect('/unauthorized')
}
if(res.status === 403){
   redirect('/forbidden')
}
return res.json()
}