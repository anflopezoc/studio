# Guide of Playlist API
***Node/JS Backend Test*** 

## What does this API allow to do?
Users can register on this API to create and manage their music playlists.
Plus: additionally, users can query the Deezer API to search information for an artist.

## What is the technologies used in this API?
This API has created in NodeJS Javascript with the Express JS framework NodeJS, MariaDB(MySQL) and Sequelize ORM for database, Mocha-Chai for testing and Swagger (APi 3.0) documentation.

## How to init the API?
First, you need to install the following programs in order to run this API:

    -NodeJS
    -MariaDB

You can clone or download the API's repository and then you need to create the .env in the Backend-homework folder. The .env file can use the following settings:

    PORT=3000
    DB_HOST='localhost'
    DB_PORT='3306'
    DB_USER='root'
    DB_PASSWORD='root'
    DB_DATABASE='57blocks_homework'
    SIGNATUREJWT='57BlocksSignature'

The .env file settings can be created based on your preferences and settings on the PC for API review and MariaDB.

***Note: this APIS has designed for the create the database, tables and registers default, you don't need to run an SQL query in MariaDB.***

Now, you need to install the API libraries with the following command:

    npm install

If the API libraries have been installed successfully, you can run the API with the following commands:

    npm run start
     
Or

    npm run dev 

This API has unit tests on the account path. You can run API unit tests with the following commands:

    npm run test

***Note: before running unit tests, you must run the API (npm run dev or npm run start) to avoid unit tests failures.***

The server API is running when you can see in terminall "Server in Port 3000" and "DB connection has been established successfully."

If the sercer conections is succesfull, you can review the API in the following URL:

    http://localhost:3000/swagger/


## The Paths

In the API documentation in Swagger you can see two routes, in these routes the backend-homework has been resolved:

### Account 

In this route, users can register and log into the account to create and manage their playlists. The user must log in to get the token to use in the myPlaylists path.

### myPlaylist 


In this path, you can use the token obtained when logging in the authorization button (This button has a padlock).

***Note: this token will expire in 20 minutes after obtaining the token.***

In this path user can create and manage their playlists.

The users can:

    -Show all related user playlists
    -Create the playlist.
    -Show all songs in DB.
    -Add song to playlist.
    -Delete song from playlist.
    -Show the created playlist.
    -Update the title of the playlist.
    -Get information from artists in the Deezer API


Thanks for review this API!

Playlist API created by:

**Andrés Felipe López Ochoa**
>  Backend Developer
>  email: anflopezoc@gmail.com
>  LinkedIn: https://www.linkedin.com/in/anflopezoc/