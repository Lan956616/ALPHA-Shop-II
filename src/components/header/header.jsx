import Container from '../container'

import styles from './header.module.css'

export default function Header () {
  return(
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <p>header</p>
        </div>
      </Container>
    </header>
  )
}