# React webpack PHP Landing

This project is a sample landing page built using React and webpack, designed specifically to run in a PHP environment. When you export the project using `npm run build`, it automatically translates the output HTML to a PHP-compatible format. If any PHP code needs to be included, it will be inserted at the beginning of the `index.php` file during the build process, ensuring seamless integration with PHP servers.

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
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (includes npm)
- [Visual Studio Code](https://code.visualstudio.com/)

1. **Open the Project in Visual Studio Code**

2. **Open terminal**

3. **Install dependencies**

   ```
   npm install
   ```

Make sure to execute commands from the root of your project directory.

### Development Mode

To start the project in development mode with live-reloading, use:

```
npm run dev
```

This command will launch the project, and any changes you make will automatically reflect in the browser for a smooth development experience.

### Production Build

Make sure to implement the following before building the project:

1. Add an index.php file in public folder containing the necessary code for it to run in WordPress that runs PHP.
2. Optimize images.
3. Ensure link tags include preload.
4. Ensure script tags have defer/async attributes.

If you are ready to build your project for production, you can proceed with the build process using the following command:

```
npm run build
```

This command removes an existing build folder, optimizes and minifies codes for better performance, and transform built html to php with the php codes from public/index.php. Please wait for a few minutes, especially if there are many large-sized images; it may take longer. It's best to have an optimized image ready.

## Credits

- **Images**: The images used in this project are from [Bowling Tong](https://www.behance.net/bowlingtongt).
- **Logo**: The logo was created by [Mr. D](https://textfonts.net/author/admin#gsc.tab=0).
