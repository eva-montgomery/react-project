## Requirements
- No teams this time!
- Redux is optional.
- At least 5 components
- At least 3 pieces of state
- At least 1 API
- Presentations on Monday, Feb 24 2020

## Project Overview
- An application that lets you add and rate wines
- The user is able to add the following values:
    - Wine Name
    - Wine Type (Cabernet, Sauvignon Blanc etc.)
    - Price of the wine
    - Where the wine was bought
    - An image of the label
    - Comments regarding the wine 
- The wines can get rated between 1 and 5, with 5 being the highest rating. Instead of having the typical stars to rate, this application has wine glasses

- You can also get inspired to taste new wines by using the "Search for wines online" functionality

## Future features include:
- The option to edit a wine after adding it
- A filter / search function
- The option to search online for a wine, rate it and add it to the rated wine list
- Add the functionality, to search for new wines and add them to a favorites list "Wines I need to try"

- API used: https://api.globalwinescore.com/

- Set-up
- npx create-react-app mantras
- npm i redux react-redux

## Redux

- actions:
    - ADD_WINE
    - DEL_WINE
    - SEARCH
    - RESULTS
    - LOADING

- reducers:
    []

## React

- components directory
    - WineList
    - WineForm
    - WineSearch
    - WineSearchResults 
  
## React-Redux
- containers directory
    - WineListContainer
    - WineFormContainer
    - WineSearchContainer
    - WineSearchResultsContainer
- mapStateToProps
- mapDispatchToProps    
