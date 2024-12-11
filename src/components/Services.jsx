import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cpc from "../assets/img6.jpg";
import adc from "../assets/img3.jpg";
import scc from "../assets/img1.jpg";
import fsc from "../assets/img5.jpg";

const Services = () => {
  return (
    <div id='services'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What we can do together</h2>
          <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusantium et, doloremque autem dolorum veniam!</p>
        </div>

        <div className='bg-[#f7f8fc] py-9 md:w-4/5 mx-auto'>
          <Tabs>
            <TabList className='flex flex-wrap justify-around items-center md:gap-8 gap-4 cursor-pointer'>
              <Tab className='text-green-700 hover:text-purple-950/60'>Couple Counselling</Tab>
              <Tab className='text-green-700 hover:text-purple-950/60'>Adolescent Therapy</Tab>
              <Tab className='text-green-700 hover:text-purple-950/60'>Self-Confidence</Tab>
              <Tab className='text-green-700 hover:text-purple-950/60'>Feeling Stuck</Tab>
            </TabList>

            <TabPanel> {/* {Couple Counselling} */}
              <div className='flex justify-between md:flex-row gap-8 mt-4'>
                <div className='md:w-1/2 bg-white rounded-lg p-6 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counselling</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugiat!</p>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>

                <div className='md:w-1/2'>
                  <img src={cpc} alt="" className='w-full h-auto rounded-2xl object-cover'/>
                </div>
              </div>
            </TabPanel>

            <TabPanel> {/* {Adolescent Therapy} */}
              <div className='flex justify-between md:flex-row gap-8 mt-4'>
                <div className='md:w-1/2 bg-white rounded-lg p-6 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary mb-4'>Adolescent Therapy</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugiat!</p>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>

                <div className='md:w-1/2'>
                  <img src={adc} alt="" className='w-full h-auto rounded-2xl object-cover'/>
                </div>
              </div>
            </TabPanel>

            <TabPanel> {/* {Self-Confidence} */}
              <div className='flex justify-between md:flex-row gap-8 mt-4'>
                <div className='md:w-1/2 bg-white rounded-lg p-6 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary mb-4'>Self-Confidence</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugiat!</p>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>

                <div className='md:w-1/2'>
                  <img src={scc} alt="" className='w-full h-auto rounded-2xl object-cover'/>
                </div>
              </div>
            </TabPanel>

            <TabPanel> {/* {Feeling Stuck} */}
              <div className='flex justify-between md:flex-row gap-8 mt-4'>
                <div className='md:w-1/2 bg-white rounded-lg p-6 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugiat!</p>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>

                <div className='md:w-1/2'>
                  <img src={fsc} alt="" className='w-full h-auto rounded-2xl object-cover'/>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services