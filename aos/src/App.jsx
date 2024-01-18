import AOS from 'aos';
import 'aos/dist/aos.css';
import imageOne from './assets/imageOne.png';
import imageTwo from './assets/imageTwo.png';
import imageThree from './assets/imageThree.png';
import loader from './assets/loader.svg';

import { useState } from "react"
import { useEffect } from "react"
function App() {

  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false)
    }, 3000)
  });

  AOS.init();
  return (
      <div>
        {
        showImage ? (
          <div className="loader">
            <img id='loader' src={loader} alt="" />
          </div>
          ) : (
              <main className="section">
                <div className='child' data-aos="fade-right" data-aos-duration="3000">
                  <img src={imageOne} alt="imageOne" />
                </div>
                <div className='child' data-aos="fade-up" data-aos-duration="3000">
                  <img src={imageTwo} alt="imageOne" />
                </div>
                <div className='child' data-aos="fade-left" data-aos-duration="3000">
                  <img src={imageThree} alt="imageOne" />
                </div>
              </main>
          )
        }
      </div>
  )
}

export default App;