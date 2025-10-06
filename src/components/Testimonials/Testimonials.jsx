// "use client";
// import React, { useRef, useEffect } from "react";
// import styles from "./Testimonials.module.css";
// import { testimonials } from "@/data/testimonialData";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { motion } from "framer-motion";
// import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i) {
//       stars.push(<FaStar key={i} className={styles.star} />);
//     } else if (rating >= i - 0.5) {
//       stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
//     } else {
//       stars.push(<FaStar key={i} className={`${styles.star} ${styles.empty}`} />);
//     }
//   }
//   return stars;
// };

// const Testimonials = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current && prevRef.current && nextRef.current) {
//       swiperRef.current.params.navigation.prevEl = prevRef.current;
//       swiperRef.current.params.navigation.nextEl = nextRef.current;

//       swiperRef.current.navigation.destroy();
//       swiperRef.current.navigation.init();
//       swiperRef.current.navigation.update();
//     }
//   }, []);

//   return (
//     <section className={styles.testimonialSection}>
//       <motion.div
//         className={styles.heading}
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2>What Our Clients Say</h2>
//       </motion.div>

//       <div className={styles.swiperWrapper}>
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           autoplay={{ delay: 4000 }}
//           spaceBetween={30}
//           slidesPerView={3}
//           breakpoints={{
//             1024: { slidesPerView: 3 },
//             768: { slidesPerView: 2 },
//             0: { slidesPerView: 1 },
//           }}
//           //   navigation={{ enabled: true }}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           className={styles.swiperContainer}
//           loop={true}
//         >
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 className={styles.card}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className={styles.quoteIcon}>
//                   <FaQuoteLeft />
//                 </div>
//                 <div className={styles.profile}>
//                   <img src={item.image} alt={item.name} />
//                 </div>
//                 <p className={styles.text}>{item.text}</p>
//                 <div className={styles.ratingRow}>
//                   <div className={styles.googleStars}>
//                     <FcGoogle className={styles.googleIcon} />
//                     <div className={styles.stars}>{renderStars(item.rating)}</div>
//                   </div>
//                 </div>
//                 <h4 className={styles.title}>{item.name}</h4>
//                 <span className={styles.designation}>{item.designation}</span>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* navigation buttons */}
//         <div
//           ref={prevRef}
//           className={`${styles.navButton} ${styles.testimonialPrev}`}
//           aria-hidden="true"
//         >
//           ‹
//         </div>
//         <div
//           ref={nextRef}
//           className={`${styles.navButton} ${styles.testimonialNext}`}
//           aria-hidden="true"
//         >
//           ›
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import styles from "./Testimonials.module.css"
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    id: 1,
    img: "https://picsum.photos/id/1011/500/300",
    name: "Sanchit Bansal",
    designation: "Delhi, India",
    text: "I had a fantastic experience with Ideas2Invest. The team made it really easy for me to explore and invest in opportunities that aligned with my goals. Everything was transparent, and I always felt confident about the process.",
    rating: 5,
  },
  {
    id: 2,
    img: "https://picsum.photos/id/1012/500/300",
    name: "Shilpi Maheshwari",
    designation: "Delhi, India",
    text: "Received a great guidance related all my financial decisions. They explain things explicitly, suggests the right lucrative investement tailored to my goals.",
    rating: 5,
  },
  {
    id: 3,
    img: "https://picsum.photos/id/1015/500/300",
    name: "Neeraj Soni",
    designation: "Delhi, India",
    text: "Excellent advice with customer centric approach that is completely alligned to objectives. Ideas 2 invest team consistency and regular reviews is helping me to meet my goals timely. Great going team.",
    rating: 5,
  },
  {
    id: 4,
    img: "https://picsum.photos/id/1021/500/300",
    name: "Momi Borah",
    designation: "Delhi, India",
    text: "I am really impressed with the team here. They are highly professional, innovative, and always bring fresh ideas to the table. The insights they provide are clear, practical, and extremely valuable for making informed investment decisions.",
    rating: 4.5,
  },
  {
    id: 5,
    img: "https://picsum.photos/id/1022/500/300",
    name: "Parveen Juneja",
    designation: "Delhi, India",
    text: "I have great experience with the company and its promoters. They are highly experienced and skilled with updated market conditions. Their advice to me has always been beneficial. I highly recommend being associated with them.",
    rating: 5,
  }
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const autoplayRef = useRef(null)
  const startX = useRef(0)
  const isDragging = useRef(false)

  // autoplay
  useEffect(() => {
    startAutoplay()
    return stopAutoplay
  }, [])

  const startAutoplay = () => {
    stopAutoplay()
    autoplayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 3000)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
  }

  // drag handlers
  const handleDragStart = (e) => {
    stopAutoplay()
    isDragging.current = true
    startX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX
  }

  const handleDragEnd = (e) => {
    if (!isDragging.current) return
    isDragging.current = false
    const endX = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX
    const diff = endX - startX.current

    if (diff > 50) {
      setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    } else if (diff < -50) {
      setActive((prev) => (prev + 1) % testimonials.length)
    }

    startAutoplay()
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className={styles.star} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
      } else {
        stars.push(<FaStar key={i} className={`${styles.star} ${styles.empty}`} />);
      }
    }
    return stars;
  };

  return (
    <section className={styles.testimonialSection}>
      {/* Heading */}
      <motion.div
        className={styles.heading}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>What Our Clients Say</h2>
      </motion.div>

      {/* Cards */}
      <div
        className={styles.container}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <div className={styles.cards}>
          {testimonials.map((t, index) => {
            let position = (index - active + testimonials.length) % testimonials.length
            let className = styles.card

            if (position === 0) className += " " + styles.active
            else if (position === 1) className += " " + styles.right1
            else if (position === 2) className += " " + styles.right2
            else if (position === testimonials.length - 1) className += " " + styles.left1
            else if (position === testimonials.length - 2) className += " " + styles.left2
            else className += " " + styles.hidden

            return (
              <div key={t.id} className={className}>
                {/* <img src={t.img} alt={t.name} /> */}
                <p className={styles.text}>❝ {t.text}❞</p>
                <div className={styles.ratingRow}>
                  <div className={styles.googleStars}>
                    <FcGoogle className={styles.googleIcon} />
                    <div className={styles.stars}>{renderStars(t.rating)}</div>
                  </div>
                </div>
                <div className={styles.meta}>
                  <h4>{t.name}</h4>
                  <span>{t.designation}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
