import React from 'react'
import Logo from '../components/Logo/Logo';
import Button from '../components/Button/Button';
import Nav from '../components/Nav/Nav';
import Carousel from '../components/Carousel/Carousel';
import TopPlacement from '../components/TopPlacement/TopPlacement';
import AluminiProfile from '../components/AliminiProfile/AluminiProfile';
import Evvents from '../components/Events/Evvents';
import AluminiBlog from '../components/AluminiBlog/AluminiBlog';
import ContactUs from '../components/ContactUs/ContactUs';
import Form from '../components/ContactUs/Form/Form';
import Address from '../components/ContactUs/Address/Address';
import FaceBookPage from '../components/ContactUs/FaceBookPage';
import Footer from '../components/Footer/Footer';

function AluminiPage() {
  return (
    <div>
      <div className=" flex justify-between ">
      <Logo/>
      <Button/>
      </div>

      <div>
      <Nav/>
      </div>

      <div>
      <Carousel/>
      </div>


      <div className="ml-4 min-h-full min-w-full" >
      <h5 className="mt-10 font-semibold text-2xl text-center justify-center items-center">
      Top Placements
    </h5> 
    <div className='flex'>
    <TopPlacement/>
    </div>
      </div>

      <div className='h-80 w-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mt-10' >
      <h5 className="pt-7 font-semibold text-white text-2xl text-center justify-center items-center">
        KU ALUMNI ASSOCIATION PLATFORM
      </h5>
      <div className='flex'>
      <AluminiProfile/>
      </div>
      </div>


      <div >
      <h5 className="mt-16 font-semibold text-3xl text-center justify-center items-center">
      Events
    </h5>
<div className='flex'>
<Evvents/>
</div>
      </div>

      
<div className=''>
<h5 className="mt-20 font-semibold text-3xl text-center justify-center items-center">
    Alumni Blogs
  </h5>
<div className=''>
<AluminiBlog/>
</div>
</div>


<div className='mt-10'>
<ContactUs/>
</div>

<div className='h-96 w-full flex justify-around mt-9'>
<FaceBookPage/>
<Form/>
<Address/>
</div>

<div>
<Footer/>
</div>
    </div>
  )
}

export default AluminiPage
