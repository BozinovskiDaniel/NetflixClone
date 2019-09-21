import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../js/scripts';
class landing extends Component {
	


	render() {
		return( <div className="landing">
			
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <Link to="/"><img src={require('../img/logo.png')} height="75px" alt="bg" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><i className="fas fa-film btn-icon"></i>Films<span className="sr-only">(current)</span><i className="fas fa-angle-down btn-icon"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Getflix Lovers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign In</a>
                            </li>
                        </ul>
				</div>
			</nav>
		
			<header className="showcase">
				<div className="showcase-top">
					
					
				</div>
				<div className="showcase-content">
					<h1>See what's next</h1>
					<p>View anywhere. Cancel Anytime</p>

					
						<Link to="/View"><button className="btn btn-xl btn-rounded">Start Discovering<i className="fas fa-chevron-right btn-icon"></i></button></Link>
				</div>
			</header>

			<section className="tabs">
				<div className="container">
					<div className="tab-item tab-1 tab-border">
						<i className="fas fa-door-open fa-3x"></i>
						<p className="hide-sm">Cancel at any time</p>
					</div>
					<div className="tab-item tab-2">
						<i className="fas fa-tablet-alt fa-3x"></i>
						<p className="hide-sm">Watch anywhere</p>
					</div>
					<div className="tab-item tab-3">
						<i className="fas fa-tags fa-3x"></i>
						<p className="hide-sm">Pick your price</p>
					</div>
				</div>
			</section>

			<section className="tab-content">
				<div className="container">
					
					<div className="tab-content-item tab-1-content show">
						<div className="tab-1-content-inner">
							<div>
								<p className="text-lg">
									If you decide Getflix isn't for you - no problem. No commitment.
									Cancel online anytime.
								</p>

									<a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
								
							</div>
							<img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
						</div>
					</div>

				
					<div className="tab-content-item tab-2-content">
						<div className="tab-2-content-top">
							<p className="text-lg">
								Watch TV shows and movies anytime, anywhere — personalized for
								you.
							</p>
							<a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
						</div>
						<div className="tab-2-content-bottom">
							<div>
								<img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
								<p className="text-md">
									Watch on your TV
								</p>
								<p className="text-dark">
									Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
									players and more.
								</p>
							</div>
							<div>
								<img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
								<p className="text-md">
									Watch instantly or download for later
								</p>
								<p className="text-dark">
									Available on phone and tablet, wherever you go.
								</p>
							</div>
							<div>
								<img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
								<p className="text-md">
									Use any computer
								</p>
								<p className="text-dark">
									Watch right on Getflix.com.
								</p>
							</div>
						</div>
					</div>

					
					<div className="tab-content-item tab-3-content">
						<div className="text-center">
							<p className="text-lg">
								Choose one plan and watch everything on Getflix.
							</p>
							<a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
						</div>

						<table className="table">
							<thead>
								<tr>
									<th></th>
									<th>Basic</th>
									<th>Standard</th>
									<th>Premium</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Monthly price after free month ends on 6/19/19</td>
									<td>$8.99</td>
									<td>$12.99</td>
									<td>$15.99</td>
								</tr>
								<tr>
									<td>HD Available</td>
									<td><i className="fas fa-times"></i></td>
									<td><i className="fas fa-check"></i></td>
									<td><i className="fas fa-check"></i></td>
								</tr>
								<tr>
									<td>Ultra HD Available</td>
									<td><i className="fas fa-times"></i></td>
									<td><i className="fas fa-times"></i></td>
									<td><i className="fas fa-check"></i></td>
								</tr>
								<tr>
									<td>Screens you can watch on at the same time</td>
									<td>1</td>
									<td>2</td>
									<td>4</td>
								</tr>
								<tr>
									<td>Watch on your laptop, TV, phone and tablet</td>
									<td><i className="fas fa-check"></i></td>
									<td><i className="fas fa-check"></i></td>
									<td><i className="fas fa-check"></i></td>
								</tr>
								<tr>
									<td>Unlimited movies and TV shows</td>
									<td><i className="fas fa-check"></i></td>
									<td><i className="fas fa-check"></i></td>
									<td><i className="fas fa-check"></i></td>
								</tr>
								<tr>
									<td>Cancel anytime</td>
									<td><i className="fas fa-check"></i></td>
									<td><i className="fas fa-check"></i></td>
									<td><i className="fas fa-check"></i></td>
								</tr>
								<tr>
									<td>First month free</td>
									<td><i className="fas fa-check"></i></td>
									<td><i className="fas fa-check"></i></td>
									<td><i className="fas fa-check"></i></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<footer className="footer">
				<p>Questions? Call 1-866-579-7172</p>
				<div className="footer-cols">
					<ul>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">Investor Relations</a></li>
						<li><a href="#">Ways To Watch</a></li>
						<li><a href="#">Corporate Information</a></li>
						<li><a href="#">Getflix Originals</a></li>
					</ul>
					<ul>
						<li><a href="#">Help Center</a></li>
						<li><a href="#">Jobs</a></li>
						<li><a href="#">Terms Of Use</a></li>
						<li><a href="#">Contact Us</a></li>
					</ul>
					<ul>
						<li><a href="#">Account</a></li>
						<li><a href="#">Redeem Gift Cards</a></li>
						<li><a href="#">Privacy</a></li>
						<li><a href="#">Speed Test</a></li>
					</ul>
					<ul>
						<li><a href="#">Media Center</a></li>
						<li><a href="#">Buy Gift Cards</a></li>
						<li><a href="#">Cookie Preferences</a></li>
						<li><a href="#">Legal Notices</a></li>
					</ul>
				</div>

			</footer>

			</div>
		);
		}
}

export default landing;