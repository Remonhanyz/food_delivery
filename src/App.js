import React from 'react'
import { Header, MainContainer, CreateContainer } from "./components"
import {Route, Routes} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { useEffect } from 'react'
import {getAllFoodItems} from "./utils/firebaseFunctions"

const App = () => {
  const [ { }, dispatch ] = useStateValue()
  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      console.log(data)
    })
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      
      <main className='w-full mt-14 md:mt-24 px-4 md:px-16 py-4'>
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>

    </div>
    </AnimatePresence>

  )
}

export default App