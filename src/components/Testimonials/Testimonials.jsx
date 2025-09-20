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
    name: "John Doe",
    designation: "Investor",
    text: "Ideas2Invest helped me streamline my portfolio and maximize returns.",
    rating: 5,
  },
  {
    id: 2,
    img: "https://picsum.photos/id/1012/500/300",
    name: "Sarah Lee",
    designation: "Entrepreneur",
    text: "A trustworthy partner for long-term financial planning.",
    rating: 4.5,
  },
  {
    id: 3,
    img: "https://picsum.photos/id/1015/500/300",
    name: "Rajesh Kumar",
    designation: "Engineer",
    text: "Their SIP advice has been a game-changer for my retirement goals.",
    rating: 5,
  },
  {
    id: 4,
    img: "https://picsum.photos/id/1021/500/300",
    name: "Emily Carter",
    designation: "Designer",
    text: "I love how transparent and client-friendly their services are.",
    rating: 4.5,
  },
  {
    id: 5,
    img: "https://picsum.photos/id/1022/500/300",
    name: "Michael Scott",
    designation: "Manager",
    text: "With Ideas2Invest, I feel more confident about my financial future.",
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
                <img src={t.img} alt={t.name} />
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
