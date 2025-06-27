# React + Vite

GROUP-7 Assignment-3

ANSHIKA SINGH(RollNo:230163) - Worked on pages likes Home Page i.e Home.jsx, Home.css,etc and Product Page i.e Products.jsx,ProductList.jsx,etc and Shop page( Shop.jsx and Shop.css).

SHIVANEE SHRIVAS(RollNo:230974) - Worked on App.jsx, App.css and Authentication part including pages like api.jsx, Auth.jsx, Login.jsx, Login.css,  Register.jsx, Register.css, Navigation.jsx 

Other Two members named ANANYA IYER and VRUTIKA RAO are NOT INVOLVED in this.

In this assignment we made a ecommerce platform using HTML,CSS,Javascript,React.

The webpage includes different sections like:

components: It contains header file which is used to make navbar and files for categoryform,message,popup .

pages: Contains page components for different routes.

Auth: Contains authentication-related pages like Login and Register.

Admin: Contains pages for admin functionality i.e AdminDashboard.jsx,AdminMenu.jsx, AdminRoute.jsx, AllProduct.jsx, CategoryList.jsx, OrderList.jsx, ProductList.jsx,         ProductUpdate.jsx, UserList.jsx

User: Contains user profile page and files named Profile.jsx and UserOrder.jsx

Products: Contains product-related pages like ProductCard.jsx, ProductList.jsx, Products.jsx ,etc which contains all the information about products on home page.

The Home.jsx file is the main landing page of the application. It displays a list of featured products and includes a product carousel that automatically cycles through products every 3 seconds, and included some animation on block having information reagrding currently ongoing deals.

The Home.css contains all the style of Home page.

The Shop.jsx and Shop.css contains all the information of shop page which is linked through home page.

The App.jsx and App.css contains all the pages imported, and contains the function named App() and all the Routing part.

The main.jsx contains again importing all the pages and createBrowserRouter function and the neccesary rounting part , that will connect different pages together.

featuredProducts: The first 6 products from the products array are selected to be featured.

In Auth.js file, the register function is an asynchronous function that sends a POST request to the backend to register a new user.

api.post: Sends a POST request to the /auth/register endpoint with the username and password.

try/catch: Handles potential errors and displays an alert with the error message.