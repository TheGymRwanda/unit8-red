import { Stage, Layer, Image, Rect } from "react-konva";
export default function Canvas({
  coordinates,
  dimension,
  handleMouse,
  container,
  mobileContainer,
  mobileDimension,
}) {
  return (
    <>
      <div ref={container} className="hidden lg:block">
        {!!dimension && (
          <Stage width={dimension} height={856} onMouseMove={handleMouse}>
            <Layer>
              {coordinates.map((el, index) => {
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
              {coordinates.map((el, index) => {
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
    </>
  );
}
