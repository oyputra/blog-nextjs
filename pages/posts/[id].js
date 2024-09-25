import Layout from '../../components/layout';
import Link from "next/link";

export default function Post({ postData }) {
    return (
        <Layout>
            <Link href="/">
                <p>Back</p>
            </Link>
            <h1>{ postData.title }</h1>
            <p>{ postData.body }</p>
        </Layout>
    );
}

async function getAllPostIds() {
    const apiUrl = "http://localhost:3001/posts";

    const response = await fetch(apiUrl);

    const allPosts = await response.json();

    const allPostIds = allPosts.map((post) => {
        return { params: { id: post.alias } };
    });

    return allPostIds;
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

async function getPostData(id) {
    const apiURL = `http://localhost:3001/posts?alias=${id}`;

    const response = await fetch(apiURL);

    const postData = await response.json();

    return postData;
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData: postData[0],
        },
    };
}