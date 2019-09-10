import Layout from '../components/Layout'

export default () => (
	<Layout currentPage="/skills">
	    <br />
		<h4>Skills</h4>
		<div>
            <style jsx>{`
				.bd-placeholder-img {
					font-size: 1.125rem;
					text-anchor: middle;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
				}
		
				.card {
					margin-bottom: 60px;
					position: relative;
					overflow: hidden;
					margin: 0.5rem 0 1rem 0;
					background-color: #fff;
					-webkit-box-sizing: border-box;
					-moz-box-sizing: border-box;
					box-sizing: border-box;
					-webkit-border-radius: 2px;
					-moz-border-radius: 2px;
					border-radius: 2px;
					background-clip: padding-box;
					text-shadow: none;
					box-shadow: none;
					border-radius: 5px;
					color: #333;
				}
		
				.card h4 {
					margin-top: 10px;
					margin-bottom: 10px;
					width: 90%; 
					border-bottom: 1px solid #0000001a; 
					padding-bottom: 10px; 
					margin-left: 5%; 
					margin-right: 5%
				}
		
				@media (min-width: 768px) {
					.bd-placeholder-img-lg {
						font-size: 3.5rem;
					}
				}
		
				.responsive-img {
					margin: 0 auto;
					max-height: 100px;
					padding-bottom: 10px;
					text-align: center;
					vertical-align: middle;
					display: table-cell;
				}
			`}</style>

			<div className="card">
				<div className="card-content">
					<h4>HTML / CSS</h4>
				</div>
				<div className="row" style={{padding: '10px'}}>
					<div className="col">
						<img alt="" src="/static/images/skills/html5.png" className="responsive-img" />HTML5
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/react.png" className="responsive-img" />JSX
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/css3.png" className="responsive-img" />CSS3
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/bootstrap.png" className="responsive-img" />Bootstrap
					</div>
				</div>
			</div>

			<div className="card">
				<div className="card-content">
					<h4>JavaScript</h4>
				</div>
				<div className="row" style={{padding: '10px'}}>
					<div className="col">
						<img alt="" src="/static/images/skills/javascript.png" className="responsive-img" />JavaScript
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/react.png" className="responsive-img" />React
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/nodejs.png" className="responsive-img" />Node
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/jquery.png" className="responsive-img" />jQuery
					</div>
				</div>
			</div>
			
			<div className="card">
				<div className="card-content">
					<h4>Database</h4>
				</div>
				<div className="row" style={{padding: '10px'}}>
					<div className="col">
						<img alt="" src="/static/images/skills/mongodb.png" className="responsive-img" />Mongo
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/mssqlserver.png" className="responsive-img" />MS SQL Server
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/oracle.png" className="responsive-img" />Oracle
					</div>
				</div>
			</div>
			
			<div className="card">
				<div className="card-content">
					<h4>Back-End</h4>
				</div>
				<div className="row" style={{padding: '10px'}}>
					<div className="col">
						<img alt="" src="/static/images/skills/Adobe_ColdFusion_10_icon.png" className="responsive-img" />ColdFusion
					</div>
					<div className="col" style={{verticalAlign: 'middle', marginTop: '25px'}}>
						<img alt="" src="/static/images/skills/HubSpot.png" className="responsive-img" style={{width: '100px', marginBottom: '35px'}} />HubSpot CMS
					</div>
				</div>
			</div>
			
			<div className="card">
				<div className="card-content">
					<h4>Other</h4>
				</div>
				<div className="row" style={{padding: '10px'}}>
					<div className="col">
						<img alt="" src="/static/images/skills/jira.png" className="responsive-img" />Jira
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/splunk.png" className="responsive-img" />Splunk
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/github.png" className="responsive-img" />GitHub
					</div>
					<div className="col">
						<img alt="" src="/static/images/skills/subversion.png" className="responsive-img" />Subversion
					</div>
				</div>
			</div>
        </div>
  	</Layout>
)