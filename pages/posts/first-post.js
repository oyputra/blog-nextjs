import Layout from "../../components/layout";
import Link from "next/link";

export default function FirstPost() {
    return (
        <Layout>
            <Link href="/">
                <p>Back</p>
            </Link>
            <h1>First Post</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </p>
        </Layout>
    )
};