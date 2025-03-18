import "./Main.css";

const Main = () => {
    return (
        <main className="congreso-container">
            <section className="invitacion">
                <h1>Invitación</h1>
                <p><strong>Salta, 28 y 29 de agosto de 2025</strong></p>
                <p>
                    Por medio de la presente, los invitamos a participar del Segundo Encuentro
                    Latinoamericano por el Agua, que se desarrollará en la Ciudad de Salta
                    (Argentina), los días 28 y 29 de agosto de 2025. Organizan este evento la
                    Facultad de Ingeniería de la Universidad Católica de Salta, la Universidad
                    Católica de Bolivia, la Universidad Javeriana de Colombia, y la Facultad de
                    Ciencias Exactas, Físicas y Naturales (FCEFyN) de la Universidad Nacional de
                    Córdoba (UNC).
                </p>
            </section>

            <section className="objetivo">
                <h1>Objetivo</h1>
                <p>
                    El presente conversatorio internacional tiene la finalidad de generar conciencia en la
                    gestión y la administración de los recursos hídricos en estudiantes, profesionales e instituciones
                    de Latinoamérica y participantes de distintas regiones. Asimismo, servirá de apoyo a las medidas necesarias
                    para la Gestión Integrada de los Recursos Hídricos, en particular, las que se refieren a las cuencas hidrográficas,
                    a través de experiencias, intereses, investigación y conocimiento de otras latitudes relatados por sus expertos.
                    Se pretende que con este segundo encuentro se pueda continuar estableciendo los lineamientos para proyectos
                    de investigación conjunta sobre la gestión de cuencas hidrográficas de ríos internacionales, como ser la cuenca del
                    Río Bermejo y el Río Pilcomayo.
                    Entre los objetivos específicos podemos encontrar los siguientes:

                </p>
            </section>

            <section className="modalidad">
                <h1>Modalidad del Evento</h1>
                <p>
                    El evento se llevará a cabo en modalidad híbrida (presencial y online),
                    permitiendo la participación de asistentes de toda Latinoamérica. Se
                    otorgarán certificados digitales a los participantes registrados.
                </p>
            </section>

            <section className="tematicas">
                <h1>Áreas Temáticas</h1>
                <ul>
                    <li>Gestión integral de recursos hídricos</li>
                    <li>Cambio climático y manejo ecosistémico de cuencas</li>
                    <li>Hidrogeología y aguas subterráneas</li>
                </ul>
            </section>

            <section className="fechas">
                <h2>Fechas Importantes</h2>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Envío de resúmenes</td>
                                <td>20 de marzo de 2025</td>
                            </tr>
                            <tr>
                                <td>Aceptación de resúmenes</td>
                                <td>31 de mayo de 2025</td>
                            </tr>
                            <tr>
                                <td>Envío de resúmenes extendidos</td>
                                <td>1 de julio de 2025</td>
                            </tr>
                            <tr>
                                <td>Aceptación de resúmenes extendidos</td>
                                <td>25 de julio de 2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="comite">
                <h2>Comité Organizador</h2>
                <div className="table-container">
                    <table className="table">
                        <tbody>
                            <tr><td>Esp. Ing. M. Cecilia Botelli</td></tr>
                            <tr><td>Ing. Lorena Sánchez Barrero</td></tr>
                            <tr><td>Ing. Fernando Albarracín</td></tr>
                            <tr><td>Ing. Angela Margarita Moncaleano Nino</td></tr>
                            <tr><td>Mg. Ing. Guillermina Nievas</td></tr>
                            <tr><td>Mg. Ing. Juan Francisco Linares</td></tr>
                            <tr><td>Ing. Marcelo Chalabe</td></tr>
                            <tr><td>TPN. Lucía Guillén</td></tr>
                        </tbody>
                    </table>
                </div>

                <h2>Comité Científico</h2>
                <div className="table-container">
                    <table className="table">
                        <tbody>
                            <tr><td>Dr. Ing. Carlos Marcelo García</td></tr>
                            <tr><td>Dr. Ing. Nicolás Guillén</td></tr>
                            <tr><td>Dr. Ing. Esteban Manuel Villena Martínez</td></tr>
                            <tr><td>Dr. Ing. María Alejandra Leigue Fernández</td></tr>
                            <tr><td>Ing. Lorena Sánchez Barrero</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Main;