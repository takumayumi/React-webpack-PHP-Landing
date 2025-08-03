# React webpack PHP Landing

**React webpack PHP Landing** is a sample landing page designed to run smoothly in a **PHP environment**, such as WordPress. When you run the build command, the app automatically converts the output HTML into a PHP-compatible format by merging the final HTML with your custom PHP code from `public/index.php`.

Make sure to follow these steps before running the build:

1. Add your custom PHP code to the `public/index.php` file. This could include WordPress-specific PHP or other server-side code.
2. Optimize your images for faster load times and smaller build size.
3. Add `preload` attributes to `<link>` tags for better performance.
4. Use `defer` or `async` in your `<script>` tags to improve loading speed.

> **Note**: Large images may slow down the build process. It's best to use optimized or compressed image assets.

## Features

- **Autoplay Sliders**: Uses Swiper.js for animated, auto-playing content sliders.
- **Go to Top Button**: A button that scrolls back to the top of the page easily.
- **PHP Integration**: The output is converted to `index.php`, and your original PHP code is included automatically.
- **Mobile Responsive**: Layout adjusts to fit phones, tablets, and desktops.
- **Build Optimization**: The output is minified and cleaned, with unused files removed.

## Technologies Used

- **React**: For building the user interface.
- **webpack**: For bundling JavaScript and optimizing the build.
- **Swiper**: For sliders and carousel features.
- **Tailwind CSS 3**: For utility-based responsive styling.

## Credits

- **Images**: Courtesy of [Bowling Tong](https://www.behance.net/bowlingtongt)
- **Logo**: Designed by [Mr. D](https://textfonts.net/author/admin#gsc.tab=0)

> **Note**: Please do not reuse the included images or logo, as they are personal or licensed assets.

## Project Status

This project is complete and no longer actively maintained. It is available for reference, experimentation, or educational purposes.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and share the code for personal or commercial projects, but attribution is appreciated.
