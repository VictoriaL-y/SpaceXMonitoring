# SpaceXMonitoring project documentation

## Preface

This project is a Responsive Web FrontEnd project, created with the purpose of presenting the data from the public API https://github.com/r-spacex/SpaceX-API
which contains information about real SpaceX launches.

The project is already hosted on Github pages and can be accesses here: **https://VictoriaL-y.github.io/SpaceXMonitoring**

## Details

* Being a Responsive Web Application, the project adapts to different screen sized and is optimised for mobile use.

* The project fetches all available launches data from the API endpoint.

* Then the data is displayed on a web page, which includes a SearchBar, Filter Buttons and a list of launches with an image for each launch and certain information such as status, date and links.

* The Search works by the name and/or date of each launch.
Upon pressing on the SearchBar the user is presented with a smaller scrollable list of possible "search terms" which are real launch details from the API data.

* The Filter Buttons represent the different launch states such as "Successful", "Upcoming" and "Failed". The "All" filter disables other filters and clears the Searchbar.

* Using both a "search term" and a filter is not supported at the moment.

* **React.js** is the main UI framework used for writing the project.

* The **Bootstrap** framework is used for the structuring of the web page and setting of CSS rules.
  
* The **Font Awesome** free service is used for providing icons.

* The **Cloudinary** service is used for getting pre-saved images for greated efficiency, providing control over the quality of the images.

## Install depencencies & Run the project locally

Clone the repository with `git clone RepoUrl` to your local machine, then open a terminal in the folder or open in the IDE of choice (e.g. VSCode)

### Node package manager

Using the terminal, first install dependencies with

`npm install`

### Bootstrap

To install Bootstrap

`npm install bootstrap`

### Font Awesome

To install Font Awesome

`npm i --save @fortawesome/fontawesome-svg-core`

`npm i --save @fortawesome/free-solid-svg-icons`

`npm i --save @fortawesome/free-regular-svg-icons`

`npm i --save @fortawesome/free-brands-svg-icons`

`npm i --save @fortawesome/react-fontawesome@latest`

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.