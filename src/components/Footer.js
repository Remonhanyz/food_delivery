import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
		<div className="mt-14 bg-orange-100">
			<div className="mt-14 gap-6 items-center justify-center flex p-12 pt-4">
				<img src={Logo} alt="logo" className="w-10 h-auto"/>
				<div variant="h5" pb="40px" mt="15px" >
					Made with ❤️ by Remon Hany
				</div>
			</div>
		</div>
  );
}

export default Footer