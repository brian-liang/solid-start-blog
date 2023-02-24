import { Head, Title, Meta, Link, Body, Scripts } from "solid-start";

type articleHeadProps = {
    title: string,
    description: string
    date: string
}

const ArticleHead = (props : articleHeadProps) =>{
    return(
        <Head>
            <Title>{props.title} - Solid Blog</Title>
            <Meta name="description" content={props.description}/>
            <Meta property='og:description' content={props.description}/>
            <Meta property='og:title' content={`${props.title} - Solid Blog`}/>
        </Head>
    )
}

export default ArticleHead
