<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la página</title>
    <?php wp_head(); ?>
    <style>
        /* Estilos para hacer que el nav sea sticky */

        nav {
            z-index: 10000000000 !important;
        }

        .sticky-nav {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 1000;
            background-color: white;
            display: flex;
            align-items: center;
            z-index: 10000000000 !important;

        }

        .navbar {
            padding: 1rem 0;
            z-index: 10000000000 !important;

        }

        .navbar .navbar-toggler {
            border: none;
        }

        .navbar .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%288, 8, 8, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }

        .navbar .nav-item button {
            background-color: #644EFA;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
        }

        .content {
            margin-top: 100px;
            /* Ajusta este valor según la altura de tu navbar */
        }

        .navbar-brand {
            margin-right: auto;
        }

        .navbar-nav {
            margin-left: auto;
        }

        /* Centrado del contenido dentro del navbar */
        .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .button-nav {
            text-decoration: none;
            /* Button */



            width: 148px;
            height: 56px;

            background: #644EFA;
            border-radius: 8px;
            /* _Button base */

            /* Auto layout */
            padding: 16px 24px;

            border-radius: 8px;
            /* Label */



            /*font-family: 'Inter';*/
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            font-feature-settings: 'liga' off;

            /* White */
            color: #FFFFFF !important;





        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light sticky-nav">
        <div class="container navbar-container">
            <!-- Logo -->
            <a class="navbar-brand" href="<?php echo home_url(); ?>">
                <svg width="203" height="50" viewBox="0 0 203 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <svg width="203" height="50" viewBox="0 0 203 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60.5928 33.5076H52.5766V14.0162H60.0986C64.244 14.0162 66.6324 15.7183 66.6324 18.8753C66.6324 21.2637 65.397 22.4991 64.0793 22.9383C66.2206 23.3226 67.7305 25.2443 67.7305 27.6602C67.7305 31.0094 65.2872 33.5076 60.5928 33.5076ZM56.5573 17.4203V21.9226H60.0986C61.6085 21.9226 62.6243 21.1813 62.6243 19.6714C62.6243 18.189 61.6085 17.4203 60.0986 17.4203H56.5573ZM56.5573 24.9424V30.1034H60.5928C62.5145 30.1034 63.7224 29.1151 63.7224 27.5778C63.7224 25.9581 62.5145 24.9424 60.6477 24.9424H56.5573ZM80.4824 19.1498H84.6278L76.5018 39.8217H72.4388L74.8272 33.6448L68.8151 19.1498H73.0428C75.6233 25.5189 76.5293 28.0445 76.8312 29.8015C77.1332 28.0445 77.9842 25.5738 80.4824 19.1498ZM90.7198 33.5076H86.7706V14.1703H98.7543V17.7654H90.7198V22.2593H97.8011V25.7454H90.7198V33.5076ZM104.258 19.2633L104.884 21.0881C105.619 19.7808 106.899 18.9638 109.16 19.2361L109.133 22.5589C106.464 22.232 104.966 23.1308 104.966 25.3641V33.5076H101.098V19.2633H104.258ZM117.478 18.9638C121.809 18.9638 124.995 21.878 124.832 27.5974H114.019C114.21 29.3405 115.762 30.5934 117.751 30.5934C119.412 30.5934 120.61 29.8035 121.182 28.6869L124.56 29.0409C123.797 31.7373 121.046 33.7799 117.723 33.7799C113.311 33.7799 110.125 30.8385 110.125 26.4263C110.125 22.1503 113.175 18.9638 117.478 18.9638ZM117.478 22.0686C115.572 22.0686 114.128 23.2397 113.992 24.9011H120.91C120.801 23.2397 119.439 22.0686 117.478 22.0686ZM133.703 18.9638C138.033 18.9638 141.22 21.878 141.056 27.5974H130.244C130.434 29.3405 131.987 30.5934 133.975 30.5934C135.636 30.5934 136.835 29.8035 137.407 28.6869L140.784 29.0409C140.021 31.7373 137.271 33.7799 133.948 33.7799C129.536 33.7799 126.349 30.8385 126.349 26.4263C126.349 22.1503 129.399 18.9638 133.703 18.9638ZM133.703 22.0686C131.796 22.0686 130.353 23.2397 130.217 24.9011H137.134C137.025 23.2397 135.664 22.0686 133.703 22.0686ZM154.394 21.3605V13.0809H158.261V33.5076H154.394V31.0564C153.713 32.745 151.834 33.7799 149.464 33.7799C145.134 33.7799 142.573 30.4027 142.573 26.3446C142.573 22.1231 145.27 18.9638 149.655 18.9638C151.479 18.9638 153.331 19.7808 154.394 21.3605ZM150.472 30.321C152.732 30.321 154.394 28.6596 154.394 26.3718C154.394 24.1113 152.732 22.4771 150.472 22.4771C148.129 22.4771 146.495 24.0841 146.495 26.3718C146.495 28.6869 148.129 30.321 150.472 30.321ZM168.207 33.7799C163.74 33.7799 160.527 30.7023 160.527 26.3718C160.527 22.0959 163.74 18.9638 168.207 18.9638C172.701 18.9638 175.915 22.0959 175.915 26.3718C175.915 30.7023 172.701 33.7799 168.207 33.7799ZM168.207 30.2938C170.495 30.2938 172.183 28.6324 172.183 26.3718C172.183 24.0841 170.495 22.4499 168.207 22.4499C165.946 22.4499 164.285 24.0841 164.285 26.3718C164.285 28.6324 165.946 30.2938 168.207 30.2938ZM195.009 18.9638C198.25 18.9638 200.429 21.0609 200.429 24.5471V33.5076H196.561V25.5548C196.561 23.1853 195.417 22.2865 193.974 22.2865C192.476 22.2865 191.25 23.267 191.25 25.5548V33.5076H187.383V25.5548C187.383 23.1853 186.212 22.2865 184.795 22.2865C183.297 22.2865 182.045 23.267 182.045 25.5548V33.5076H178.177V19.2633H181.336L181.99 21.1698C182.807 19.8625 184.142 18.9638 186.13 18.9638C187.927 18.9638 189.453 19.7536 190.351 21.1698C191.305 19.8625 192.803 18.9638 195.009 18.9638Z" fill="#644EFA" />
                        <path d="M37.8003 13.1C35.9003 7.7 31.5003 3.4 26.1003 1.6C23.9003 0.8 21.6003 0.5 19.5003 0.5C17.4003 0.5 15.2003 0.8 12.9003 1.6C7.50027 3.4 3.10027 7.7 1.20027 13.1C-0.999734 19.4 0.000266314 25.5 3.00027 30.2C3.80027 31.6 5.10027 33.4 7.00027 35.8C9.40027 39 12.1003 42 14.9003 44.9C15.6003 45.7 16.4003 46.5 17.2003 47.1C17.3003 47.2 17.4003 47.3 17.5003 47.4C17.8003 47.7 18.1003 47.9 18.4003 48.2C19.0003 48.6 19.4003 49 19.6003 49.1C19.8003 49 20.2003 48.6 20.8003 48.2C21.1003 48 21.5003 47.7 21.7003 47.4C21.8003 47.3 21.9003 47.2 22.0003 47.1C22.7003 46.4 23.5003 45.7 24.3003 44.9C27.1003 42 29.8003 39 32.2003 35.8C34.2003 33.4 35.4003 31.5 36.2003 30.2C39.0003 25.5 40.0003 19.4 37.8003 13.1ZM29.4003 32.8C27.6003 34.2 25.0003 34.9 21.5003 35H17.4003V26.7H24.3003V25.8H17.4003V14.8H25.6003V13.9H16.4003V34.9H9.70027V6.2H20.1003C23.8003 6.2 26.6003 6.9 28.6003 8.2C30.5003 9.6 31.5003 11.5 31.5003 14.1C31.5003 15.6 31.2003 16.9 30.5003 17.9C29.8003 19 28.8003 19.7 27.5003 20.2C29.0003 20.6 30.2003 21.3 31.0003 22.4C31.8003 23.5 32.2003 24.8 32.2003 26.4C32.1003 29.3 31.2003 31.4 29.4003 32.8Z" fill="#644EFA" />
                    </svg>

                </svg>
            </a>

            <!-- Botón para mostrar el menú en dispositivos pequeños -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Lista de elementos -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link  <?php if (get_the_ID() == 12) echo 'nav-select'; ?>" href=" <?php echo get_permalink(12); ?>">Soy Conductor de APP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  <?php if (get_the_ID() == 14) echo 'nav-select'; ?>" href="<?php echo get_permalink(14); ?>">¿Por qué Invertir en ByFreedom?</a>
                    </li>
                    <li class=" nav-item">
                        <a class="nav-link" href="#">Rent a Car</a>
                    </li>
                    <li class="nav-item">
                        <a class="button-nav" href="<?php echo get_permalink(8); ?>">Contactanos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>