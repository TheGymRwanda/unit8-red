import { useRef, useState } from "react";
import Wrapper from "../../layout/Wrapper";

export default function Gallery() {
  let [prev, setPrev] = useState(null);
  let [url, setUrl] = useState(0);
  let [zIndex, setZIndex] = useState(0);
  let container = useRef()
  const imgArr = ["/assets/images/gallery-1.webp","/assets/images/gallery-2.webp","/assets/images/gallery-3.webp"]
  function handleEvent(event) {
    const info = container.current.getBoundingClientRect();
    const firstY = event.clientY - info.top;
    const firstX = event.clientX - info.left;

    if (!prev) {
      const img = document.createElement("img");

      img.src = imgArr[url];
      if (url === imgArr.length - 1) {
        setUrl(0)
      } else {
        setUrl(url + 1)
      }
      img.className = "gallery-img"
      setPrev([firstX, firstY]);
      img.style.top = firstY + "px";
      img.style.left = firstX + "px";
      img.alt=zIndex
      img.style.zIndex = zIndex;
      console.log(event.clientY - info.top, event.clientX - info.left);
      container.current.appendChild(img);
    } else {
      if (Math.abs(firstX - prev[0]) > 62 || Math.abs(firstY - prev[1]) > 62) {
        let img = document.createElement("img");
        img.className = "gallery-img"
        img.src = imgArr[url];
        if (url === imgArr.length - 1) {
            setUrl(0)
          } else {
            setUrl(url + 1)
          }
        console.log("all time", firstX - prev[0], firstY - prev[1]);
        img.style.top = firstY + "px";
        img.style.left = firstX + "px";
        img.alt=zIndex
        setZIndex(zIndex + 1);
        img.style.zIndex = zIndex;
        console.log(event.clientY - info.top, event.clientX - info.left);
        container.current.appendChild(img);
        setPrev([firstX, firstY]);
      }
    }
  }
  return (
    <Wrapper>
      <div
        className="h-214.19 flex items-center justify-center relative  overflow-hidden"
        onMouseMove={handleEvent}
        ref={container}
      >
        <p>Tap anywhere to see more of us</p>
      </div>
    </Wrapper>
  );
}
