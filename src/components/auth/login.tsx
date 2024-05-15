"use client"
import { useState, type FC, type ReactElement } from 'react'
import {useAuth} from "~/zustand/auth"
import Input from '../material-component/Input'

export const Login:FC = ():ReactElement => {
    const {createUser} = useAuth(s=>s);
    const [name, setName] = useState('')
    
    
  return (
    <section id='login'>
       
        {/* <Input name='email' handleChange={handleInput} /> */}
        <Input $variant="error" value={name} name='password' onChange={(e)=>setName(e.target.value)}  />
    </section>
  )
}
