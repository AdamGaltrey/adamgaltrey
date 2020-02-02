import React from 'react'
import NextHead from 'next/head'

const defaultTitle = 'Adam Galtrey';
const defaultDescription = `My personal website & portfolio`;

const Head = () => (
    <NextHead>
        <meta charSet="UTF-8"/>
        <meta name="description" content={defaultDescription}/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap" rel="stylesheet" />
        <title>{defaultTitle}</title>
    </NextHead>
);

export default Head;
