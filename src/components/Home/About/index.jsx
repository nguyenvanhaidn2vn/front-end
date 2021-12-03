import React from 'react';
import './styles.css';
import nhahangImg from './anhnhahang.jpg';

function About() {
	return (
		<div class="about-section-box">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-6 col-sm-6 text-center">
						<div class="inner-column">
							<h1>About Us</h1>
							<div className="information-about">
								<h2>Welcome To <span>My Restaurant</span></h2>
								<h4>E-Menu</h4>
								<p> The latest advancement The latest advancement </p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-6">
						<img src={nhahangImg} alt="" class="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;
