# Wine-O-Clock Capstone Project
- https://wine-o-clock.evamontgomery.net/ 
- https://trello.com/b/4BfbOL4H
- Backend Repo: https://github.com/eva-montgomery/react-backend

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

## Screenshots
- Login Page
![Screen Shot 2020-03-11 at 7 33 40 PM](https://user-images.githubusercontent.com/55462764/76473733-ce600200-63cf-11ea-9163-1d960e2e9686.png)

- Form to add a new wine
![Screen Shot 2020-03-11 at 7 34 23 PM](https://user-images.githubusercontent.com/55462764/76473746-dae45a80-63cf-11ea-9a38-5a1c42f7836d.png)

- My rated wines
![Screen Shot 2020-03-11 at 7 34 58 PM](https://user-images.githubusercontent.com/55462764/76473755-e2a3ff00-63cf-11ea-97b7-fe8d6276cbca.png)

- Edit a wine
![Screen Shot 2020-03-11 at 7 35 14 PM](https://user-images.githubusercontent.com/55462764/76473764-e8014980-63cf-11ea-8acc-bb79d6683533.png)

- All rated wines
![Screen Shot 2020-03-11 at 7 35 36 PM](https://user-images.githubusercontent.com/55462764/76473738-d324b600-63cf-11ea-9450-fc5641d4f3ac.png)

- My favorites
![Screen Shot 2020-03-11 at 7 36 38 PM](https://user-images.githubusercontent.com/55462764/76473753-e041a500-63cf-11ea-8902-e6d5e6e1c684.png)



## Future features include:
- adding a user profile which:
    - is accessible to view by other users
    - includes user data
    - all rated wines by a user 
- a profile page for the user to edit his data
- the option to filter through wines
- a timestamp and the user name / alias added to the rated wine cards
- a top rated wine list