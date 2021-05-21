# My Daily Dashboard

Code Institute - Interactive Frontend Development Milestone Project.

This project is a single webpage, which provides a dashboard with recommendations and information on a daily basis.

## [Live website in github pages](https://jacqueline-kraus.github.io/MS2-My-Daily-Dashboard/)
--- 
# Table of contents
- [UX](#ux)
    - [Website owner business goals](#website-owner-business-goals)
    - [User goals](#user-goals)
    - [User stories](#user-stories)
    - [Structure of the website](#structure-of-the-website)
    - [Wireframes](#wireframes)
    - [Surface](#surface)
- [Features](#features)
    - [Existing features](#existing-features)
    - [Features left to implement](#features-left-to-implement)
- [Technologies used](#technologies-used)
- [Code Validation](#code-validation)
- [Testing](#testing)
    - [Funcionality Testing](#functionality-testing)
    - [Compatibility Testing](#compatibility-testing)
    - [User stories testing](#user-stories-testing)
    - [Bugs and problems](#bugs-and-problems)
- [Deployment](#deployment)
- [Credits](#credits)


#  UX 

## Website owner business goals
- As the website owner, the goal is to provide a centralised dashboard with different information and recommendations for the day.

## User goals
- User is happy by reading daily a joke
- User can refresh to get another joke
- User is informed about the weather forecast daily
- User is able to change the location for the weather forecast
- User receives daily recommendation on what movie to watch
- User can read a short description of the movie or refresh to get another movie recommendation
- User receives daily recommendation on which meal to prepare
- User can read a descrption of ingredients and preparation manual for recommended meal
- User can refresh to get another meal recommendation
- User has everything within one dashboard
- User has the option to read a FAQ, in doubt of how to use the dashboard

## User stories
### As a business owner:
- I want to give information and recommendation on a daily basis in form of a dashboard to have everything in one place
- I want to provide a clear, easy understandable dashboard with the option to refresh the items

### As a user:
- I want to be in a good mood by laughing about a joke
- I want to know the daily weather forecast
- If I change my location, I still want to know the daily weather forecast, but for the new location
- I want to have a recommendation on which movie I could watch
- I want to have a recommendation on what I could cook and eat
- If I don't like any of the recommendations given, I want to have a new recommendation
- I want all of this in one place without needing to open 4 different apps

## Structure of the website
The website is optmized for all devices and screensizes (desktop, mobile and tablet). It is easy to understand and therefore user friendly designed. It has a clear structure of different elements, that one may need in their daily life. In the header of the page is a FAQ button, for explaining the website. For getting more information each element block has a button which opens a modal. The element blocks that are refreshable have also a button to refresh and get a new item.

## Wireframes
Wireframes can be found here: [WIREFRAMES](https://github.com/jacqueline-kraus/MS2-My-Daily-Dashboard/blob/main/readme-files/My_daily_dashboard.pdf)

## Surface
### Fonts
The 2 fonts used are Roboto Mono and Lato (by Google Fonts). Roboto Mono is used for all headlines and buttons. Lato is used for all other kinds of texts. As a backup I used everywhere "sans-serif".

### Colors
To visually appear comic-like I used mainly 2 colors:
- body and refresh button background-color: #7faddb
- header and button background-color: #ea632b
- other background-color (content blocks and modals): #fff
- color of font is everywhere black.

### Images
- I did not use any images except the ones provided by the different [APIs](#technologies-used)
- Icons used are provided by [https://fontawesome.com/](https://fontawesome.com/)

# Features

## Existing Features
### FAQ:

### Joke of the day:

### Weather today:

### Change Location for weather:

### Movie today:

### Meal of the day:

### Refresh item:


## Features left to implement:
- Joke/ Meal/ Movie: It is not possible yet to go back if hitting refresh by mistake. Especially for "Meal" this feature would be important for the future, as the ingredients list & preparation of recipe can be easily lost. First I would need to make sure each recipe has a valid URL (source), then I would integrate this URL or add a option to bookmark the URL.

- Weather report: At the moment with refreshing the page, the weather location is what the geolocation DB detects as your location. Ideally the website would remember the las used location and also show it after the next refresh. The way to implement this would be by using cookies or other possibilities to store data in the browser.


# Technlogies used:
- [HTML](https://en.wikipedia.org/wiki/Hypertext_Markup_Language): for structuring the website
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets): to style the HTML code
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript): for interactivity on the website
- [JQuery](https://jquery.com/): as a JavaScript library
- [Bootstrap v4.6](https://getbootstrap.com/): for responsiveness, additional style and modals
- [Fontawesome](https://fontawesome.com/): as an icon library
- [Google Fonts](https://fonts.google.com/): as a font resource
- [Balsamiq](https://balsamiq.com/): for creating wireframes

- [Github](https://github.com/): for hosting the projects repository and creating a live page with [Github pages](https://pages.github.com/)
- [Visual Studio Code](https://code.visualstudio.com/): as a IDE (Integrated Development Environment) for developing the project
- [Git](https://en.wikipedia.org/wiki/Git): for version control

### APIs:
- [JokeAPI](https://sv443.net/jokeapi/v2/): Free API to get jokes. Usable without API token. Rate Limiting: 120 calls per minute.
- [Geolocation DB](https://geolocation-db.com/): Free API to get geolocation of user. Usable without API key. No Rate limiting.
- [Openweathermap](https://openweathermap.org/current): Free API to get the current weather report. Need account to get API key. Rate Limiting: 60 calls per minute and 1,000,000 calls per month.
- [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction): Free API to get trending movies. Need account to get API key. Rate Limiting: No limit.
- [TheMealDB](https://www.themealdb.com/api.php): Free API to get random meal recipes. Usable with provided test API key. Rate Limiting: No limit of calls, but a limit of 100 items with the test API key.

### Technology used that is required by bootstrap for some functionality to work:

- [jQuery](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Popper.js](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Javascript](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

# Code Validation
- [JShint](https://jshint.com/) to validate JavaScipt code
- [W3 CSS Validator](https://jigsaw.w3.org/css-validator/) to validate CSS code
- [W3 HTML Validator](https://validator.w3.org/) to validate HTML code

# Testing

## Functionality testing
For testing responsiveness and styling I used for the project [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools).

## Compatibility testing
The website was tested through virtual devices with Chrome Developer Tools.

Browser tested: Google Chrome and Safari.

The website was tested on following hardware devices:
- Macbook Air with MacOs Catalina
- Huawei P30 Pro with Android 10
- Google Pixel 2XL with Android 11
- Microsoft Surface 7 Pro with Windows 10

## User stories testing
### As a business owner:
- I want to give information and recommendation on a daily basis in form of a dashboard to have everything in one place
    > User can laugh about a joke, see the weather report, finds a movie recommendation and a meal recommendation for the day.

- I want to provide a clear, easy understandable dashboard with the option to refresh the items
    > User can find each item easily and is able to refresh the refreshable items (joke, movie, meal), if needed.

### As a user:
- I want to be in a good mood by laughing about a joke
    > The user can laugh about at least one joke a day.
- I want to know the daily weather forecast
    > The user can find the daily weather report for his/her location.
- If I change my location, I still want to know the daily weather forecast, but for the new location
    > By clicking on the button "change location", typing a new location and click on "save changes" the user is able to change his/her location.
- I want to have a recommendation on which movie I could watch
    > The user finds at least one recommendation for a movie to watch per day.
- I want to have a recommendation on what I could cook and eat
    > The user finds at least one meal recommendation per day including an indgredients list and preparation steps.
- If I don't like any of the recommendations given, I want to have a new recommendation
    > The user can do that by clicking on the refresh button, which is next to the headline of each item (except the weather report).
- I want all of this in one place without needing to open 4 different apps
    > The user finds all recommendations and information on one single page.


## Bugs and problems 
- JokeAPI: while developing the website, the JokeAPI had several times very low Uptime. So when refreshing, there wasn't shown any joke at all anymore. There is nothing I could do about it than wait for the API to work again. That lead me to implement default texts (e.g. "Sorry xxx could not be loaded")for all elements which are automatically filled with API data.

- Geolocation DB: Does not always show the exact geolocation. I included an alert that is shown if the location could not be detected at all when entering the page. If there is a location shown, but it is not the correct one, the user has the option to change manually to the right location.


# Deployment
## [Github pages](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
1. Go to repository 
2. Click on "Settings"
3. Scroll until section "GitHub Pages"
4. Select on the "source" dropdown menu the "master branch" option
5. A success message (in green) appears and it shows you the link for your live preview page in Github Pages.

## [Local deployment](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
1. Go to repository
2. Click on the button "code"
3. Select the "HTTPS" option.
4. Copy the URL presented
5. Open your Terminal
6. Create a directory for storing this repository
7. Type "git clone" and paste the URL in that you previously copied
8. Press enter to create local clone repository

# Credits

## Content
    

## Media

## Problem solving helpers
- [w3schools.com](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn)
- [stackoverflow](https://stackoverflow.com/)
- [Bootstrap documentation](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

## Code
- [Bootstrap](https://getbootstrap.com/): for grid, form and styling of the website
- [Google Fonts](https://fonts.google.com/): for the fonts used
- [Fontawesome](https://fontawesome.com/): for the icons