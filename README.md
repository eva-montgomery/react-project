# Wine-O-Clock Capstone Project
- https://trello.com/b/4BfbOL4H

## Overview
- An application to add and rate wine
- A user login/account should be required to track the rated items and to view rated wines by other users

- A user account should be required to keep track of the wines rated and to view rated wines by other users
The user account/profile should include:
    - email
    - password
    - first name
    - last name

- When adding a new wine to rate, the user should add the following details:
    - Wine Name
    - Wine Type (Cabernet, Merlot, Chardonnay etc.)
    - Price
    - Bought where
    - Image of wine label
    - Comments (Textfield)
    - Rating between 1-5

- Further Functionalties should include the option to:
    - Edit a rated wine
    - Delete a rated wine
    - Add wines rated by other to a favorite list 
    - Filer through / search the users rated wines
    - Filer through / search other users rated wines

- Routes required:
    - login / logout (/login)
    - signup (/signup)
    - Homepage, Add a new wine (/home)
    - my rated wines overview (/mywines)
    - view all rated wines (/wines)
    - Favorites (/favorites)
    - Search through My Wines (by User Id)
    - Search through All Wines (by Wine Id)
    - header/nav
    - footer

- Backend PostgreSQL Database
    - Table for Users
    - Table for Wines
    - Table for Favorite Wines 


## Requirements 
- React Front-End
- Node.js Back-End
- PostgreSQL Database
- Certbot SSL Certificate 

## Dependencies used front-end:
- Redux
- Multer
- React Router Dom
- React Star Rating Component
- React Hamburger Menu
- Axios

## Dependencies used back-end:
- express
- multer
- upload
- bodyParser
- parseJson
- cors
- session


## Future features include:
- adding a user profile which:
    - is accessible to view by other users
    - includes user data
    - all rated wines by a user 
- a profile page for the user to edit his data
- the option to filter through wines
- a timestamp and the user name / alias added to the rated wine cards
- a top rated wine list