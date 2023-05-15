import React, { useState } from 'react'
import Logo from '../img/logo.png'
import { MdShoppingBasket, MdLogout, MdAdd } from 'react-icons/md'
import Avatar from '../img/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
// import useState from ''

const Header = () => {
  const [{ user, isAdmin }, dispatch] = useStateValue()
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const [isMenu, setIsMenu] = useState(false)

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData }
      } = await signInWithPopup(firebaseAuth, provider)
      console.log((await providerData[0].email) == 'remonhany2000@gmail.com')
      dispatch({
        type: actionType.SET_USER,
        user: await providerData[0],
        isAdmin: (await providerData[0].email) == 'remonhany2000@gmail.com'
      })
      localStorage.setItem('user', JSON.stringify(await providerData[0]))
      localStorage.setItem(
        'isAdmin',
        JSON.stringify(
          (await providerData[0].email) == 'remonhany2000@gmail.com'
        )
      )
    } else {
      setIsMenu(!isMenu)
    }
  }

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()
    dispatch({
      type: actionType.SET_USER,
      user: null,
      isAdmin: false
    })
  }

  return (
    <header className='fixed z-50 w-screen py-2 px-5 md:p-4 md:px-16 bg-primary'>
      {/* desktop & tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            className='flex items-center gap-8 ml-auto'
          >
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Home
            </li>
{/* desktop & tablet 
//             <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
//               Menu
//             </li>
//             <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
//               About Us
//             </li>
//             <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
//               Service
//             </li>
*/}
          </motion.ul>
          <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-textColor test-2xl cursor-pointer' />
            <div className='absolute -top-3 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-[0.65rem] text-white font-semibold'>2</p>
            </div>
          </div>
          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt='Avatar'
              className='w-9 min-w-[2.25rem] h-9 min-h-[2.25rem] drop-shadow-md cursor-pointer rounded-full'
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                exit={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                className='w-40 bg-primary shadow-xl rounded-lg flex flex-col top-12 right-0 absolute'
              >
                {user && isAdmin === true && (
                  <Link to='/createitem'>
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}>
                      New Item <MdAdd />{' '}
                    </p>
                  </Link>
                )}
                <p
                  className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={logout}
                >
                  Log out <MdLogout />{' '}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full '>
        <div className='relative flex items-center justify-center'>
          <MdShoppingBasket className='text-textColor test-2xl cursor-pointer' />
          <div className='absolute -top-3 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-[0.65rem] text-white font-semibold'>2</p>
          </div>
        </div>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='relative'>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt='Avatar'
            className='w-9 min-w-[2.25rem] h-9 min-h-[2.25rem] drop-shadow-md cursor-pointer rounded-full'
            onClick={login}
          />

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              exit={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              className='w-40 bg-primary shadow-xl rounded-lg flex flex-col top-12 right-0 absolute'
            >
              {user && isAdmin === true && (
                <Link to='/createitem'>
                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}>
                    New Item <MdAdd />{' '}
                  </p>
                </Link>
              )}

              <ul className='flex flex-col'>
                <li className='text-base px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200' onClick={() => setIsMenu(false)}>
                  Home
                </li>
                <li className='text-base px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200' onClick={() => setIsMenu(false)}>
                  Menu
                </li>
                <li className='text-base px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200' onClick={() => setIsMenu(false)}>
                  About Us
                </li>
                <li className='text-base px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200' onClick={() => setIsMenu(false)}>
                  Service
                </li>
              </ul>

              <p
                className='mt-2 mb-3 mx-2 p-2 rounded-md shadow-lg flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
                onClick={logout}
              >
                Log out <MdLogout />{' '}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
