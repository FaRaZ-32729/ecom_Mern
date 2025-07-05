import React from 'react'
import Title from '../../components/Title'

const Dashboard = () => {
  return (
    <div>
      <Title title="Dashboard" subTitle="Gain full control of your hotel in real-time. The dashboard allows staff to manage reservations, check-ins, services, and billing with just a few clicks, improving response times and guest satisfaction." align="left" />


      <div className='flex gap-4 my-8'>

        <div className=' bg-primary/3  border border-primary/10 flex p-4 pr-8   '>
          <img src="../public/assets/bookmark.svg " alt="booking-icon" className='h-10 max-sm:hidden' />
          <div className='flex flex-col sm:ml-4 font-medium '>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-400 text-base '>25</p>
          </div>
        </div>

        <div className=' bg-primary/3  border border-primary/10 flex p-4 pr-8   '>
          <img src="../public/assets/revenue.svg " alt="revenue-icon" className='h-10 max-sm:hidden' />
          <div className='flex flex-col sm:ml-4 font-medium '>
            <p className='text-blue-500 text-lg'>Total revenue</p>
            <p className='text-neutral-400 text-base '> $650</p>
          </div>
        </div>

      </div>


      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium ' >User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden' >Room Nmae</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center' >Total Amount</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center' >Payment Status</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            <tr >
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300 '>faraz</td>
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300  max-sm:hidden'>double</td>
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>$200</td>
              <td className='py-3 px-4  border-t border-gray-300 flex'>
                {/* <button className={`py-1 px-3 text-xs rounded-full mx-auto  ${data.paymentStatus ? "bg-green-200 text-green-600" : "bg-amber-200 text-yellow-600"}`} >{data.paymentStatus ? "paid" : "unpaid"}</button> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Dashboard
