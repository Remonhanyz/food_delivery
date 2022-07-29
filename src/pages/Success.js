import React from 'react'
import Logo from "../img/success-svgrepo-com.svg"

const Success = () => {
  return (
    <div className="w-full h-[75vh] flex flex-col items-center justify-center">
        <img src={Logo} className="h-[40vh]"/>
        <div className="text-green-700 w-full flex items-center justify-center pt-10 font-semibold text-[5.5rem]">
        Success
        </div>
        </div>
  )
}

export default Success