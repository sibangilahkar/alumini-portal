import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays,faLocation } from '@fortawesome/free-solid-svg-icons'
import Eventone from '../../image/kol.jpg';
import Eventwo from '../../image/poster.jpg';
import Event3 from '../../image/aluminiposter.jpg';



function Events(props) {
  const { eventName, eventDate, eventLocation, eventStatus, image } = props;

  return (
    <div>
      <div className="shadow-xl shadow-slate-400 w-96 mt-10 ml-12">
        <img src={image} className="h-56 w-96" alt="..." />
        <div className="bg-white h-60 w-96">
          <h5 className="font-semibold text-lg rounded text-black opacity-80 pl-5 pt-3">{eventName}</h5>
          <div className='h-6 w-20 ml-5 mt-4 bg-gray-500 opacity-30 rounded-full text-white text-xs text-center pt-1'>{eventStatus}</div>
          <p className="opacity-50 pl-7 pt-4 text-sm"><FontAwesomeIcon className='pr-2' icon={faCalendarDays} /> {eventDate}</p>
          <p className="opacity-50 pl-7 text-sm pt-1"><FontAwesomeIcon className='pr-2' icon={faLocation} />{eventLocation}</p>
          <button className="flex h-10 w-20 mt-3 ml-7 font-serif text-white font-medium justify-center items-center text-white rounded bg-blue-700">
            View
          </button>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className='flex'>
    
      <Events
        eventName="Kommunique Alumni Meet - 16th January 2022"
        eventDate="Jan 16, 2023 - 03:00 PM"
        eventLocation="Campus, Jorhat"
        eventStatus="Past Event"
        image={Eventone} 
      />
      <Events
        eventName="Virtual Alumni Meet - School of Social Sciences & School of Computing Sciences"
        eventDate="Oct 30, 2021 : 06:30 PM - 07:00 PM"
        eventLocation="Online event"
        eventStatus="Past Event"
        image={Eventwo} 
      />



      <Events
        eventName="Virtual Alumni Meet - School of Business"
        eventDate="Oct 30, 2021 - 07:00 PM"
        eventLocation="Online event"
        eventStatus="Past Event"
        image={Event3} 
      />
    </div>
  );
}

export default App;
