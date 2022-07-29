import React from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'

const ProductDetails = () => {
  const [{ products }, dispatch] = useStateValue()
  const { id } = useParams()
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
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 w-full h-[65vh]'>
      <div className='drop-shadow-md flex items-center justify-center p-4 bg-white rounded-xl lg:h-[28rem] w-auto'>
        <img
          src={products[id - 1].image}
          alt={products[id - 1].name}
          loading='lazy'
          className='lg:h-[18rem] w-auto'
        />
      </div>
      <div sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <div className='mb-16 text-[1.5rem] lg:text-[2rem] font-bold tracking-wide' variant='h3'>{products[id - 1].title}</div>
        <div variant='h6'>{products[ id - 1 ].description}</div>
        <p className='text-sm font-semibold text-headingColor  mt-8'>
  <span className='text-xs text-red-600'>$</span> {products[ id - 1 ].price}
</p>

      </div>
    </div>
  )
}

export default ProductDetails
