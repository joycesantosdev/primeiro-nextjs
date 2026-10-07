import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Page() {
  return (
    <>
      <h1 className={styles.titulo}>Galeria de Arte</h1>
      <img
        className={styles.logo}
        src="/imagens/logo.png"
        alt="logo da galeria"
      />
      <p className={styles.descricao}>
        Bem-vindo à nossa Galeria de Arte, um espaço dedicado à beleza, à
        criatividade e à expressão artística.
      </p>
      <nav className={styles.navegacao}>
        <Link className={styles.link} href="/exposicoes">
          Exposições
        </Link>
        <Link className={styles.link} href="/contactos">
          Contactos
        </Link>
      </nav>
    </>
  );
}
