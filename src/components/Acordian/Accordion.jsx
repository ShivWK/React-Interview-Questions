import { useState } from "react";
import AccordionCard from "./AccordionCard";
import { data } from "./AccordionData";

const Accordion = () => {
  const [multiple, setMultiple] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <main>
      <h1>Accordion</h1>
      <button
        onClick={() => setMultiple(!multiple)}
        className="btn"
        style={{ backgroundColor: multiple ? "green" : "gray" }}
        >Set Multiple</button>
      <section>
        {
          data && data.length > 0 ?
            data.map((data, index) => <AccordionCard key={index} index={index} multiple={multiple} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} data={data} />)
            : <div>
              <p>Sorry no data Available</p>
            </div>
        }
      </section>
    </main>
  )
}

export default Accordion