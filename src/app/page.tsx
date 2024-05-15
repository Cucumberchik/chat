
import React, { FC, ReactNode } from 'react'
import { Login } from '~/components/auth/login'
import Button from '~/components/material-component/Button'
import Input from '~/components/material-component/Input'

 const Home:FC = ():ReactNode => {
  return (
    <>
      {/* <Button variant="ghost" type="average" >This is Button</Button> */}
      {/* <Input variant="filled" /> */}
      <Login />
    </>
  )
}
export default Home