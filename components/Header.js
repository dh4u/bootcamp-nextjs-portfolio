//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'
import ReactGA from 'react-ga';

const linkStyle = {
  marginRight: 15
}

function Header(props){
    //console.log(props)

    ReactGA.initialize('UA-146587350-1');
    ReactGA.pageview(props.currentPage);

    let  aboutLinkActive = ""
        ,bootcampProjectsLinkActive = ""
        ,contactLinkActive = ""
        ,homeLinkActive = ""
        ,skillsLinkActive = "";

    switch (props.currentPage) {
        case '/about':
            aboutLinkActive = 'active'
        break;
        
        case '/contact':
            contactLinkActive = 'active'
        break;
    
        case '/projects/bootcamp':
            bootcampProjectsLinkActive = 'active'
        break;
    
        case '/skills':
            skillsLinkActive = 'active'
        break;
        
        default:
            homeLinkActive = 'active'
    }

    return(
    <header className="mb-auto">
        <div className="inner">
            <h3 className="masthead-brand">Scott Harvey</h3>
            <nav className="nav nav-masthead justify-content-center">
                <Link href="/">
                    <a className={`nav-link ${homeLinkActive}`} style={linkStyle}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={`nav-link ${aboutLinkActive}`} style={linkStyle}>About</a>
                </Link>
                <Link href="/skills">
                    <a className={`nav-link ${skillsLinkActive}`} style={linkStyle}>Skills</a>
                </Link>
                <Link href="/projects/bootcamp">
                    <a className={`nav-link ${bootcampProjectsLinkActive}`} style={linkStyle}>Bootcamp Projects</a>
                </Link>
                <Link href="/contact">
                    <a className={`nav-link ${contactLinkActive}`} style={linkStyle}>Contact</a>
                </Link>
            </nav>
        </div>
    </header>
    )
}

export default Header