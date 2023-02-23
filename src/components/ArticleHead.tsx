import { Head, Title, Meta, Link, Body, Scripts } from "solid-start";

const ArticleHead = (props) =>{
    return(
        <Head>
            <Title>{props.title} - Solid Blog</Title>
            <Meta name="description" content={props.description}/>
            <Meta property='og:description' content={props.descripton}/>
            <Meta property='og:title' content={`${props.title} - Solid Blog`}/>
        </Head>
    )
}

export default ArticleHead
