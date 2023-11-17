# Yelpcamp
YelpCamp is a full-stack website project where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project is a part of Colt Steele's web dev bootcamp course on udemy.

This project is being created created using Node.js, Express, MongoDB, and Bootstrap. Passport.js is used to handle authentication.

## Functionalities
Everyone can view the camps and reviews without signing up or logging in.
The user will have to login to edit the campground details or any comments.
The user can only edit/delete the campgrounds and comments that they have added.
All the data will pe persistent and is stored in the awazon cloud.

## Technologies Used:
- HTML5 - markup language for creating web pages and web applications

- CSS3 - used for describing the presentation of a document written in a markup language

- Bootstrap - free and open-source front-end web framework for designing websites and web applications quickly

- DOM Manipulation - is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document

- Node.js - pen-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side

- Express.js - for building web applications and APIs and connecting middleware

- REST - REST (REpresentational State Transfer) is an architectural style for developing web services

- MongoDB - open-source cross-platform document-oriented NoSQL database program to store details like users info, campgrounds info and comments

- PassportJS - authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application

- Data Associations - associating user data with the respective campgrounds and comments using reference method

- Heroku - cloud platform as a service used as a web application deployment model

## Screenshots

### Home Page
![HomePage](https://github.com/yashpd6634/Yelpcamp/assets/79068825/9d6e7b40-a404-4fa1-be43-3f1a4982f1f8)

### Register Page
![Registeration Page](https://github.com/yashpd6634/Yelpcamp/assets/79068825/2b58ac55-71bd-4441-bd5b-935f87691181)

### Campground-list page
![Campground-list page](https://github.com/yashpd6634/Yelpcamp/assets/79068825/c5ba18f2-ad63-466a-a1b5-469931a70faf)

### Non-logged-in Campgroung-view Page
![Non-logged-in Campgroung-view Page](https://github.com/yashpd6634/Yelpcamp/assets/79068825/42f91a79-8338-4567-8f6d-fc654fcc2d7a)

### Creator Campgroung-view Page
![Creator Campgroung-view Page](https://github.com/yashpd6634/Yelpcamp/assets/79068825/2c5d2d03-4c8f-4e06-8ca6-820d320243da)

### Add New Compground Page
![Add New Compground Page](https://github.com/yashpd6634/Yelpcamp/assets/79068825/3dec180c-6308-4dfd-aeaa-7b09fed29d30)

### Edit Compground Page
![Edit Compground Page](https://github.com/yashpd6634/Yelpcamp/assets/79068825/242ad75d-8249-43d8-a94d-0f1bff65b0cb)





## Run it locally
1. Install ```mongodb```
2. Create a cloudinary account to get an API key and secret code

```
git clone https://github.com/yashpd6634/Yelpcamp.git
cd yelpcamp
npm install
```

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:

```
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

Run ```mongod``` in another terminal and ```node app.js``` in the terminal with the project.

Then go to localhost:3000.
