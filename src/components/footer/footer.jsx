import styles from './footer.module.css' 
import Container from '../container'

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <Container>
        <p>footer</p>
      </Container>
    </footer>
  )
}