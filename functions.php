<?php

add_filter('use_block_editor_for_post', '__return_false', 10);


function byfreedom_setup_theme()
{
    register_nav_menus(array(
        "primary-menu" => __("Primary Menu", "byfreedom"),
    ));
}

add_action("after_setup_theme", "byfreedom_setup_theme");

function byfreedom_assets()
{
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css', array(), '5.3.0-alpha1');
    wp_enqueue_style('theme-style', get_template_directory_uri() . '/build/css/app.css', array(), filemtime(get_template_directory() . '/build/css/app.css'));
    wp_enqueue_style('owl-carousel', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');
    wp_enqueue_style('owl-carousel-theme', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css');
}

add_action('wp_enqueue_scripts', 'byfreedom_assets');


function byfreedom_scripts()
{
    $archivo_js = get_template_directory_uri() . '/js/bootstrapv5-scripts.js';
    $archivo_js1 = get_template_directory_uri() . '/js/scripts.js';

    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.6.0.min.js', array(), '3.6.0', true);


    wp_enqueue_script('popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.10.2/umd/popper.min.js', array('jquery'), '2.10.2', true);


    wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js', array('jquery', 'popper'), '5.3.0-alpha1', true);

    wp_enqueue_script('custom-script', $archivo_js, array('jquery'), '1.0', true);
    wp_enqueue_script('custom', $archivo_js1, array('jquery'), '1.0', true);

    wp_enqueue_script('owl-carousel', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', array('jquery'), null, true);
}

// Engancha la función a la acción 'wp_enqueue_scripts'
add_action('wp_enqueue_scripts', 'byfreedom_scripts');
