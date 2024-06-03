const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

// Función para compilar Sass a CSS
function css(done) {
  src("src/scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("build/css"))
    .pipe(browserSync.stream()); // Recargar el navegador después de compilar
  done();
}

// Función para copiar imágenes sin optimizar
function imagenes(done) {
  src("src/img/**/*").pipe(dest("build/img"));
  done();
}

// Función para iniciar Browser-Sync y observar cambios en archivos
function serve(done) {
  browserSync.init({
    proxy: "http://byfreedom", // Cambia esto a la URL de tu  WordPress LOCAL!!!!
    notify: false,
  });

  // Observar cambios en archivos SCSS, PHP y JS
  watch("src/scss/**/*.scss", css);
  watch("src/img/**/*", imagenes).on("change", browserSync.reload);
  watch("**/*.php").on("change", browserSync.reload);
  watch("src/js/**/*.js").on("change", browserSync.reload);

  done();
}

// Exportar las funciones para que estén disponibles desde la línea de comandos
exports.css = css;
exports.dev = series(css, imagenes, serve); // Incluye 'serve' en la tarea 'dev'
exports.imagenes = imagenes;
