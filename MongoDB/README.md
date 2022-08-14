# MongoDB


# SHELL COMMANDS:


            show dbs : see list of databases
            switch 
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



# Sec 1

Data Directory path - C:\Program Files\MongoDB\Clientr\6.0\data\

5. MongoDB Ecosystem

   self-Managed/Enterprise Atlas (Cloud) Mobile CloudManager/OpsManager (not covered in this course) BI Connectors MongoDB Charts

   Stitch - new serverless option (gives more than data storage such as): - Serverless Query API - Serverless Functions (unrelated to database) allows me to execute javascript in the server - Database Triggers - Real-Time Sync

6. General Setup Instructions & Installing MongoDb MAC

7. Installing MongoDB on windows.

setup:

 
INSTALLING MONGODB FOR WINDOWS

when running the installation

    - choose custom installation
    - Uncheck Install Mongodb as a service
    - Uncheck Install Mongodb Compass
    - saveing it in C drive as mongodb instead of default
    - in C drive touch data and in that touch db

in windows powershell

    In C:\Users\josep > New-Item -ItemType directory -Path C:\data\db
or create thease folders manually

next with the code editors we can create .bat files for our mongod and mongosh exe's

    "StartMongod.bat"

        @echo off
        cd "C:\mongodb\bin"
        start mongod.exe
        exit

    "StartMongosh.bat"

        @echo off
        cd "C:\mongodb\bin"
        start mongosh.exe
        exit

can be on the desktop for ease of access

copy the path of the mongodb bin file and add it to the environment path by editing the system variaples, selecting path and selecting edit. 

        this way it dosent matter where we run the commands

For version 6 mongo shell must be installed seporate

now in a powershell I can run the 'mongod' command then in another run the 'mongosh' to open the shell

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

      - db.passengers.fing({}, {name: 1, _id: 0, age: 0})

now we get the names without all the id's included,

This data filtering is happening on the mongoDB server before its sent to the app. This is what we want.

28. Embedded Documents & Arrays - The Theory

REVIEW THIS

29. Working with Embedded Documents

REVIEW THIS

30. Working with Arrays

REVIEW THIS


# Sec3

SUMMARY: 

      Modeling Schemas
            - Schemas should be modeled based on your application needs
            - Imporntant factors are: Read and write frequency, relations, amount(and size) of data

      Modeling Relations
            -Two options: Embedded documents or references
            -Use embedded documents if you got one-to-one or one-to-many relationships and no app or data size reason to split
            -Use references if data amount/ size or application needs require it or for many-to-many relations
            -Exceptions are always possible => keep app requirements in mind

Resetting database:

      To get rid of your data, you can simply load the database you want to get rid of (use databaseName) and then execute db.dropDatabase().

resetting collection

      Similarly, you could get rid of a single collection in a database via db.myCollection.drop().

This section is about:

            - Understanding Document Schemas & Data Types
            - Modeling Relations
            - Schema Validation

Datatypes

      Text
      Boolean
      Number
            - Integer(int32)
            - NumberLong(int64)
            - Number Decimal
      ObjeceId
      ISODate --- Timestamp
      Embedded Document
      Array


RESOURCES:

      The MongoDB Limits: https://docs.mongodb.com/manual/reference/limits/

      The MongoDB Data Types: https://docs.mongodb.com/manual/reference/bson-types/

      More on Schema Validation: https://docs.mongodb.com/manual/core/schema-validation/


# SEC4 Exploring the shell & The Server

Into :

      -Start MongoDB server as a Process & Service
      -Configure Database & log Path (and Mode)
      -Fixing Issues

Refresher:

      Start database in powershell:
            mongod

      Connect db to shell in another powershell:
            mongosh

mongod flags:
      
      Show flags using powershell:
            mongod --help 

configuring database path:

      in the mongod file we created during installation (in c drive) we add folders data amd db (can be named whatever)

      setting custom path for database:
            mongod --dbpath C:\mongodb\db
            
      setting up custom path for logs and database
            mongod --dbpath C:\mongodb\db --logpath C:\mongodb\logs\log

