<?php
/*
* Template Name: Contactanos
*/





get_header();
?>


<main>

    <section class="contact">
        <div class="container">
            <h1 class="contact__title text-center">Contactanos</h1>
            <svg class="contact__line" width="84" height="4" viewBox="0 0 84 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75781 2H81.7578" stroke="#2F1C48" stroke-width="3" stroke-linecap="round" />
            </svg>
            <h2 class="contact__subtitle text-center">Lorem ipsum is common placeholder text used to demonstrate the<br> graphic elements of a document or visual presentation.</h2>

            <div class="row">
                <div class="col-md-6">
                    <div class="contact__information__data">
                        <div class="contact__information__data-text">
                            <h3>Nuestros canales de<br> comunicación</h3>
                            <p>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                        </div>
                        <div class="contact__information__data-text-small mb-4">
                            <h3>E-mail</h3>
                            <p>hola@byfreedom.com</p>
                        </div>
                        <div class="contact__information__data-text-small mb-5">
                            <h3>Whatsapp</h3>
                            <p>+54 9 116363738</p>
                        </div>
                        <div class="contact__information__data-text-redes">
                            <h3>REDES SOCIALES</h3>
                            <div class="d-flex  flex-xl-row flex-column">
                                <p class="mt-md-1">Instragram</p>
                                <p class="mx-xl-4">Facebook</p>
                                <p>Twitter</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="contact__information__form">
                        <h3 class="mb-4">Envianos un mensaje a través del siguiente formulario</h3>
                        <div class="mb-4">
                            <input type="text" class="form-control contact__information__form-input" placeholder="Full name">
                        </div>
                        <div class="mb-4">
                            <input type="text" class="form-control contact__information__form-input" placeholder="Email address">
                        </div>
                        <div class="mb-4">
                            <select class="form-select contact__information__form-select" aria-label="Provincia">
                                <option value="Buenos Aires">Buenos Aires</option>
                                <option value="Catamarca">Catamarca</option>
                                <option value="Chaco">Chaco</option>
                                <option value="Chubut">Chubut</option>
                                <option value="Córdoba">Córdoba</option>
                                <option value="Corrientes">Corrientes</option>
                                <option value="Entre Ríos">Entre Ríos</option>
                                <option value="Formosa">Formosa</option>
                                <option value="Jujuy">Jujuy</option>
                                <option value="La Pampa">La Pampa</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Mendoza">Mendoza</option>
                                <option value="Misiones">Misiones</option>
                                <option value="Neuquén">Neuquén</option>
                                <option value="Río Negro">Río Negro</option>
                                <option value="Salta">Salta</option>
                                <option value="San Juan">San Juan</option>
                                <option value="San Luis">San Luis</option>
                                <option value="Santa Cruz">Santa Cruz</option>
                                <option value="Santa Fe">Santa Fe</option>
                                <option value="Santiago del Estero">Santiago del Estero</option>
                                <option value="Tierra del Fuego">Tierra del Fuego</option>
                                <option value="Tucumán">Tucumán</option>
                            </select>

                        </div>
                        <div class="mb-4">
                            <textarea class="form-control" placeholder="Escribi tu consulta" rows="3"></textarea>
                        </div>
                        <div class="contact__information__form-btn">
                            <button type="submit" class="btn contact__information__form-submit">
                                <h3>Enviar mensaje</h3>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 12H20.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




</main>
</div>
<!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button> -->
</div>



<?php get_footer(); ?>