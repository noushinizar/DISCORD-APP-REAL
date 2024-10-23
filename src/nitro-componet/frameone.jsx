import React, { useState } from 'react';
import Modal from './modal';

function Frame() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const payment = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="page1">
        <div className="heding-tag">
          <h1>
            Unlock a World of <br />
            Perks with Nitro
          </h1>
          <p>Plans start at only $2.99/month. Cancel anytime</p>

          <Modal/>


        </div>


        <div className="nitroocard">
          <div className="card2">
            <h1>NITRO</h1>
            <h3>BASIC</h3>
            <p>$2.99/month</p>
            <br />
            <img className='rider' src=" src\assets\nitro-images\rider.svg" alt="" />
            <ul>
              <li>
                <img
                  className="upload-icon"
                  src="    src\assets\nitro-images\icons8-upload-24.png"
                  alt="Upload Icon"
                />
                <span className='nitro-spa'>50 MB Uploads</span>
              </li>
              <li>
                <img
                  className="emoji-smile"
                  src="    src\assets\nitro-images\icons8-smile-48.png"
                  alt="Emoji Smile"
                />
                <span className='nitro-spa'>Custom emoji anywhere</span>
              </li>
              <li>
                <img
                  src="    src\assets\nitro-images\icons8-smiling-face-with-heart-24.png"
                  alt="Smiling Face with Heart"
                />
                <span className='nitro-spa'>Unlimited Super Reactions</span>
              </li>
              <li>
                <img
                  src="    src\assets\nitro-images\white-nitro.png"
                  alt="Nitro Badge"
                />
                <span className='nitro-spa'>Special Nitro badge on your profile</span>
              </li>
            </ul>
            <button className="sectionone" onClick={payment}>Subscribe</button>
          </div>
          <div className="card1">
  <h1>NITRO</h1>
  <p>
    Try Nitro for 1 month on us. <br />
  </p>
  <h4>$9.99/month.</h4> {/* Moved outside of <p> */}
  <br />
  <img className='airo-space' src="    src\assets\nitro-images\airoplne.svg" alt="" />
  <ul>
    <li>
      <img
        className="upload-icon"
        src="    src\assets\nitro-images\icons8-upload-24.png"
        alt="Upload Icon"
      />
      <span className='nitro-spa'>500 MB Uploads</span>
    </li>
    <li>
      <img
        className="emoji-smile"
        src="    src\assets\nitro-images\icons8-smile-48.png"
        alt="Emoji Smile"
      />
      <span className='nitro-spa'>Custom emoji anywhere</span>
    </li>
    <li>
      <img
        src="    src\assets\nitro-images\icons8-smiling-face-with-heart-24.png"
        alt="Smiling Face with Heart"
      />
      <span className='nitro-spa'>Unlimited Super Reactions</span>
    </li>
    <li>
      <img
        className="tv"
        src="    src\assets\nitro-images\icons8-tv-show-48.png"
        alt="HD Video Streaming"
      />
      <span className='nitro-spa'>HD video streaming</span>
    </li>
    <li>
      <img
        src="    src\assets\nitro-images\icons8-rubygems-a-package-manager-for-the-ruby-programming-language-24.png"
        alt="Server Boosts"
      />
      <span className='nitro-spa'>2 Server Boosts</span>
    </li>
    <li>
      <img
        src="    src\assets\nitro-images\icons8-name-24.png"
        alt="Custom Profile"
      />
      <span className='nitro-spa'>Custom profile and more</span>
    </li>
  </ul>
  <button className="sectiontwo" onClick={payment}>Subscribe</button>
</div>



          {isModalOpen && (
            <dialog open className="modal">
              <div className="modal-box">
              <div className='animation'>
                <button className="close-btn" onClick={closeModal}>✕</button>
                <h1>NITRO</h1>
                <p>BASIC</p>
                <img className='rider-modal' src="src\assets\nitro-images\rider.svg" alt="" />
              </div>
              <div className='choose-one'>
                  <h3>Selcet Plan  <p> payment Review</p></h3>
                  <p>choose one:</p>
              </div>
              
              <div className='choose-one-button'>
                <div className='yearly'>
                  <input className='ss' type="checkbox" name="" id=""  /><p>Yearly</p>
                </div>
                <div className='monthly'>
                <input className='ss' type="checkbox" name="" id="" /> <p>monthly</p>

                </div>
              </div>
                <div className='total-box'>
                     <div className='total'><h3>Total</h3></div> 
                     <div className='plan-year'><p>$29.99/yer</p></div> 
                </div>
                <div className='learn-more'>
                     <div className='learn-text'>
                     <div><img src="    src\assets\nitro-images\icons8-info-24.png" alt="" /> </div>    
                     <div><span>Final price and currency will be based on your selected payment method</span>.<a href="">learn more</a> </div> 
                     </div>

                     <div></div>
                </div>
                <div className='select-box'>
                   
                   <button className='select-button'>select</button>

                </div>
              </div>
            </dialog>
          )}
        </div>
      </div>
    </>
  );
}

export default Frame;
