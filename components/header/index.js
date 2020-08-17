import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <img src='/images/logo.svg' alt='kodeBaik' />
      </div>
    </div>
  )
}