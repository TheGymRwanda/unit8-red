/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect, createRef } from "react";
import Wrapper from "../../layout/Wrapper";
import Canvas from "../../ui/Canvas";
import imagesUrl from "../../../data/galleryImages";

export default function Gallery() {
  let [coordinates, setCoordinates] = useState([]);
  let [images, setImages] = useState([]);
  let [dimension, setDimension] = useState(null);
  let [mobileDimension, setMobileDimension] = useState(null);
  let container = useRef();
  let mobileContainer = useRef();
  useEffect(() => {
    setDimension(container.current.clientWidth);
    setMobileDimension(mobileContainer.current.clientWidth);
    setImages((refs) =>
      Array(imagesUrl.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, []);
  const handleMouse = (event) => {
    const randomNumber = Math.floor(Math.random() * images.length);
    if (coordinates.length < 1) {
      let x = event.evt.offsetX - images[randomNumber].current.clientWidth / 2;
      let y = event.evt.offsetY - images[randomNumber].current.clientHeight / 2;
      if (x < 0) {
        x = 2;
      } else if (
        x + images[randomNumber].current.clientWidth >=
        event.currentTarget.attrs.container.clientWidth
      ) {
        x =
          event.currentTarget.attrs.container.clientWidth -
          images[randomNumber].current.clientWidth;
      }
      if (y < 0) {
        y = 0;
      } else if (
        y + images[randomNumber].current.clientHeight >=
        event.currentTarget.attrs.container.clientHeight
      ) {
        y =
          event.currentTarget.attrs.container.clientHeight -
          images[randomNumber].current.clientHeight;
      }
      setCoordinates([
        ...coordinates,
        {
          x,
          y,
          img: images[randomNumber],
          w: images[randomNumber].current.clientWidth,
          h: images[randomNumber].current.clientHeight,
          first: true,
        },
      ]);
    } else {
      if (
        Math.abs(
          event.evt.offsetX -
            images[randomNumber].current.clientWidth / 2 -
            coordinates[coordinates.length - 1].x
        ) > 100 ||
        Math.abs(
          event.evt.offsetY -
            images[randomNumber].current.clientHeight / 2 -
            coordinates[coordinates.length - 1].y
        ) > 100
      ) {
        let x =
          event.evt.offsetX - images[randomNumber].current.clientWidth / 2;
        let y =
          event.evt.offsetY - images[randomNumber].current.clientHeight / 2;
        if (x < 0) {
          x = 2;
        } else if (
          x + images[randomNumber].current.clientWidth >=
          event.currentTarget.attrs.container.clientWidth 
        ) {
          x =
            event.currentTarget.attrs.container.clientWidth -
            images[randomNumber].current.clientWidth;
        }
        if (y < 0) {
          y = 0;
        } else if (
          y + images[randomNumber].current.clientHeight >=
          event.currentTarget.attrs.container.clientHeight
        ) {
          y =
            event.currentTarget.attrs.container.clientHeight -
            images[randomNumber].current.clientHeight;
        }
        setCoordinates([
          ...coordinates.slice(0, coordinates.length - 1),
          { ...coordinates[coordinates.length - 1], first: false, img: null },
          {
            x,
            y,
            img: images[randomNumber],
            w: images[randomNumber].current.clientWidth,
            h: images[randomNumber].current.clientHeight,
            first: true,
          },
        ]);
      }
    }
  };
  return (
    <Wrapper>
    <Canvas
      container={container}
      dimension={dimension}
      handleMouse={handleMouse}
      coordinates={coordinates}
      mobileContainer={mobileContainer}
      mobileDimension={mobileDimension}
     />
      <div className="h-0 overflow-hidden">
        {imagesUrl.map((url, index) => {
          return (
            <img
              ref={images[index]}
              className="max-h-72"
              src={url}
              key={index}
              alt=""
            />
          );
        })}
      </div>
    </Wrapper>
  );
}
