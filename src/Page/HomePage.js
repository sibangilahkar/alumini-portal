import Logo from '../image/logo.jpg';
import Studentpic from '../image/shutterstock_1382310047.jpg';

function HomePage() {
    return (
        <div>
        
        <div  className=" flex justify-between ">
        <div className="flex h-20 w-32 my-2 ml-20 "><img className='' src={Logo} /></div>
      <button className="flex h-10 w-40 mt-9 mr-16  font-medium justify-center items-center text-white rounded bg-blue-500 ">SIGN UP / LOGIN</button>
        </div>
     <nav className="h-14 w-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
     <ul className='flex inline-block gap-12  pl-72 text-white pt-4  font-medium '>
     <li>HOME</li>
     <li>INFO BOARD</li>
     <li>BATCHMATES</li>
     <li>ABOUT US</li>
     <li>GALLERY</li>
     <li>CONTACT</li>
     </ul>
      </nav>

      <div className=" flex h-96 w-full ">
      <img className='w-full' src={Studentpic} />
      </div>
        
<div>
<h5 className='font-medium justify-center items-center'>Top Placements</h5>

</div>



        </div>
  
    

   

  )
}

export default HomePage
