import Layout from '../components/Layout'
import Link from 'react'

export default () => (
	<Layout currentPage="/contact">
	    <br />
		<h4>Contact Me</h4>
		<div className="text-center">
            <br />
			<p>If you like what you see - please get in touch!<br />
I'd love to hear about any potential opportunities for freelance work, partnership, or employment.</p>
			<br />
        </div>
		<p className="text-left" style={{paddingLeft: '40%'}}>Scott Harvey<br />
		Software Engineer / Full Stack Developer<br />
		1838 6th St NW Unit 4<br />
		Washington, DC 20001<br />
		202-744-5379<br />
		<a href="mailto: scott.harvey@outlook.com">scott.harvey@outlook.com</a></p>
  	</Layout>
)