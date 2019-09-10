import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import React, { Component } from 'react';

const layoutStyle = {
    margin: 'auto',
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Head>
            <title>Scott Harvey · Full Stack Developer</title>
        </Head>
         <div className="cover-container d-flex w-100 h-20 p-3 mx-auto flex-column">
            <Header currentPage={props.currentPage} />
            
            <main role="main" id="main" className="inner">
                {props.children}
            </main>
            
            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>&nbsp;</p>
                    <p>&copy; 2019 Scott Harvey &nbsp;<a href="https://github.com/dh4u" target="_blank"><i className="fab fa-github"></i></a></p>
                    <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                </div>
            </footer>
        </div>
    </div>
)
export default Layout