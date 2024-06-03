# Proyecto de WordPress con Gulp

Este proyecto utiliza Gulp para automatizar tareas de desarrollo en tu instalación de WordPress. A continuación, se describen los pasos necesarios para configurar y ejecutar el proyecto.

## Requisitos

- Node.js (se recomienda verificar la versión compatible con el proyecto)
- npm (gestor de paquetes de Node.js)
- Servidor Apache local con una instalación de WordPress

## Instrucciones de Instalación

### Paso 1: Instalar Dependencias

1. Abre una terminal en el directorio del proyecto.
2. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```sh
   npm install

Verifica la versión de Node.js para asegurarte de que estás usando una versión compatible con el proyecto:


###Paso 2: Configurar la URL de WordPress
Asegúrate de tener un servidor Apache local configurado y una instalación de WordPress en funcionamiento.

Obtén la URL de tu instalación local de WordPress.

Abre el archivo gulpfile.js en el editor de tu preferencia.

Ve a la línea 23 y reemplaza la URL existente con la URL de tu instalación local de WordPress. Debería verse algo así:
   
   const siteUrl = 'http://tu-wordpress-local.com';

###Paso 3: Ejecutar Gulp
 Una vez configurada la URL, puedes ejecutar Gulp para comenzar a automatizar tareas de desarrollo:


gulp dev


Esto configurará Gulp para que comience a observar cambios en tus archivos y realizar tareas automatizadas como recargar el navegador, compilar CSS/Sass, entre otros.
