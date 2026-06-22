// Projects
import logo from "../../assets/images/G-UL-Logo-Big.png";
import "./Header.css";


function
Header()
{
	return (
		<nav className="site-header">
			<a className="site-header__brand"
			   href="/">
				<img alt="G-UL logo"
					 className="site-header__logo"
					 src={logo} />

				<span>G&apos;s Metronome</span>
			</a>
		</nav>
	);
}


export default Header;
