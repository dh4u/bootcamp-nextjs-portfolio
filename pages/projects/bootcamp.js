import Layout from '../../components/Layout'
import React, { Component } from 'react'
import data from '../../static/data/bootcamp.projects'
import linkifyHtml from 'linkifyjs/html'

let projectCount = data.portfolio.projects.length
let projectDisplay = `<div className="card">
<div className="card-content">
	<h4>Bootcamp Projects</h4>
</div>`
let technologyRowContent = ''
	,detailRowContent = ''
	,photoRowContent = ''

let Projects = () => {
	
	return (<Layout currentPage="/projects/bootcamp">
				<style jsx>{`
			
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
				<br />
				{
					data.portfolio.projects.map((item, index) => {
						//console.log(`index: '${index}'\ntitle: '${item.title}'\nindex % 3: '${index % 3}'\ndata.portfolio.projects.length: ${data.portfolio.projects.length}`)

						// do a row of photos
						photoRowContent += `<div class="col-4">
												<a href=${item.GitHub} title=${item.title} target="_blank">
													<img alt=${item.title} src=${item.image} class="col-12" />	
												</a>
											</div>`

						detailRowContent += `<div class="col-4">
												<h5>${item.title}</h5>
												<p>
													<a href=${item.GitHub} alt="GitHub repository" target="_blank">
														<i class="fab fa-github"></i>
													</a>`
					{item.demo !== ""
					?(detailRowContent +=			`<a href=${item.demo} alt="Demo it" target="_blank">
														<i class="fas fa-external-link-alt"></i>
													</a>`)
					:("")
					}
						detailRowContent +=		`</p>
												<p>${linkifyHtml(item.description)}</p>
											</div>`
					
						technologyRowContent += `<div class="col-4">
													<h6>Technology / Concepts</h6>
													<p>${item.technology}</p>
													<p>
														<a href=${item.GitHub} alt="GitHub repository" target="_blank">
															<i class="fab fa-github"></i>
														</a>
													</p>
												</div>`

						if (index % 3 === 2 || index === data.portfolio.projects.length - 1){
							projectDisplay += `<div class="row" style="padding: 10px; align-items: flex-end;">
								${photoRowContent}
							</div>
							<div class="row" style="padding: 10px">
								${detailRowContent}
							</div>
							<div class="row" style="padding: 10px">
								${technologyRowContent}
							</div><br />`
							photoRowContent = ""
							detailRowContent = ""
							technologyRowContent = ""
						}
					})
				}
				<div dangerouslySetInnerHTML={ {__html: projectDisplay} } />
	</Layout>)
}
export default Projects