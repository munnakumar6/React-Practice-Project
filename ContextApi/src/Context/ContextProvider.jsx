
import { useState } from 'react'
import creatuser from './Usercontext'

function DataProvider({children}){
    const [user , setuser]=useState()
   return(
    <creatuser.Provider value={{user,setuser}}>
    {children}
    </creatuser.Provider>
   )

}
export default DataProvider