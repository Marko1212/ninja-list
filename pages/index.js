import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus
          expedita voluptatem natus illo facilis sed nobis. Quia recusandae
          eveniet, expedita beatae laboriosam nisi adipisci ipsam eos repellat
          voluptatibus optio!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, ipsa
          quaerat laboriosam ratione porro amet repellat cumque asperiores
          commodi, cum aperiam quidem sed praesentium dolores necessitatibus.
          Soluta dolorem dignissimos nobis?
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja listing
        </Link>
      </div>
    </>
  );
}
