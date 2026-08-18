
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { asset } from '../assets/Assets';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay';

const MySwiperJs = () => {
  const swipeImg = [
    { id: 1, src: asset.codingimg1 },
    { id: 2, src: asset.codingimg2 },
    { id: 3, src: asset.codingimg3 },
    { id: 4, src: asset.codingimg4 },
    { id: 5, src: asset.codingimg5 },
    { id: 6, src: asset.codingimg6 },
    // { id: 7, src: asset.react1 },
    { id: 8, src: asset.react2 },
    { id: 9, src: asset.react3 },
    { id: 10, src: asset.react4 }
  ]

  return (





    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 3000,
        // disableOnInteraction:false
      }}

      effect="fade"


      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='flex justify-center items-center  h-1/2  w-full px-0 m-auto object-cover'>

      {
        swipeImg.map(({ id, src }) => (
          <SwiperSlide key={id}> <img src={src} alt="" className='amic w-full h-1/2 md:1/3' />  </SwiperSlide>

        ))
      }


    </Swiper>

    //         git remote add origin https://github.com/itzdonwise/don-amicable-react-portfolio.git
    // git branch -M main
    // git push -u origin main

  );

}

export default MySwiperJs
