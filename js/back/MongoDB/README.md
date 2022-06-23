# MongoDB

# Sec 1

5. MongoDB Ecosystem

   self-Managed/Enterprise Atlas (Cloud) Mobile CloudManager/OpsManager (not covered in this course) BI Connectors MongoDB Charts

   Stitch - new serverless option (gives more than data storage such as): - Serverless Query API - Serverless Functions (unrelated to database) allows me to execute javascript in the server - Database Triggers - Real-Time Sync

6. General Setup Instructions & Installing MongoDb MAC

7. Installing MongoDB on windows.

i did this in another course already so im going to skip it for now

8. Installing MongoDB Shell

              - look up mongoDB shell on google and download latest version

              - install it and place the 'mongosh.exe' and the 'mongocryptd-mongosh.exe' into the bin file

   now when we open our database we can also use the new mongo shell by opening 'mongosh.exe'

9. Installing mongoimport

10.   Time To Get Started!

            -  open mongoDB
            -  open mongosh
            -  press enter in mongosh
            -  see list of dbs:
                  >show dbs

create a database with an item that has a price:

               > db.products.insertOne({name: "A Book", price: 12.99})
               {
                     "acknowledged" : true,
                     "insertedId" : ObjectId("61c18268ab576446eb9ca3e5")
               }

to view the database we just created:

         > db.products.find()
         add '.pretty' to format the output

11. Shell vs Drivers

Drivers are a way to communicate with the database using code instead of the shell. Theres a different driver for each different programing language. The core features are the same.

12.   MongoDB + Clients: The Big Picture

                 APPLICATION:
                    - Frontend(UI)
                    - Backend(Server)
                       drivers: (communicates with mongodb server)
                          - node.jf
                          - java
                          - python
                          - ...

      MongoDB Shell can communicate with the mongodb server as well as the drivers.

                 DATA:
                    MongoDB Server

13.   Course Outline

14.   How To Get The Most Out Of The Course

15.   CRUD & Mongo db

CREATE:

      - insertOne(data, options) : insert ond document into a collection
      - insertMany(data, options) : insert many documents

UPDATE:

      - updateOne(filter, data, options)
      - updateMany(filter, data, options)
      - replaceOne(filter, data, options)

READ:

      - find(filter, options)
      - findOne(filter, options)

DELETE:

      - deleteOne(filter, options)
      - deleteMany(filter, options)

Review this for sure, good review of mongoDb options for CRUD.

23. Understanding "insertMany()"

24. Understanding "find()" & the Cursor Object

27 Understanding Projection

lets say we have information in the database that we dont need to show in the application. We can send it all to the application and have it sorted out there but sending unneeded data is a waste of energy.

      - use insertMany to input the resources in lesson 23

We can use 'db.passengers.find()' to see what we added to the collection. Now lets say we just want the names of the passengers. we can use 'passengers.find()' but also add in arguments like so:

      - db.passengers.find({},{name: 1}).prettier()

this requests only the names of the massengers. We leave the first document(argument) empty, then we place the name of the key we want to request (name) and on the other side we put 1 which stands for show

we can exclude something by using the key and 0:

      - db.passengers.fing({}, {name: 1, _id: 0, age: 0}).pretty()

now we get the names without all the id's included,

This data filtering is happening on the mongoDB server before its sent to the app. This is what we want.

28. Embedded Documents & Arrays - The Theory

REVIEW THIS

29. Working with Embedded Documents

REVIEW THIS

30. Working with Arrays

REVIEW THIS
