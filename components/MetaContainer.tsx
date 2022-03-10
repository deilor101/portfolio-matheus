import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Navigation from "./Navigation";
import Footer from "./Footer";
import profilePic from '../public/profile.jpg'

export default function MetaContainer({children, ...customMeta}) {
    const router = useRouter();

    const meta = {
        title: "Matheus Henrique Oliveira Silva, escritor, dev, estudante de fisioterapia",
        description: `Um projeto feito para praticar e aprender conceitos do next e tailwind`,
        image: {profilePic},
        type: "website",
        date: new Date().toDateString(),
        ...customMeta,
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="Matheus Henrique"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>
            <main className="w-full">
                <Navigation/>
                <div>{children}</div>
                <Footer/>
            </main>
        </div>
    );
}