# Movies Web App 

## Backend

---

### Project description

This full-stack project is going to be diveded i two repositories: Frontend (*webapp-react*) and Backend (*webapp-express*).
Each day of work has different goals, mimicking what an actual web developer job consists of.

---

### Day 1 

#### Goals:

- Using a given file, **create a database** with MySQL Workbench
- Create a new **Express application**
- **Connect the app to the database** and verify everything works
- Set up an **INDEX route** to retrieve the list of movies
- Set up a **SHOW route** to retrieve the details of a single movie and its reviews

#### Bonus:

- Add images to the Express project and therefore to the database
- Store the database connection data as environment variables
- Move your API logic into controllers
- Move your routes into a router
- Add a middleware for non-existent routes
- Add a middleware for error handling

#### Bonus Bonus:

Return the average rating of your movies in the INDEX as well

---

### Day 2

#### MILESTONE 1

- Let's set up a new React project using Vite
- Clean up the app by removing unnecessary example files and code
- Install the required dependencies: React Router, Axios, and Bootstrap (if you want to use it)

#### MILESTONE 2

- Create a basic layout for the application and set up the routes for the different pages
- Create 2 pages:
    - The home page, where the list of movies will be displayed 
    - The detail page for a single movie

#### MILESTONE 3

- Configure the backend app (repo *webapp-express*) to accept requests from our React application by installing and setting up the **CORS** middleware
- Make an Ajax call from the React project's home page to fetch the list of books

#### Bonus

- Structure the project in a way that takes advantage of React component reusability and props!
- Add a search field on the movies page to search across all relevant fields in the database (e.g. title, abstract)
- Improve the visual appearance of the application

---

### Day 3

#### MILESTONE 1 

- Connect the list of movies to a movie detail page.  
- Make an AJAX call from the detail page to fetch the details of a single movie, including its reviews.

#### MILESTONE 2  

Display the movie information.

#### MILESTONE 3  

Create a `ReviewCard` component to represent the review information.

#### BONUS  

Use a `StarRating` component to display all the review ratings.

#### BONUS BONUS  

On the backend, start creating a `/movies/:id/reviews` route to add a new review.  

---

### Day 4

#### MILESTONE 1 (BACKEND)  

- Set up an API to save a new review in the database linked to a movie.  
- Test it using Postman and verify that a new review is actually inserted into the database.

#### MILESTONE 2 (FRONTEND)  

- Create a component that contains the review form.  
- Add this component to the movie detail page.  
- When the form is submitted, the new review is saved to the database and displayed on the page, below the existing reviews.

#### BONUS  

Try creating a new movie with image upload using Multer!

---

### Day 5

#### GOAL

Create a Loader Component:
- Build a `Loader` component that can appear on any page of the app.  
- Create and use a Context to allow any component to enable or disable the loader on its page.

#### BONUS  

Customize the look of your app with CSS.

#### BONUS BONUS  

Try validating the fields in your forms!