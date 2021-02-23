// ------------------------------------------------------------------------------------------------------
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
// ------------------------------
// const port = 7200;

const port = process.env.PORT || 7200;

// -------------------------------------------------------------
   // Static page declaration 

   const HomepagePath = path.join(__dirname,"../public");
   app.use(express.static(HomepagePath));

  
// -------------------------------------------------------------
     ViewsTempPath = path.join(__dirname,"/template/views");
     PartialsPath = path.join(__dirname,"/template/partials");
     console.warn(ViewsTempPath);

// -------------------------------------------------------------
   // file and folder changing by view engine

   app.set('view engine','hbs');
   app.set('views',ViewsTempPath);
   hbs.registerPartials(PartialsPath);

// -------------------------------------------------------------

        app.get("/",(Request,Response)=>
        {
            Response.render("index");
        });

        app.get("/about",(Request,Response)=>
        {
            Response.render("about");
        });

        app.get("/contact",(Request,Response)=>
        {
            Response.render("contact");
        });

        app.get("/weather",(Request,Response)=>
        {
            Response.render("weather");
            console.warn(Request.query.city);

            
        });

        app.get("**",(Request,Response)=>
        {
            Response.render("page-not-found",{ErrorMessage : 'What you mean this page is not found.'});
        });


// -------------------------------------------------------------


   // Routing creation

        // app.get("/",(Request,Response)=>
        // {
        //     Response.send("Home page working");
        // });

        // app.get("/about",(Request,Response)=>
        // {
        //     Response.send("Welcome to about page");
        // });

        // app.get("/contact",(Request,Response)=>
        // {
        //     Response.send("Welcome to contact page");
        // });

        // app.get("/weather",(Request,Response)=>
        // {
        //     Response.send("Welcome to weather information page");
        // });

        // app.get("**",(Request,Response)=>
        // {
        //     Response.send("OOP'S Page not found");
        // });


// -------------------------------------------------------------
app.listen(port,() =>
{
    console.warn('Route porper working');
});