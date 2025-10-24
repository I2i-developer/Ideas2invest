// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { useState } from 'react'
// import styles from './Navbar.module.css'
// import { HiMenuAlt3, HiX } from 'react-icons/hi'
// import navbarData from '@/data/navbarData'

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   return (
//     <header className={styles.navbar}>
//       <div className={styles.container}>
//         {/* Logo */}
//         <Link href="/" className={styles.logo}>
//           <Image
//             src={navbarData.logo.src}
//             alt={navbarData.logo.alt}
//             width={navbarData.logo.width}
//             height={navbarData.logo.height}
//             priority
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className={styles.navLinks}>
//           {navbarData.links.map((link, index) => (
//             <div key={index} className={styles.navItem}>
//               <Link href={link.path} className={styles.link}>
//                 {link.label}
//               </Link>
//               {/* Dropdown */}
//               {link.children && (
//                 <div className={styles.dropdown}>
//                   {link.children.map((child, cIndex) => (
//                     <Link
//                       key={cIndex}
//                       href={child.path}
//                       className={styles.dropdownLink}
//                     >
//                       {child.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* CTA Button */}
//         <Link href={navbarData.cta.path} className={styles.ctaBtn}>
//           {navbarData.cta.label}
//         </Link>

//         {/* Mobile Toggle */}
//         <button className={styles.menuToggle} onClick={toggleMenu}>
//           {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu (Basic version for now) */}
//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenu}>
//           {navbarData.links.map((link, index) => (
//             <div key={index}>
//               <Link href={link.path} className={styles.mobileLink} onClick={toggleMenu}>
//                 {link.label}
//               </Link>
//               {link.children &&
//                 link.children.map((child, cIndex) => (
//                   <Link
//                     key={cIndex}
//                     href={child.path}
//                     className={styles.mobileSubLink}
//                     onClick={toggleMenu}
//                   >
//                     {child.label}
//                   </Link>
//                 ))}
//             </div>
//           ))}
//           <Link href={navbarData.cta.path} className={styles.mobileCta} onClick={toggleMenu}>
//             {navbarData.cta.label}
//           </Link>
//         </div>
//       )}
//     </header>
//   )
// }

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Navbar.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import navbarData from '@/data/navbarData'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null)

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenDropdownIndex(null) // close dropdowns on toggle
  }

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <motion.div layoutId="site-logo">
            <Image
              src={navbarData.logo.src}
              alt={navbarData.logo.alt}
              width={navbarData.logo.width}
              height={navbarData.logo.height}
              priority
            />
          </motion.div>
          {/* <Image
            src={navbarData.logo.src}
            alt={navbarData.logo.alt}
            width={navbarData.logo.width}
            height={navbarData.logo.height}
            priority
          /> */}
        </Link>

        {/* Desktop Menu */}
        {/* <nav className={styles.navLinks}>
          {navbarData.links.map((link, index) => (
            <div key={index} className={styles.navItem}>
              <Link href={link.path} className={styles.link}>
                {link.label}
              </Link>
              {link.children && (
                <div className={styles.dropdown}>
                  {link.children.map((child, cIndex) => (
                    <Link key={cIndex} href={child.path} className={styles.dropdownLink}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav> */}
        {/* <nav className={styles.navLinks}>
          {navbarData.links.map((link, index) => (
            <div key={index} className={styles.navItem}>
              <Link href={link.path} className={styles.link}>
                {link.label}
              </Link>

              {link.children && (
                <AnimatePresence>
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.children.map((child, cIndex) => (
                      <Link key={cIndex} href={child.path} className={styles.dropdownLink}>
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav> */}
        <nav className={styles.navLinks}>
          {navbarData.links.map((link, index) => (
            <div key={index} className={styles.navItem}>
              <Link href={link.path} className={styles.link}>
                {link.label}
                {link.children && (
                  <svg
                    className={styles.caret}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </Link>

              {/* Dropdown with animation */}
              {link.children && (
                <AnimatePresence>
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.children.map((child, cIndex) => (
                      <Link key={cIndex} href={child.path} className={styles.dropdownLink}>
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>


        {/* CTA */}
        <Link href={navbarData.cta.path} className={styles.ctaBtn} target='__blank'>
          {navbarData.cta.label}
        </Link>

        {/* Mobile Toggle */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Accordion Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navbarData.links.map((link, index) => (
            <div key={index} className={styles.mobileItem}>
              <div className={styles.mobileLinkWrapper}>
                <Link href={link.path} className={styles.mobileLink} onClick={toggleMenu}>
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    className={styles.dropdownToggle}
                    onClick={() => toggleDropdown(index)}
                  >
                    {openDropdownIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                )}
              </div>
              {/* Child Links */}
              {link.children && openDropdownIndex === index && (
                <div className={styles.mobileSubMenu}>
                  {link.children.map((child, cIndex) => (
                    <Link
                      key={cIndex}
                      href={child.path}
                      className={styles.mobileSubLink}
                      onClick={toggleMenu}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href={navbarData.cta.path} className={styles.mobileCta} onClick={toggleMenu}>
            {navbarData.cta.label}
          </Link>
        </div>
      )}
    </header>
  )
}
