import { useEffect, useState } from "react";
import logo1 from "../../assets/ucasal-logo.jpg";
import logo2 from "../../assets/bol-logo.png";
import "./NavBar.css";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
            <div className="navbar-container">

                <div className="navbar-logos">
                    <img src={logo1} alt="Logo 1" className="logo" />
                    <img src={logo2} alt="Logo 2" className="logo" />
                </div>

                <span className="navbar-text">Circular: Marzo 2025</span>
            </div>
        </nav>
    );
};

export default Navbar;
