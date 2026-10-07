import Link from "next/link"
import styles from "../../styles/Contactos.module.css"

function Page() {
  return (
    <>
        <h1 className={styles.titulo}>Contactos</h1>

        <p className={styles.descricao} >Fala connosco através dos nossos contactos. </p>

        <Link className={styles.link} href="/">Home</Link>
    </>

  )
}

export default Page