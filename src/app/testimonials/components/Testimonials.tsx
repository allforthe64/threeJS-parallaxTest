'use client'

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const testimonials = [
    {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at sapien a dui ultrices scelerisque. In vel libero mi. Aliquam at consectetur ligula.',
        author: 'John'
    },
    {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at sapien a dui ultrices scelerisque. In vel libero mi. Aliquam at consectetur ligula.',
        author: 'Esmerelda'
    },
    {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at sapien a dui ultrices scelerisque. In vel libero mi. Aliquam at consectetur ligula.',
        author: 'Alex'
    },
    {
        foo: 'bar'
    },
  ]

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const index = wrap(0, testimonials.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
        <div className="pr-10" onClick={() => paginate(1)}>
            {"<"}
        </div>
      <AnimatePresence initial={false} custom={direction}>
        {index !== 3 ? 
            <motion.p className="w-[40%]"
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: .2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                }
                }}
            >{testimonials[index].body}</motion.p>
            : 
            <p>This is the last one</p>
        }
        
      </AnimatePresence>
      <div className="pl-5" onClick={() => paginate(-1)}>
        {">"}
      </div>
    </>
  );
};
