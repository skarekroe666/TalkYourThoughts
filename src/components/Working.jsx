import React from 'react'

const Working = () => {
  return (
    <div className='relative py-12'>
        <div className='absolute'>
            
        </div>

        <div className='relative container mx-auto px-4 py-20'>
            <div className='text-center mb-20'>
                <h2 className='text-4xl text-heroBg font-bold font-secondary mb-4'>How it works</h2>
                <p className='text-lg md:w-1/2 w-full mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nostrum!</p>
            </div>

            <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
                <div className='relative bg-gray-100 text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center'>1</div>
                    <h3 className='text-lg font-medium mt-8'>Step 1: Fill a form</h3>
                    <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde deleniti repellendus est eveniet, libero quaerat perferendis laborum accusamus non doloremque alias, nostrum voluptates error totam ad, vitae repudiandae fugit?</p>
                </div>

                <div className='relative bg-gray-100 text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center'>2</div>
                    <h3 className='text-lg font-medium mt-8'>Step 2: Get matched</h3>
                    <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde deleniti repellendus est eveniet, libero quaerat perferendis laborum accusamus non doloremque alias, nostrum voluptates error totam ad, vitae repudiandae fugit?</p>
                </div>

                <div className='relative bg-gray-100 text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center'>3</div>
                    <h3 className='text-lg font-medium mt-8'>Step 3: Schedule</h3>
                    <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde deleniti repellendus est eveniet, libero quaerat perferendis laborum accusamus non doloremque alias, nostrum voluptates error totam ad, vitae repudiandae fugit?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Working