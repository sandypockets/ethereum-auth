import styles from './BackgroundSection.module.css'

export default function BackgroundSection({ color }) {
  return (
    <div className={styles[color]}>
      Empty section to demonstrate fixed nav
    </div>
  )
}