import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { testimonialsData } from "../constants/data";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === testimonialsData.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < testimonialsData.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="flex justify-center items-center max-sm:py-10 py-20">
        <motion.div
        whileHover={{ scale: 1.1 }}
        className="bg-black text-white p-2 rounded-full w-12 h-12 flex justify-center items-center max-md:hidden"
        onClick={() => setImgIndex(imgIndex === 0 ? testimonialsData.length - 1 : imgIndex - 1)}
        >
        <FaArrowLeft />
        </motion.div>
        <div className="max-sm:max-w-xs max-lg:max-w-xl max-w-2xl overflow-hidden" >
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x: dragX }}
                animate={{ translateX: `-${imgIndex * 100}%` }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex cursor-grab items-center active:cursor-grabbing"
            >
                <Images imgIndex={imgIndex} />
            </motion.div>

            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        </div>
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-black text-white p-2 rounded-full w-12 h-12 flex justify-center items-center max-md:hidden"
            onClick={() => setImgIndex((imgIndex + 1) % testimonialsData.length)}
        >
            <FaArrowRight />
        </motion.div>
    </div>
  );
};

export default Carousel;

const Images = ({ imgIndex }) => {
  const { text, salutation, name, position, stars } = testimonialsData[imgIndex];
  return (
    <>
      {testimonialsData.map((testimonial, idx) => (
        <div
          key={idx}
          className="w-full flex-none p-4 flex justify-center"
        >
          <div className="bg-[#F5F5F5] border border-accent rounded-lg p-6 relative">
            <div className="absolute top-0 left-0 p-4">
              <FaQuoteLeft className="text-green-500 text-3xl" />
            </div>
            <div className="flex items-center mb-4">
              <img
                src={testimonial.icon}
                alt={name}
                className="w-16 h-16 rounded-full border-2 border-green-500"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600 italic">{position}</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">{text}</p>
            <p className="text-gray-800 mb-4">{salutation}</p>
            <div className="flex items-center">
              <span className="text-gray-600">{stars}</span>
              <div className="flex items-center text-green-500 ml-2 mb-[5px]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.455L24 9.373l-6 5.847L19.336 24 12 20.265 4.664 24 6 15.22l-6-5.847 8.332-1.331z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {testimonialsData.map((_, idx) => (
        <div
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? "bg-accent" : "bg-[#F5F5F5]"
          }`}
        />
      ))}
    </div>
  );
};
