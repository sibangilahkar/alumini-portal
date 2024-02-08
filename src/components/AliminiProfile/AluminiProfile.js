import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faGraduationCap,faLocation,faChildren } from "@fortawesome/free-solid-svg-icons";

function AluminiProfile(props) {
  const { icon , title , status  } = props;
  return (
    <div>
      <div className="h-52 w-72  ml-7  ">
        <div className="h-24 w-24 ml-24 mt-5 self-center border-2 border-slate-50 bg-white  rounded-full ">
        <FontAwesomeIcon className='text-slate-500 pt-5 pl-5 text-5xl' icon={icon}/>
        </div>
        
        <div className=" h-16 w-72  ">
          <h5 className="text-center mt-2 tracking-tight text-white font-semibold">
            {title}
          </h5>
          <p className=" text-center  mt-1 font-sans  text-white text-sm ">
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}

function App(){

  return(
<div className="flex">

<AluminiProfile
icon={faUser}
title='YOUR ALUMNI PROFILE'
status='Create & Complete your Alumni Profile & remain connected with all opportunities matching your interest'
/>

<AluminiProfile
icon={faGraduationCap}
title='YOUR BATCHMATES'
status='View Our Exclusive Batchmates Directory to know about whereabouts of your batchmates'
/>

<AluminiProfile
icon={faLocation}
title='ALUMNI IN YOUR CITY'
status='Find Aumni living in your city & be a part of meetups in your cities'
/>

<AluminiProfile
icon={faChildren}
title='ALUMNI DIRECTORY'
status='Explore Complete Alumni Directory & connect with alumni with your Interests & Domain'
/>


</div>
  );
    
}

export default App