the fork command is not availabile on windows supposidly

for windows:

      Run mongodb as a service in admin command prompt
            net start MongoDB

      Stop as service with admin command prompt
            net end MongoDB
this is how we use a background service instead of a foreground service

63. Using Config File

we can create a config file anywhere we want

      * lets create mongod.cfg in our mongod folder
      Actually it looks like i already have my config file setup from installation within at this location:
            C:\mongodb\bin

Setting the path to the Config file

      - we can use the --config flag or -f for short

      mongod -f C:\mongodb\bin\mongod.cfg

64. Shell Options and help

            mongosh --help
we dont need any of thease options, but if we open the mongo shell. here we can simply enter:

            help

this shows us shell options 

      switch to test database :
            use test

      shows options for database :
            db.help :

      options for the database:
      db.test.help

RESOURCES :

      Helpful Articles/ Docs:

      More Details about Config Files: https://docs.mongodb.com/manual/reference/configuration-options/

      More Details about the Shell (mongo) Options: https://docs.mongodb.com/manual/reference/program/mongo/

      More Details about the Server (mongod) Options: https://docs.mongodb.com/manual/reference/program/mongod/

# SEC6

      insertOne()

      insertMany()

      insert(): deprecated
            - dosent show inserted id
            - easier to make mistakes 
            - overall less helpful

71. Understanding insert methods

      use contactData

Inserting one at a time.

      db.persons.insertOne({name: "Max", age:30, hobbies: ["Sports", "Cooking"]})

Inserting many at once.

I can insert just one as well , but needs to be within an array like so:

      db.persons.insertMany([{name: "Anna", age: 29, hobbies: ["Sports","Yoga"]}])

and of corse multiple (without hobbies this time)

      db.persons.insertMany([{name: "Maria", age: 29},{name: "Chris", age: 24}])
each objects in an array seporated by ","

72. Ordered Inserts.

Normally we can insert like this and the _id's are generated for us:

      db.hobbies.insertMany([{name: "Sports"}, {name:"Cars"}])

Instead we can add our own ids, in this case the same as the name:

      db.hobbies.insertMany([{_id: "sports", name: "Sports"}, {_id: "cars", name:"Cars"}])

if we insert 2 , one with a new id and one with an id that already exists:

      db.hobbies.insertMany([{_id: "yoga", name: "Yoga"}, {_id: "cars", name:"Cars"}])
here we get a duplicate error key because cars is already an id.

      - it also shows me that 1 item was inserted, 
      - meaning the document with the unique id made it even though there was an error.
      - in this case the first doucment made it through then there was an error. 
      - a 3rd document would not have made it through even with a uniqued as by default mongo stops the prossess in the case of an error. 

To change this behavior:

      db.hobbies.insertMany([{_id: "yoga", name: "Yoga"}, {_id: "cars", name:"Cars"},{_id: "Hoes", name:"hoes"}], {ordered: false})

creating a document outside of the array after a ',' within a object. We can add configuration.  with ordered:false we should get valid inserts after an error. 

Theres no option to rollback the entier operation in the case of a fail. 

74. writeConcern

            db.persons.insertOne({name:"Chrissy", age: 41}, {writeConcern: {w: 0}})
in the case above there is no backup. This can be good for something like stock data where its ok if we miss a couple seconds of data. Its also the least labor intensive. 

      db.persons.insertOne({name: "Michael", age: 51}, {writeConcern: {w: 1, j: false}})
same result above but if we change name and set it to true: 

      db.persons.insertOne({name: "Michaela", age: 51}, {writeConcern: {w: 1, j: true}})
it takes a bit longer because its writing a backup. 

adding a timeout: 

      db.persons.insertOne({name: "Alea", age: 21}, {writeConcern: {w: 1, j: true, wtimeout: 200}})

76. Importing Data

            - download mongodb database tools: https://www.mongodb.com/try/download/database-tools

            - get zip, unzip, place in contents in bin file (from the bin file to the bin file)

            - exit mongosh for regular shell 
            - keep mongod running
            - navigate to the folder with the json file to import
            
            mongoimport tv-shows.json -d movieData -c movies --jsonArray --drop

                  if not in that file I can specify full path instead
      



