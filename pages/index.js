import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ externalPostData }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Golden Rama Express</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <img src="/golden-logo3.png" alt="" />
                <h1 className={styles.title}>Welcome to Golden Rama Express</h1>
                <div className={styles.grid}>
                    {/* <div className={styles.card}>
                        <Link href="/posts/first-post">
                            <h3>Wajib Dikunjungi! 7 Landmark Terkenal di London yang Tak Boleh Terlewatkan Saat Liburan - Detail Artikel</h3>
                            <p>
                                London, sebagai ibu kota Inggris, adalah kota yang kaya akan sejarah, budaya, dan arsitektur yang menakjubkan. Selama berabad-abad, kota ini telah menjadi rumah bagi beberapa landmark paling ikonik di dunia yang tidak hanya indah tetapi juga penuh dengan kisah menarik. Jika Anda berencana untuk liburan ke London, pastikan untuk mengunjungi tujuh landmark berikut ini yang akan membuat perjalanan Anda tak terlupakan.
                            </p>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/posts/second-post">
                            <h3>Panduan Lengkap Menggunakan Transportasi Umum di London, Tips Hemat dan Praktis untuk Wisatawan - Detail Artikel</h3>
                            <p>
                                London adalah salah satu kota dengan sistem transportasi umum terbaik dan paling terintegrasi di dunia. Bagi wisatawan, memahami cara menggunakan transportasi umum di London bisa membuat perjalanan Anda lebih efisien, nyaman, dan hemat. Artikel ini akan memberikan panduan lengkap tentang cara menggunakan berbagai moda transportasi di London, serta tips penting untuk memaksimalkan pengalaman Anda selama liburan.
                            </p>
                        </Link>
                    </div> */}
                    {externalPostData.map((data) => {
                        return (
                            <div className={styles.card} key={data.id}>
                                <Link href={data.link}>
                                    <h3>{data.title}</h3>
                                    <p>{data.excerpt}</p>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}

export async function getStaticProps() {
    const apiURL = "http://localhost:3001/posts";
    const response = await fetch(apiURL);
    const data = await response.json();
    return {
        props: {
            externalPostData: data,
        },
    };
}