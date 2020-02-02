import React from 'react'
import "~/styles/index.scss"
import Head from "~/components/Head";

const Error = props => (
    <div id="page-wrapper">
        <Head/>

        <div id="content-wrapper">
            <div id="embedded-content-wrapper">
                <h1 style={{display: 'block', margin: '0 auto'}}>
                    {props.statusCode
                        ? (
                            props.statusCode === 404 ?
                                `Sorry, the page you're looking for does not exist.` :
                                `An error ${props.statusCode} occurred on server`
                        )
                        : `We're sorry! Something went wrong while trying to display this page.`
                    }
                </h1>
            </div>
        </div>
    </div>
);

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode};
};

export default Error;
