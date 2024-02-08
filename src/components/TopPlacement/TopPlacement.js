import React from 'react'
import Farhan from '../../image/uuukll.jpg';
import Banashree from '../../image/ofcigirl.jpg';
import Abhi from '../../image/boy.jpg';

function TopPlacement(props) {
const { name , status , image } = props;

  return (
    <div className='flex ml-4 '>
    <div className="flex h-60 w-96 bg-slate-200  mt-7 mx-5 shadow-xl shadow-slate-750">
    <div className="h-36 w-96  bg-violet-600  ">
      <img
        src={image}
        className="h-32 w-32 ml-32 mt-2 self-center border-2 border-slate-100  rounded-full "
        alt="..."
      />
  <div className=" h-16 w-96 mt-4 ">
      <h5 className="text-center tracking-tight text-xl font-semibold">{name}</h5>
      <p className="text-center  mt-1 font-sans text-sm opacity-55">{status}</p>
      </div>
    </div>
  </div>
    </div>
  )
}

function App (){

  return(
    <div className='flex' >

    <TopPlacement
     name=' Farhana Yashmin Rahman'
    status='AUDI AG - System Architect Model Based Systems Engineering | ASPICE '
    image={Farhan }
    />

    <TopPlacement
    name='Banashree Gogoi '
   status='PhD Candidate (Chemistry) | Graduate Research and Teaching Assistant - Arizona State University '
   image={Banashree}
   />

   <TopPlacement
   name='Abhishek Baruah, MSc Chemistry, Class of 2015 '
  status='Senior Officer, Oil India Limited, Duliajan '
  image={ Abhi}
  />


    </div>
  )
}
export default App
