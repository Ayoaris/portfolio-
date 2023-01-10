import React from 'react'
import { InfoStyle } from './infoStyles';

function Info() {

  return (
      
    <InfoStyle>
              
      <div className="Hero-main">
        <p className="Intro"> Hy, my name is</p>
        <h3 className="name">Samuel Ayodeji Soyebo.</h3>
        <h3 className="build">I build for the universe</h3>
        <p className="about">
          I'm a Software Engineer specialized in developing scalable and quality
          products for the community. Currently, I'm focused on providing
          solutions, building accessible, human-centered products at{" "}
          <a href="https://www.ubagroup.com/">UBA Group.</a>
        </p>
        <a href="#work" className='hero-button'>View My work</a>
      </div>
    </InfoStyle>
    
  );
}

export default Info;
