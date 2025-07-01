# React webpack PHP Landing

This project is a sample landing page built using React and webpack, designed specifically to run in a PHP environment. When you export the project using `npm run build`, it automatically translates the output HTML to a PHP-compatible format. If any PHP code needs to be included, it will be inserted at the beginning of the `index.php` file during the build process, ensuring seamless integration with PHP servers.

Before building the project:

1. Add an `index.php` file in public folder containing the necessary code for it to run in WordPress that runs PHP.
2. Optimize images.
3. Ensure link tags include preload.
4. Ensure script tags have `defer`/`async` attributes.

After running the build command, the existing build folder is removed, the code is optimized and minified, and the final HTML is converted to PHP using the code from `public/index.php`. If the project includes large images, the build may take a few minutes. It's best to use optimized images.

## Features

- **Autoplay Sliders**: Includes autoplay sliders using Swiper for a dynamic presentation.
- **Go to Top Button**: Provides a convenient button to quickly navigate back to the top of the page.
- **PHP Compatibility**: Automatically converts the output to PHP-compatible format.
- **PHP Code Injection**: Inserts necessary PHP code at the beginning of the `index.php` file during the build process.
- **Mobile Responsive**: Ensures a seamless experience across different devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **webpack**: Module bundler for JavaScript applications.
- **Swiper**: JavaScript library for sliders and carousels.
- **Tailwind CSS 3**: Utility-first CSS framework for styling.

## Credits

- **Images**: The images used in this project are from [Bowling Tong](https://www.behance.net/bowlingtongt).
- **Logo**: The logo was created by [Mr. D](https://textfonts.net/author/admin#gsc.tab=0).

## Learning

You are welcome to use this project to learn and build your own ideas. Just kindly refrain from using any of the assets, as they are personal or licensed assets.
