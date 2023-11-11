const express = require('express'); // Import express
const dotenv = require('dotenv'); // Import dotenv
const userdata = require('./Data/data'); // Importing the data from the data folder

const app = express(); // Make an instance of express
dotenv.config(); // To use the .env file

//This is how we create API's in using express
//Creating a api for get
app.get('/' , (req , res) => { res.send("API is running successfully")} );

app.get('/api/users' , (req , res) => {res.send(userdata);});

//Creating a API to get a single user
app.get('/api/users/:id' , (req ,res) => {

    //console.log(req.params.id)
    const singleUser = userdata.find((u) => u.id === req.params.id);
    res.send(singleUser);

});

const PORT = process.env.PORT || 5000; // We are using the port number from the .env file. If it is not available then we will use the port number 5000


app.listen(PORT , console.log("Server is running on port ${PORT}")); // Make the server on port 5000 (you can enter any port you want.any port that is not used by another application)
//We don't want to make our server public like this. So we have to create a .env file and add the port number there.
//We have to install a package called dotenv using npm install dotenv

