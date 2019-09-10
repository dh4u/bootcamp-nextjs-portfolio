import Layout from '../components/Layout'

export default () => (
	<div>
	<Layout currentPage="/about">
		<br />
		<br />
		<div className="row">
			<div className="three columns">
				<img className="profile-pic" alt="Scott Harvey Profile Pic" src="static/images/profilepic.nepal.2.jpg" style={{width: '200px', borderRadius: '10%', marginLeft: '-100px'}} />
			</div>
			<div className="nine columns main-col">
				<h2>About Me</h2>
				<p>I'm dry-humored and the most socialable introvert you will meet - for example - my partner and I have been to over 25 weddings together and I've dragged her to the majority of them. I enjoy traveling and still find it amazing that I have been fortunate enough to travel to about 30 countries on 6 continents - most recently Nepal and Indonesia.</p>
				<p>I enjoy developing with ColdFusion because it is relatively easy and feature rich. It is a shame that Adobe hasn't done more for ColdFusion. Perhaps they should open source their version of CFML in order to get more developers involved and boost the profile of ColdFusion. Then again, ColdFusion is essentially a Java framework so perhaps touting that could help ColdFusion could raise its profile.</p>
				<p>Currently, I am attending a bootcamp where I am learning the MERN stack. It will be nice to have another tool in my toolbox and the potential opportunities that come with it. I think an ideal opportunity would be one where I get to use my knowledge of ColdFusion and could work on porting the application to the MERN stack or (a similar stack).</p>
				<p>Professionally, I value a sense of ownership most of all. The position that I recall most fondly was at CLR where I built an intranet for them from the ground up. I was responsible for all aspects of the project - managing web hosting including database and web server setup, database architecture / design, and software development. As I automated CLR's processes I felt great pride to be able to develop software that was fostering communication between employees and making work easier for them.</p>
				<p>I enjoy a challenge and I believe that if you aren't in a little over your head you will not grow. I'm looking for the next challenge.</p>
				<div className="row">
					<div className="columns contact-details">
						<h2>Contact Details</h2>
						<p className="address">
							<span>Scott Harvey</span><br />
							<span>1838 6th St NW Unit 4<br />Washington DC, 20001</span><br />
							<span>202-744-5379</span><br />
							<span><a href="mailto:scott.harvey@outlook.com">scott.harvey@outlook.com</a></span>
						</p>
					</div>
					<div className="columns download">
						<p>
							<a className="button" download="" href="/downloads/Scott-Harvey-Resume.pdf"><i className="fas fa-download" aria-hidden="true"></i>Download Resume</a>
						</p>
					</div>
				</div>
			</div>
		</div>
  	</Layout>
	</div>
)