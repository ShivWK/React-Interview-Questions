import { useState, useEffect, useRef } from "react";

const AccordionCard = ({ multiple, currentIndex, setCurrentIndex, index, data }) => {
  const [open, setOpen] = useState(false);
  const [ paraHeight, setParaHeight ] = useState(0);
  const descriptionRef = useRef(null)

  useEffect(() => {
    if (!multiple) {
      setOpen(false);
    }
  }, [multiple]);

  useEffect(() => {
    if (descriptionRef.current) {
      const height = descriptionRef.current.offsetHeight;
      setParaHeight(height);
    }
  }, []);

  const descriptionClickHandler = () => {
    if (!multiple) {
      if (currentIndex === index) {
        setCurrentIndex(null);
      } else {
        setCurrentIndex(index);
      }
    } else {
      setOpen(!open)
    }
  }

  return (
    <div>
      <div
        onClick={descriptionClickHandler}
      >
        <p className="heading">{data.question}</p>
      </div>
      <div className="description"
        style={{
          height: multiple ? open && `${paraHeight + 30}px` : currentIndex === index && `${paraHeight + 30}px`,
          padding: multiple ? open && `10px` : currentIndex === index && `10px`
        }}
      >
        <p ref={descriptionRef}>{data.description}</p>
      </div>
    </div>
  )
}

export default AccordionCard