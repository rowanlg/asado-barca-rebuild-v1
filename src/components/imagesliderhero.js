import React from "react"
import 'prismjs/themes/prism-okaidia.css';
import bg1 from "../images/bcnbg1.jpg"
import bg2 from "../images/bcnbg2.jpg"
import bg3 from "../images/bcnbg3.jpg"
import BackgroundSlider from "react-background-slider"


const ImageSliderHero = () => {
  
  return (
    <div className='imageSliderWrapper'>
      
      
      <BackgroundSlider 
      images={[bg1, bg2, bg3]}
      duration={10} transition={1}/>

      {/*
      
      // code for title
      
      <div className="title-container"> 
        <h1>Local Ingredients,
          <br />
          World Flavours.
        </h1>
      </div>*/}
    </div>
    
  )
  
  
}

export default ImageSliderHero;