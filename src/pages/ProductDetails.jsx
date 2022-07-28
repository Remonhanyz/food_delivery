import React from 'react'
import {useParams} from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'

const ProductDetails = () => {
    const [{products}, dispatch] = useStateValue()
  const {id} = useParams()
//   const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
//   const extraDetail = [
//     {
//       // icon: BodyPartImage,
//       name: bodyPart
//     },
//     {
//       // icon: TargetImage,
//       name: target
//     },
//     {
//       // icon: EquipmentImage,
//       name: equipment
//     }
//   ]

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 w-full h-screen'>
        <div className='drop-shadow-md flex items-center justify-center p-4 bg-white rounded-xl lg:h-[28rem] w-auto'>
      <img src={products[id-1].image} alt={products[id-1].name} loading='lazy' className="lg:h-[18rem] w-auto" />
</div>
      <div sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <div variant='h3'>{products[id-1].title}</div>
        <div variant='h6'>
          {products[id-1].description
}
        </div>

      </div>
    </div>
  )
}

export default ProductDetails

