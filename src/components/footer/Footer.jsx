import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-divider"></div>

            <div className="footer-container">
                <div className="footer-section">
                    <h4>Lugar:</h4>
                    <p>Facultad de Ingeniería, Universidad Católica de Salta</p>
                    <p>Dirección: Campo Castañares [A4400EDD], Salta</p>
                    <p>Teléfono: (0387) 426-8536/39</p>
                    <p>Fax: (0387) 426-8502</p>
                    <p>Horario: lunes a viernes de 10 a 21 hs.</p>
                </div>

                <div className="footer-section">
                    <h4>Contacto:</h4>
                    <p>Para informes e inscripción contactar con Esp. Ing. M. Cecilia Botelli</p>
                    <p>Correo adicional: Mg. Ing. Juan Francisco Linares</p>
                </div>

                <div className="footer-section">
                    <h4>Para mayor información:</h4>
                    <p>
                        <a href="#">Primer Encuentro Latinoamericano por el Agua</a> {/* Falta link */}
                    </p>
                    <p>Correos:</p>
                    <p>lsanchez@ucb.edu.bo</p>
                    <p>jvargas.z@ucb.edu.bo</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;