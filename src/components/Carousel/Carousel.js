import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Convocation from '../../image/Graduation_StudentsGroup_Smiling_Outdoor_GettyImages-907837926.jpg';
import Alumini from '../../image/aluminiposter.jpg';
import Student from '../../image/poster.jpg';
import Culture from '../../image/cultural-activities_6-2.jpg';
import Activities from '../../image/activities.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      <div >
        <img className='w-full h-96' src={Convocation} alt="Slide 1" />
      </div>
     
      <div>
        <img className='w-full h-96'  src={Culture} alt="Slide 3" />
      </div>


      <div>
        <img className='w-full h-96'  src={Activities} alt="Slide 3" />
      </div>

      <div>
      <img className='w-full h-96' src={Alumini} alt="Slide 2" />
      </div>

      <div>
        <img className='w-full h-96'  src={Student} alt="Slide 3" />
      </div>
      
    </Slider>
  );
};

export default Carousel;
