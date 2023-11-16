import React from 'react'

export const TrackingDetails = () => {
  return (
    <div className="bg-gray-50 px-8 py-5 rounded-lg shadow-black border-2 border-gray-400 w-full">
      <div className=' sm:grid sm:grid-cols-2 flex flex-col xl:w-fit'>
        <div className='col'>
          <p className="mb-4">Order number:</p>
        </div>
        <div className='col'>
          <p className="font-bold mb-4"> M-127-896-533</p>
        </div>
        <div className='col'>
          <p className="mb-4">Delivered by:</p>
        </div>
        <div className='col'>
          <p className="font-bold mb-4 "> September 12, 2023</p>
        </div>
        <div className='col'>
          <p className="mb-4">Delivered to:</p>
        </div>
        <div className='col'>
          <p className="font-bold"> Seneca Newnham Campus</p>
          <p className='mb-4'>1750 Finch Ave E, North York, ON M2J-2X5</p>
        </div>
        {/* <div className='col'>
                <p>Total Amount:</p>
            </div>
            <div className='col'>
                <p className="font-bold"> $46</p>
            </div> */}
      </div>
    </div>
  )
}
