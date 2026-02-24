'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./SocialMediaPosts.module.css";
import socialPosts from "@/data/socialPostsData";
import ImagePreviewModal from "./ImagePreviewModal";
import PostOverlay from "./PostOverlay";
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const SocialMediaPosts = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [activePost, setActivePost] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Social Media Center <span className={styles.span1}>– Ideas</span><span className={styles.span2}>2Invest</span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {socialPosts.map((post) => (
            <motion.div
              key={post.id}
              className={styles.card}
              variants={cardVariants}
            >
              <div
                className={styles.imageWrapper}
                onClick={() => setActiveImage(post.image)}
              >
                <Image
                  src={post.image}
                  alt={post.headline}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3>{post.headline}</h3>
                {/* <p>{post.body}</p> */}
                {/* CLAMPED TEXT */}
                <div className={styles.previewWrapper}>
                    <p className={styles.previewText}>
                        {post.body}
                    </p>
                    <span
                        className={styles.readMoreInline}
                        onClick={() => setActivePost(post)}
                    >
                        ...Read More
                    </span>
                </div>

                <div className={styles.hashtags}>
                  {post.hashtags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                {post.buttonLink && (
                  <Link href={post.buttonLink} className={styles.button}>
                    {post.buttonText || "Learn More"}
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow Us CTA */}
        <motion.div
          className={styles.followRow}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>Follow Ideas2Invest for daily market insights</p>
          <div className={styles.icons}>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImagePreviewModal
        image={activeImage}
        onClose={() => setActiveImage(null)}
      />
      <PostOverlay
        post={activePost}
        onClose={() => setActivePost(null)}
      />
    </section>
  );
};

export default SocialMediaPosts;


// 'use client';

// import Image from "next/image";
// import styles from "./SocialMediaPosts.module.css";
// import socialPosts from "@/data/socialPostsData";
// import Link from "next/link";

// const SocialMediaPosts = () => {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <h2 className={styles.heading}>
//           Insights & Updates
//           <span> from Ideas2Invest</span>
//         </h2>

//         <div className={styles.grid}>
//           {socialPosts.map((post) => (
//             <div key={post.id} className={styles.card}>
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src={post.image}
//                   alt={post.headline}
//                   fill
//                   className={styles.image}
//                 />
//               </div>

//               <div className={styles.content}>
//                 <h3>{post.headline}</h3>
//                 <p>{post.body}</p>

//                 <div className={styles.hashtags}>
//                   {post.hashtags.map((tag, index) => (
//                     <span key={index}>{tag}</span>
//                   ))}
//                 </div>

//                 {post.buttonLink && (
//                   <Link href={post.buttonLink} className={styles.button}>
//                     {post.buttonText || "Learn More"}
//                   </Link>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialMediaPosts;
