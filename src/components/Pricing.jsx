import React from 'react'

const Pricing = () => {

  const packages = [
    {
      name: 'Bronze Package',
      price: '$99',
      description: 'Ideal for individuals or small businesses looking to get started with mental wellness.',
      features: [
        'Access to basic wellness resources',
        'Weekly mental wellness tips',
        'Community support group access',
      ],
    },
    {
      name: 'Silver Package',
      price: '$199',
      description: 'A great choice for growing businesses with additional features and support for mental wellness.',
      features: [
        'All Bronze Package features',
        'Monthly guided meditation sessions',
        'Personalized wellness plan',
        'Access to expert webinars',
      ],
    },
    {
      name: 'Gold Package',
      price: '$299',
      description: 'Perfect for larger businesses needing advanced mental wellness features and premium support.',
      features: [
        'All Silver Package features',
        'Weekly one-on-one coaching sessions',
        'Advanced mental wellness tracking tools',
        '24/7 access to mental wellness experts',
      ],
    },
  ]
  
  const handleScrollTo = () => {
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div id='pricing' className='bg-[#f7f8fc] pt-32'>
      <div className='container mx-auto px-7'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>We wish to meet your needs</h2>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam non perspiciatis maiores magnam praesentium?</p>
        </div>

        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-9'>
          {packages.map((pkg, index) => (
            <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
              <h3 className='text-xl font-semibold mb-2'>{pkg.name}</h3>
              <hr className='w-24 border text-primary border-primary'/>
              <p className='text-xl font-bold mb-2'>{pkg.price} <span className='text-lg font-normal'></span></p>
              <p className='text-[17px] mb-2'>{pkg.description}</p>
              <ul className='list-disc list-inside space-y-2 mb-4'>{pkg.features.map((feature, idx)=>(
                <li key={idx}>{feature}</li>
              ))}</ul>
              <button onClick={handleScrollTo} className='bg-primary text-white px-4 py-2 rounded'>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing