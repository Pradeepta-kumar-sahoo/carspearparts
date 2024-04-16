import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
const Couraisol = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <>
      <div className='w-full h-96 my-20  '>
        <div className='my-10' >
          <h1 className='text-3xl font-bold'>Current <span className='text-sky-400'>offer <FontAwesomeIcon icon={faLessThan}  />  <FontAwesomeIcon icon={faGreaterThan} />  </span></h1>
        </div>
      <ReactSimplyCarousel
      className= "w-full"
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 565, height: 300, background: '#ff80ed' }}>
          <img className = " w-full" src='https://www.shutterstock.com/image-vector/tire-car-advertisement-poster-black-260nw-2028988058.jpg'></img>
        </div>
        <div style={{ width: 565, height: 300, background: '#065535' }}>
          <img  className = "w-full" src='https://5.imimg.com/data5/SELLER/Default/2023/8/334357809/LG/JU/RF/193772549/maruti-suzuki-automotive-spare-parts-500x500.jpeg'></img>
        </div>
        <div style={{ width: 565, height: 300, background: '#000000' }}>
          <img  className = "w-full"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlw2pxUUa_DOmWV3Yo6evJPn-HgsSdLHijw&usqp=CAU'></img>
        </div>
        <div style={{ width: 565, height: 300, background: '#133337' }}>
          <img className = "w-full"src='https://i.pinimg.com/736x/37/be/e4/37bee469bd61869738e54150ad80b3a8.jpg'></img>
        </div>
        
        
      </ReactSimplyCarousel>
    </div>
    </>
  );
};

export default Couraisol;
