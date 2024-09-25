import Layout from "../../components/layout";
import Link from "next/link";

export default function SecondPost() {
    return (
        <Layout>
            <Link href="/">
                <p>Back</p>
            </Link>
            <h1>Second Post</h1>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
            </p>
        </Layout>
    )
};