"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./LogoIntro.module.css";

export default function LogoIntro({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); // hide overlay
      setTimeout(onComplete, 500); // notify ClientLayout to show main content
    }, 2500); // 2.5 seconds cinematic intro
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            layoutId="site-logo"
            src="/assets/images/logo/logo.png"
            alt="Ideas2Invest Logo"
            className={styles.logo}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 1.5, ease: "backInOut" }} // cinematic easing
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}


// // components/LogoIntro/LogoIntro.js
// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import styles from "./LogoIntro.module.css";

// export default function LogoIntro({ onComplete }) {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // start hiding after animation
//       setShow(false);
//       setTimeout(onComplete, 800); // notify parent when done
//     }, 2500); // total duration before moving to navbar
//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className={styles.overlay}
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.img
//             src="/assets/images/logo/logo.png"
//             alt="Ideas2Invest Logo"
//             className={styles.logo}
//             initial={{ opacity: 0, scale: 0.6 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//             }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
