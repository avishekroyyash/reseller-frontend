
export const serverDelete = async(path)=>{
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,{
      method: 'DELETE'
   })
   const data = await res.json()
   return data
}

export const serverFetch =async(path)=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`)
 const data = await res.json()
 return data 
}


export const serverMutation = async(path,data,method='POST')=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,{
 method: method,
 headers : {
    'Content-Type' : 'application/json'
 },
 body: JSON.stringify(data)
})
return res.json()
}