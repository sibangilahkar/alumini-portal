import React from 'react'
import resolution from '../../image/reone.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays,faEye } from '@fortawesome/free-solid-svg-icons'
import students from '../../image/shutterstock_1382310047.jpg';




function AluminiBlog(props) {
  const { date, title, author, content, views, image } = props;

  return (
    <div>
      <div className="shadow-xl shadow-slate-400 w-96 mt-14 ml-10">
        <img src={image} className="h-40 w-96" alt="..." />
        <div className="bg-white h-52 w-96">
          <p className="opacity-50 pl-7 pt-4 text-sm italic"><FontAwesomeIcon className='pr-2' icon={faCalendarDays} /> {date}</p>
          <h6 className="text-md rounded text-black opacity-70 pl-7 pt-4 font-serif">{title} by {author}</h6>
          <p className="opacity-50 pl-7 text-sm pt-2">{content}</p>
          <FontAwesomeIcon className='opacity-50 pl-7 text-xs' icon={faEye} /> {views}
          <button className="h-10 w-24 ml-52 mt-3 font-serif opacity-70 text-sm justify-center items-center text-black rounded bg-slate-100">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className='flex'>
      <AluminiBlog
        date="Jan 16, 2023 - 03:00 PM"
        title="New Year Resolution A.r (A.RAIHAN)"
       
        content="Areas in which you are most likely to make a Resolution Resolution in words Get organised and live life to the..."
        views="100" 
        image={resolution}
      />
      <AluminiBlog
        date="Jan 16, 2023 - 03:00 PM"
        title="New Year Resolution by SUBRATA DUTTA"
    
        content="SUBRATA KUMAR DUTTA Areas in which you are most likely to make a Resolution Resolution in words High earning, a new car and happy time with the..."
        views="200" 
        image={resolution} 
      />

      <AluminiBlog
        date=" Jun 07, 2023"
        title="Alumni Spotlight: Kakuli Lahkar"
        
        content="Kakuli Lahkar   Your name Kakuli Lahkar Your current city, country Bangalore, India Your current designation, company Inside Sales..."
        views="200" 
        image={students} 
      />
     
    </div>
  );
}

export default App;

