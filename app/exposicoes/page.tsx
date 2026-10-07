import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/Exposicoes.module.css"

function Page() {
  return (
    <>
        <h1 className={styles.titulo}>Exposições</h1>

        <div className={styles.galeria}>
            <Image 
            className={styles.imagem} 
            src="/imagens/arte1.jpg" 
            alt="predio estilizado"
            width={1920}
            height={2559}
             />
            <Image className={styles.imagem}  
            src="/imagens/arte2.jpg" 
            alt="parede decorada"
            width={1920}
            height={1280} 
            loading="eager"
            />
            <Image className={styles.imagem}  
            src="/imagens/arte3.jpg" 
            alt="rosto rosa esculpido"
            width={1920}
            height={2401} />
        </div>

        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link}  href="/contactos">Contactos</Link>

    </>
    
  )
}

export default Page