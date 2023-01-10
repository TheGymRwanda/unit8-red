import { Stage, Layer, Image, Rect, Text } from "react-konva";
export default function Canvas({
  coordinates,
  dimension,
  createEventHandler,
  container,
  mobileContainer,
  mobileDimension,
}) {
  const getX = (x, width, container) => {
    let newValue = x - width / 2;
    if (newValue < 0) {
      newValue = 0;
    } else if (x + width >= container) {
      newValue = container - width;
    }
    return newValue;
  };
  const getY = (y, height, container) => {
    let newValue = y - height / 2;
    if (y < 0) {
      newValue = 0;
    } else if (y + height >= container) {
      newValue = container - height;
    }
    return newValue;
  };
  return (
    <>
      <div ref={container} className="hidden lg:block mt-17.76">
        {!!dimension && (
          <Stage width={dimension} height={856} onMouseMove={createEventHandler(100)}>
            <Layer>
              {coordinates.map((el, index) => {
                return el.first ? (
                  <Image
                    key={index}
                    image={el.img.current}
                    alt=" "
                    x={getX(el.x, el.w, el.containerWidth)}
                    y={getX(el.y, el.h, el.containerHeight)}
                    width={el.w}
                    height={el.h}
                  />
                ) : (
                  <Rect
                    key={index}
                    fill="#E4E4E4"
                    x={getX(el.x, el.w, el.containerWidth)}
                    y={getX(el.y, el.h, el.containerHeight)}
                    width={el.w}
                    height={el.h}
                  />
                );
              })}
            </Layer>
          </Stage>
        )}
      </div>
      <div ref={mobileContainer} className="relative block lg:hidden mt-17.76">
        <div className="absolute flex items-center justify-center w-full h-full"><p className="text-grey">Tap anywhere to see more of us</p></div>
        {!!mobileDimension && (
          <Stage width={mobileDimension} height={856} onMouseMove={createEventHandler(3)} preventDefault={false}>
          <Layer>
              {coordinates.map((el, index) => {
                return el.first ? (
                  <Image
                    key={index}
                    image={el.img.current}
                    alt=" "
                    x={getX(el.x, el.w, el.containerWidth)}
                    y={getX(el.y, el.h, el.containerHeight)}
                    width={el.w}
                    height={el.h}
                    preventDefault={false}
                  />
                ) : (
                  <Rect
                    key={index}
                    fill="#E4E4E4"
                    x={getX(el.x, el.w, el.containerWidth)}
                    y={getX(el.y, el.h, el.containerHeight)}
                    width={el.w}
                    height={el.h}
                    preventDefault={false}
                  />
                );
              })}
            </Layer>
          </Stage>
        )}
      </div>
    </>
  );
}
