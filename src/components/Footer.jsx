import './../styles/footer.css'
import sky from '../assets/sky.jpg'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 30,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    margin: '-40px',
  },

  transition: {
    duration: 0.9,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
})

const Footer = () => {
  return (
    <footer className="footer">

      {/* BACKGROUND */}
      <div className="footer-bg">
        <img
          src={sky}
          alt=""
        />
      </div>

      {/* OVERLAY */}
      <div className="footer-overlay" />

      {/* GRAIN */}
      <div className="footer-grain" />

      {/* TOP BORDER */}
      <div className="footer-top-line">

        <span className="ftl-line" />

        <motion.span
          className="ftl-diamond"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <span className="ftl-line" />

      </div>

      {/* CONTENT */}
      <div className="footer-content">

        {/* EYEBROW */}
        <motion.div
          className="footer-eyebrow"
          {...fadeUp(0.1)}
        >
          <span className="fe-line" />

          With Love & Blessings

          <span className="fe-line fe-line--r" />
        </motion.div>

        {/* FIRST MESSAGE */}
        <motion.div
          className="footer-message"
          {...fadeUp(0.2)}
        >
          <p>
            Your gracious presence and blessings
            <br />
            will be a cherished gift
          </p>

          <p>
            to the bride and groom as they begin
            <br />
            this new chapter together.
          </p>
        </motion.div>

        {/* HEART */}
        <motion.div
          className="footer-heart-wrap"
          {...fadeUp(0.3)}
        >

          <motion.span
            className="footer-heart"
            animate={{
              scale: [1, 1.18, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ♡
          </motion.span>

          <span className="heart-ring heart-ring--1" />
          <span className="heart-ring heart-ring--2" />

        </motion.div>

        {/* SECOND MESSAGE */}
        <motion.div
          className="footer-message footer-message--second"
          {...fadeUp(0.4)}
        >
          <p>
            We look forward to celebrating
            <br />
            this joyous occasion
          </p>

          <p>
            with you and your family.
          </p>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          className="footer-divider"
          {...fadeUp(0.5)}
        >

          <span className="fd-line" />

          <span className="fd-diamond" />

          <span className="fd-dot" />

          <span className="fd-diamond" />

          <span className="fd-line fd-line--r" />

        </motion.div>

        {/* COUPLE */}
        <motion.div
          className="footer-couple"
          {...fadeUp(0.58)}
        >

          <span>
            Selvan S. Ajithkumar
          </span>

          <span className="footer-amp">
            &
          </span>

          <span>
            Selvi B. Akshaya
          </span>

        </motion.div>

        {/* WEDDING DATE */}
        <motion.div
          className="footer-date"
          {...fadeUp(0.65)}
        >
          <span className="footer-date-inner">
            22 · 11 · 2026
          </span>
        </motion.div>

        {/* FLOURISH */}
        <motion.div
          className="footer-flourish"
          {...fadeUp(0.72)}
        >

          <span className="flourish-line" />

          <motion.span
            className="flourish-leaf"
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ✦
          </motion.span>

          <span className="flourish-line" />

        </motion.div>

        {/* FINAL TEXT */}
        <motion.p
          className="footer-copy"
          {...fadeUp(0.78)}
        >
          With love, from the families of Ajithkumar & Akshaya
        </motion.p>

      </div>

    </footer>
  )
}

export default Footer