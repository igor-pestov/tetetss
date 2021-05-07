import React, { useState, useRef, useEffect } from 'react';
import { Slider as MUISlider } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import plus from '../img/Plus.svg';
import arrow from '../img/Arrow.svg';
import xIcon from '../img/x.svg';
import './PhotoSliderv3.scss';

const photos = [
  '/img/Photos/2019/20190606__EGO5327.png',
  '/img/Photos/2019/20190606_BEL_1957.png',
  '/img/Photos/2019/20190606_LIVE6228.png',
  '/img/Photos/2019/20190607__EGR8453.png',
  '/img/Photos/2019/20190607__EGR8562.png',
  '',
];

const PhotoButton = ({e, i, setOpen, setIndex}) => {
  const [display, setDisplay] = useState(false);

  const handleImgClick = (event, i) => {
    setTimeout(() => setDisplay(false), 5000);
    setDisplay(true);
  }

  const handlePlusClick = (index) => {
    setOpen(true);
    setIndex(index);
  }

  return (
    <div 
      key={`photo${i}`} 
      onClick={(event) => handleImgClick(event, i)} 
      className='photo-slider_slide'
    >
      <img  src={e} alt='' />
      <div className='photo-button' 
        style={{display: !display? 'none' : 'flex'}}
        onClick={() => handlePlusClick(i)}  
      >
          <img
            src={plus} 
            alt='' 
          />
      </div>
    </div>
  )
}

const PhotosModal = ({ open, setOpen, photos, index, setIndex }) => {
  const handleClick = (e, dest) => {
    dest === 'back'
    ? index !== 0 && setIndex(index - 1)
    : index < photos.length - 2 && setIndex(index + 1)
  }

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div
        onMouseDown={(e) => e.preventDefault()} 
        className='photos-modal'
      >
        <div className='photos-modal_header'>
          <h2>2019</h2>
          <img src={xIcon} alt='' onClick={() => setOpen(false)} />
        </div>
        <div className='photos-modal_current'>
          <button onClick={(e) => handleClick(e, 'back')}>
            <p class='arrow'></p>
          </button>
          <img src={photos[index]} alt='' />
          <button
            onClick={(e) => handleClick(e, '')}
          >
            <p class='arrow'></p>
          </button>
        </div>
        <div className='photos-modal_all-photos'>
          {photos.map((e, i) => (
            <img
              className={`photos-modal_menu ${index === i && 'active'}`}
              src={e}
              alt=''
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

const PhotoSliderv3 = () => {
  const ref = useRef();
  const container = useRef();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const maxScroll = () => {
      if(container) setMaxScroll(container.current.scrollWidth - container.current.clientWidth)
    }
    if (container) maxScroll();
    window.addEventListener('resize', maxScroll);
    return (
      window.removeEventListener('resize', maxScroll)
    );
  }, []);

 
  const handleScroll = () => {
    setScroll(ref.current.scrollLeft);
  }

  // const handleWheel = (e) => {
  //   e.preventDefault();
  //   ref.current.scrollTo((ref.current.scrollLeft + e.deltaY*2 ), 0);
  // }

  const handleSlider = (value) => {
    ref.current.scrollTo(value, 0);
  }

  const handleMouse = (e) => {
    if (e.buttons) ref.current.scrollTo((ref.current.scrollLeft + (e.movementX * -1) * 2 ), 0);
  }

  return (
    <div className='slider-wrapper'>
      <div
        onMouseDown={e => e.preventDefault()}
        onMouseMove={e => handleMouse(e)}
        className='slider-containerv3' 
        ref={ref} 
        onScroll={() => handleScroll()}
        // onWheel={e => handleWheel(e)}
      >
        <div
          ref={container}
          className='photosliderv3'
        >
          {
            photos.map((e, i) => {
              return (
                <PhotoButton
                  e={e} 
                  i={i}
                  setOpen={setOpen}
                  setIndex={setIndex}
                />
              );
            })
          }
        </div>
      </div>
      <MUISlider
        className='photo-slider_slider'
        max={maxScroll}
        value={scroll}
        onChange={(e, value) => handleSlider(value)}
      />
      <PhotosModal
        open={open}
        setOpen={setOpen}
        photos={photos}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
}

export default PhotoSliderv3;