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

  const createEventHandler = (distance) => {
    return (event) => {
      const randomNumber = Math.floor(Math.random() * images.length);
      if (coordinates.length < 1) {
        let x = event.evt.offsetX;
        let y = event.evt.offsetY;
        setCoordinates([
          ...coordinates,
          {
            x,
            y,
            img: images[randomNumber],
            w: images[randomNumber].current.clientWidth,
            h: images[randomNumber].current.clientHeight,
            containerWidth: event.currentTarget.attrs.container.clientWidth,
            containerHeight: event.currentTarget.attrs.container.clientHeight,
            first: true,
          },
        ]);
      } else {
        if (
          Math.abs(event.evt.offsetX - coordinates[coordinates.length - 1].x) >
            distance ||
          Math.abs(event.evt.offsetY - coordinates[coordinates.length - 1].y) >
            distance
        ) {
          let x = event.evt.offsetX;
          let y = event.evt.offsetY;

          setCoordinates([
            ...coordinates.slice(0, coordinates.length - 1),
            { ...coordinates[coordinates.length - 1], first: false, img: null },
            {
              x,
              y,
              img: images[randomNumber],
              w: images[randomNumber].current.clientWidth,
              h: images[randomNumber].current.clientHeight,
              containerWidth: event.currentTarget.attrs.container.clientWidth,
              containerHeight: event.currentTarget.attrs.container.clientHeight,
              first: true,
            },
          ]);
        }
      }
    };
  };

  return (
    <Wrapper>
      <Canvas
        container={container}
        dimension={dimension}
        createEventHandler={createEventHandler}
        coordinates={coordinates}
        mobileContainer={mobileContainer}
        mobileDimension={mobileDimension}
      />
      <div className="h-0 overflow-hidden">
        {/* disabled nextjs Image component eslint to use the normal html tag */}
        {imagesUrl.map((url, index) => {
          return (
            <img
              ref={images[index]}
              className="max-h-60 xl:max-h-72"
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
