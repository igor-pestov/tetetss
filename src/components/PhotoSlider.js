import { Modal, Slider } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import plus from '../img/Plus.svg';
import arrow from '../img/Arrow.svg';
import xIcon from '../img/x.svg';
import './PhotoSlider.scss';

const PhotoButton = ({ e, i, imgRef, handleClick, setOpen, setIndex }) => {
  const [display, setDisplay] = useState(false);

  const handleImgClick = (event, i) => {
    setTimeout(() => setDisplay(false), 5000);
    setDisplay(true);
    handleClick(event, i);
  };

  const handlePlusClick = (index) => {
    setOpen(true);
    setIndex(index);
  };

  return (
    <div
      key={`photo${i}`}
      ref={imgRef}
      onClick={(event) => handleImgClick(event, i)}
      className='photo-slider_container'
    >
      <img src={e} alt='' />
      <div
        className='photo-button'
        style={{ display: !display ? 'none' : 'flex' }}
        onClick={() => handlePlusClick(i)}
      >
        <img src={plus} alt='' />
      </div>
    </div>
  );
};

const PhotosModal = ({ open, setOpen, photos, index, setIndex }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className='photos-modal'>
        <div className='photos-modal_header'>
          <h2>2019</h2>
          <img src={xIcon} alt='' onClick={() => setOpen(false)} />
        </div>
        <div className='photos-modal_current'>
          <button onClick={() => index !== 0 && setIndex(index - 1)}>
            <p class='arrow'></p>
          </button>
          <img src={photos[index]} alt='' />
          <button
            onClick={() => index < photos.length - 1 && setIndex(index + 1)}
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

const PhotoSlider = () => {
  const ref = useRef();
  const imgRef = useRef();
  const [xPos, setXPos] = useState(0);
  const [sliderMax, setMax] = useState(0);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const photos = [
    '/img/Photos/2019/20190606__EGO5327.png',
    '/img/Photos/2019/20190606_BEL_1957.png',
    '/img/Photos/2019/20190606_LIVE6228.png',
    '/img/Photos/2019/20190607__EGR8453.png',
    '/img/Photos/2019/20190607__EGR8562.png',
  ];

  useEffect(() => {
    setMax(imgRef.current.offsetWidth * photos.length);
  }, [photos.length]);

  let interval = '';

  const handleClick = (event, index) => {
    clearInterval(interval);
    const width = imgRef.current.offsetWidth + 10;
    let xPosCopy = xPos;
    if (xPosCopy > 0) {
      setXPos(0);
      xPosCopy = 0;
    }

    const clickMove = () => {
      if (xPosCopy > 0) {
        setXPos(0);
        clearInterval(interval);
      }
      if (Math.abs(xPosCopy) !== width * index) {
        if (Math.abs(xPosCopy) % 10 !== 0) {
          Math.abs(xPosCopy) > width * index
            ? setXPos((xPosCopy += 1))
            : setXPos((xPosCopy -= 1));
        } else {
          Math.abs(xPosCopy) > width * index
            ? setXPos((xPosCopy += 16))
            : setXPos((xPosCopy -= 16));
        }
      } else {
        clearInterval(interval);
      }
    };

    interval = setInterval(clickMove, 1);
  };

  return (
    <div className='photo-slider' ref={ref}>
      <div className='photo-slider_content' style={{ left: `${xPos}px` }}>
        {photos.map((e, i) => {
          return (
            <PhotoButton
              e={e}
              i={i}
              imgRef={imgRef}
              handleClick={handleClick}
              setOpen={setOpen}
              setIndex={setIndex}
            />
          );
        })}
      </div>
      <Slider
        className='photo-slider_slider'
        onChange={(e, v) => setXPos(v * -1)}
        value={Math.abs(xPos)}
        max={sliderMax}
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
};

export default PhotoSlider;
