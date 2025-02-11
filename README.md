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

**CONTENT**
My application starts on the Customer page:
![image](https://github.com/user-attachments/assets/066cdfcf-9dd8-4d38-903e-fcbfd6fd63de)

This page allows the user to see their current investment. A button is located at the button which allows them to navigate to the investment form page.

All of the data is dynamic, with the name changing as well as their investment (if it exists) on this page. We retrieve data using useSelector and not fulling taking advantage of Redux. Of course, with the time we were expected to work on things I had to cut corners and rush more than I would've liked.
Design wise, I'm pretty happy. I took insipiration from Cushon's home page. I spent quite a bit of time creating the navbar. I used css a lot for styling, and tried to avoid inline styles where I could. 

If the button is clicked





**TECHNOLOGIES**
I chose to use the following technologies:

1. Typescript: I am knowledgable with Typescript, and handling data is made much easier and safer.
2. Vite: To build / compile the project. Fast to setup, easy to use and allows for quick testing.
3. Redux: Allowed me  0tomanage global states, 
4. MUI: A great UI framework. I made extensive use of their grids and components.
5. JSON Server: Extremely simple to setup and perfect for the needs of this assignment. Originally, I had set up a whole MySQL server which was a lengthly process. Although a good learning experience, it wasn't neccessary for this assignment.
6. React Hook Form: I only scratched the surfice of the form validation features, but it did allow me to the form structure for the investment page easily.
7. Git: Self explanitory.

If I had more time, I would've liked to use JUnit and run some unit tests. In an application which handles data and especially finance, it's imperative. Unfortunately I planned to only do this at the end, and I wasn't able to.





