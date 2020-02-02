import React from 'react'
import NextHead from 'next/head'

const defaultTitle = 'Adam Galtrey';
const defaultDescription = `My personal website & portfolio`;

const Head = () => (
    <NextHead>
        <meta charSet="UTF-8"/>
        <meta name="description" content={defaultDescription}/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>

            <link href="https://fonts.googleapis.com/css?family=Montserrat:500|Open+Sans&display=swap" rel="stylesheet" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="manifest" href="/favicons/site.webmanifest"/>

        <title>{defaultTitle}</title>
    </NextHead>
);

export default Head;
