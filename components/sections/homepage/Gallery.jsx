/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";
import Wrapper from "../../layout/Wrapper";
import { Stage, Layer, Image, Rect } from "react-konva";

export default function Gallery() {
  let [coods, setCoods] = useState([]);
  let images = [useRef(), useRef(), useRef()];
  let [dimension, setDimension] = useState(null);
  let [mobileDimension, setMobileDimension] = useState(null);
  let container = useRef();
  let mobileContainer = useRef();
  useEffect(() => {
    setDimension(container.current.clientWidth)
    setMobileDimension(mobileContainer.current.clientWidth)

  }, [])
  // const handleMouse = useCallback(
  const handleMouse = (event) => {
    const randomNumber = Math.floor(Math.random() * images.length)
    if (coods.length < 1) {
      let x = event.evt.offsetX -
        images[randomNumber].current.clientWidth / 2
      let y = event.evt.offsetY -
        images[randomNumber].current.clientHeight / 2;
      if (x < 0) {
        x = 2
      }
      else if (x + images[randomNumber].current.clientWidth >= event.currentTarget.attrs.container.clientWidth) {
        x = event.currentTarget.attrs.container.clientWidth - images[randomNumber].current.clientWidth;
      }
      if (y < 0) {
        y = 0;
      } else if (y + images[randomNumber].current.clientHeight >= event.currentTarget.attrs.container.clientHeight) {
        y = event.currentTarget.attrs.container.clientHeight - images[randomNumber].current.clientHeight;
      }
      setCoods([
        ...coods,
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
          (images[randomNumber].current.clientWidth / 2) -
          coods[coods.length - 1].x
        ) > 100 ||
        Math.abs(
          event.evt.offsetY -
          images[randomNumber].current.clientHeight / 2 -
          coods[coods.length - 1].y
        ) > 100
      ) {
        let x = event.evt.offsetX -
          images[randomNumber].current.clientWidth / 2
        let y = event.evt.offsetY -
          images[randomNumber].current.clientHeight / 2;
        if (x < 0) {
          x = 2
        } else if (x + images[randomNumber].current.clientWidth >= event.currentTarget.attrs.container.clientWidth) {
          x = event.currentTarget.attrs.container.clientWidth - images[randomNumber].current.clientWidth;
        }
        if (y < 0) {
          y = 0;
        } else if (y + images[randomNumber].current.clientHeight >= event.currentTarget.attrs.container.clientHeight) {
          y = event.currentTarget.attrs.container.clientHeight - images[randomNumber].current.clientHeight;
        }
        setCoods([
          ...coods.slice(0, coods.length - 1),
          { ...coods[coods.length - 1], first: false, img: null },
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
  }
  return (
    <Wrapper>
      <div ref={container} className="hidden lg:block">
        {!!dimension && (
          <Stage width={dimension} height={856} onMouseMove={handleMouse}>
            <Layer>
              {coods.map((el, index) => {
                return el.first ? (
                  <Image
                    key={index}
                    image={el.img.current}
                    alt=" "
                    x={el.x}
                    y={el.y}
                    width={el.w}
                    height={el.h}
                  />
                ) : (
                  <Rect
                    key={index}
                    fill="#E4E4E4"
                    x={el.x}
                    y={el.y}
                    width={el.w}
                    height={el.h}
                  />
                );
              })}
            </Layer>
          </Stage>
        )}
      </div>
      <div ref={mobileContainer} className="block lg:hidden">
        {!!mobileDimension && (
          <Stage width={mobileDimension} height={856} onClick={handleMouse}>
            <Layer>
              {coods.map((el, index) => {
                return el.first ? (
                  <Image
                    key={index}
                    image={el.img.current}
                    alt=" "
                    x={el.x}
                    y={el.y}
                    width={el.w}
                    height={el.h}
                  />
                ) : (
                  <Rect
                    key={index}
                    fill="#E4E4E4"
                    x={el.x}
                    y={el.y}
                    width={el.w}
                    height={el.h}
                  />
                );
              })}
            </Layer>
          </Stage>
        )}
      </div>

      <div className="h-0 overflow-hidden">
        <img
          ref={images[0]}
          className="max-h-72"
          src="/assets/images/gallery-1.webp"
          alt=""
        />
        <img
          src="/assets/images/gallery-2.webp"
          className="max-h-72"
          ref={images[1]}
          alt=""
        />
        <img
          src="/assets/images/gallery-3.webp"
          className="max-h-72"
          ref={images[2]}
          alt=""
        />
      </div>
    </Wrapper>
  );
}
