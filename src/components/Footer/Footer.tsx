// Projects
import logo from "../../assets/images/G-UL-Logo2.png";
import "./Footer.css";


function
Footer()
{
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="site-footer__content">
					<span className="site-footer__copyright">
						© SeungHwan, G-UL, Um
					</span>

					<ul className="site-footer__links">
						<li>
							<a href="https://g-ul.me"
							   rel="noopener noreferrer"
							   target="_blank">
								<img alt="G-UL logo"
									 src={logo} />
							</a>
						</li>

						<li>
							<a href="https://www.facebook.com/stuperfection.g.ul"
							   rel="noopener noreferrer"
							   target="_blank">
								<i className="bi
											  bi-facebook">
								</i>
							</a>
						</li>

						<li>
							<a href="https://www.linkedin.com/in/g-ul"
							   rel="noopener noreferrer"
							   target="_blank">
								<i className="bi
											  bi-linkedin">
								</i>
							</a>
						</li>

						<li>
							<a href="https://www.linkedin.com/in/g-ul"
							   rel="noopener noreferrer"
							   target="_blank">
								<i className="bi
											  bi-linkedin">
								</i>
							</a>
						</li>

						<li>
							<a href="https://github.com/G-UL"
							   rel="noopener noreferrer"
							   target="_blank">
								<i className="bi
											  bi-github">
								</i>
							</a>
						</li>

						<li>
							<a href="https://www.instagram.com/ii_gul_ii/"
							   rel="noopener noreferrer"
							   target="_blank">
								<i className="bi
											  bi-instagram">
								</i>
							</a>
						</li>

					</ul>
				</div>
			</div>
		</footer>
	);
}


export default Footer;