RESOURCES:

      https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/

      insertMany(): https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/

      Atomicity: https://docs.mongodb.com/manual/core/write-operations-atomicity/#atomicity

      Write Concern: https://docs.mongodb.com/manual/reference/write-concern/

      Using mongoimport: https://docs.mongodb.com/manual/reference/program/mongoimport/index.html

# SEC 7 Read Operations - A Closer Look


in general we will be working with:

      Methods, Filters & Operators

81. Operators

            - Read
            - Update
            - query Modifiers (deprecated)
            - Aggregation

82. Query Selectors & Projection Operators

Query Selectors

      - Comparison
      - Evaluation
      - Logical
      - Array
      - Element
      - Comments
      - Geospatial (covering in seporate module)

Projection Operators

      - $
      - $elemMatch
      - $meta
      - $slice

83. Understanding "findOne()" & "find()"

the following is assuming we imported said data in previous lesson 

            use movies

            db.movies.findOne()
                  simply returns first document
            
            db.movies.findOne({})
                  first with matching parameters

            db.movies.find()
                  all docs(first 20 with in the shell)

Filtering for a document: works with  "find" or "findOne"

      db.movies.find({name: "The Last Ship"})

if theres multiple documents with that criteria we chan choose weathe want to find one or multiple options by choosing find and find many

84. Working with Comparison Operators

there are all kinds of operators to be found in the docs

      equal:
            $eq
            
      not equal:
            $ne

      less than:
            $lt

      less or equal:
            $lte

      greater than:
            $gt

      greater or equal:
            $gte

      included:
            $in

      not included:
            $nin

            db.movies.find({runtime: 60})
is the same as this

      db.movies.find({runtime: {$eq: 60}})
            equal
      
      db.movies.find({runtime: {$ne: 60}})
            not equal

      

85. Querying Embedded Fields & Arrays

            db.movies.find({"rating.average": {$gt: 7}})
finds all movies with a rating greater than 7 

      db.movies.find({genres: "Drama"})
filtering for the genera (case sinsitivity is imporntant), finds all arrays containing "Drama"

      db.movies.find({genres: ["Drama"]})
however this will will only return with an array matching the exact contents

      db.movies.find({runtime: {$in: [30, 42]}})
shows only options with runtimes of either 30 or 42 (included)

      db.movies.find({runtime: {$nin: [30, 42]}})
this shows movies with runtimes that are anything but 30, 42 (not included)


87. "$or" and "$nor"

            db.movies.find({$or: [{"rating.average": {$lt: 5}}, {"rating.average":{$gt: 9.3}}]})
finds all documents witgh rating lower than 5 and greater then 9.3 , but nothing inbetween. either lower OR higher. 

            db.movies.find({$nor: [{"rating.average": {$lt: 5}}, {"rating.average":{$gt: 9.3}}]})
return all documents where neither of the conditions are met, it this case returning between 5 and 9.3

      db.movies.find({$or: [{"rating.average": {$lt: 5}}, {"rating.average":{$gt: 9.3}}]}).count()

      db.movies.find({$nor: [{"rating.average": {$lt: 5}}, {"rating.average":{$gt: 9.3}}]}).count()

88. Understanding the "$and" Operator

just like $or, $and takes an array of documents

      db.movies.find({$and: [{"rating.average": {$gt: 9}}, {genres:"Drama"}]})
this gives us high quality dramas. we can add more than 2 perameters as well 

can do the same like this to

      db.movies.find({"rating.average": {$gt:9}, genres: "Drama"}).count()
 $and is the default , 

      db.movies.find({genres:"Drama", genres: "Horror"}).count()
though this works in the shell, is incompatable with json. only the last key with same name is saved 

      db.movies.find({$and: [{genres: "Drama"}, {genres: "Horror"}] }).count()
To look for different values on the same field , we use $and 

89. Using "$not"

            db.movies.find({runtime:{$not: {$eq: 60 }}}).count()
all movies with runtime NOT 60 

90. 