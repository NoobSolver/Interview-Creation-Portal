# Interview_Schedular
- A simple app where admins can create interviews by selecting participants, interview start time, and end time.

# Technology Used

-> Backend -  NodeJS,ExpressJS
-> Frontend - Html/CSS/VueJS
-> Database - MongoDB

# Achieved points 
   ->An interview creation page where admin can create an interview by selecting participants, start time, and end time.

   ->Interview Checker

        In following cases interview will not be scheduled
            -Any of the participants is not available during the scheduled time (i.e, has another interview scheduled)
            -No of participants is less than 2

   ->Interview List so that admins can see upcoming interviews

   ->Admins can edit the interview time

   ->Automatic Emailer emails both the participants 

# How to use 

-> Clone the repo

-> On command prompt run following commands for first time to setup and create database

         install npm
         node first_run.js
         node server.js
         
         
-> After this you can simply use for starting server

          node server.js

-> Go to http://localhost:3000/



# Extension (Backend only) - For Multiple Interviewers and Multiple Interviewee at same time 

-> Files used for testing backend for multiple interviewers and interviewee
             -server_multiple.js
             -data_multiple.js
             -mail_multiple.js

-> Using postman testing has been done 

-> For scheduling ,taken an array of all the id's and validated the interview time according to the scheduled data

-> For Deleting the scheduled interview of multiple interviewers and interviewee used objectID for a object inserted in database.

