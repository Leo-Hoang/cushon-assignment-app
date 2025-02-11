**Cushon assignment for interview - Leo Hoang**

**STARTUP:**
This project uses both Vite and json-server to run the application.

1. On a terminal, navigate to the root directory /cushon
2. execute: npx json-server --watch db.json --port 5000
3. On another terminal, execute: npm run dev in the same directory

This will start the application on: **http://localhost:5173/**
And the server will run on: **http://localhost:5000/**

**INTRODUCTION / BRIEF**
I was assigned to code an application / website that would allow retail customers to invest in an ISA. This would be seperate from the current Cushon ISA Employers already have.
Whithin the application, customers should be able to pick a single fund from multiple options and an amount which should be recorded once the user has finished.

To tackle the backend data, I decided to go for the following structure:

 "investments": [
    {
      "email": "leo.hoang@cushon.com",
      "fund": "Alternative",
      "amount": "739.67",
      "id": "739b"
    }
  ]

Originally, I had gone for one in which the user would be the top level, and each user would have their own investments. This approach, although easier to code would not offer scalability at the same level of the approach I chose.
Although the assignment specifically states that the user can only pick a single investment / fund, I set it up in a way that could easily be refactored to allow users to have multiple.

