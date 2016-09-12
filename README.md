## Integer Heroes

### Background

Integer Heroes is a math game for late primary to early middle school students. It provides students with a visual representation of integer addition and subtraction so that they can develop a stronger conceptual understanding.

In Integer Heroes, students are first given an integer operation problem (ie. 5 + (-9)= ?). Then, they have to decide the appropriate way to represent each of the numbers in the problem. In this game, superheroes represent positive numbers, and supervillains represent negative numbers. In the case of 5 + (-9), the students would select 5 heroes to represent the positive five, and 9 villains to represent the negative nine.

Next, they have to make a decision on what happens when the different characters "meet" each other. In the case of 5 + (-9), 5 of the superheroes cancel out 5 of the supervillains, which leaves four supervillains left for an answer of -4.

One key concept that students also have to learn at this age is understanding multiple representation of the same problems. With this in mind, the design of this game will include a scrollable number line at the bottom of the page that will concurrently represent the scenario that is being played out by the student on top with the heroes and villains.

The game will have multiple levels for the students. The second level will be a flipped version of level one, where students have to choose the correct numbers to represent the superheroes and supervillains that are displayed. The third and fourth level will deal with subtraction, and the fifth level will be a mix of both types of problems.

### Functionality & MVP  

In this game, students will be able to:

- [ ] Select the correct superhero/villain representation of integers
- [ ] Determine what happens to the characters when they meet and what the    correct outcome would be.
- [ ] Manipulate the number line to correctly match the math problem.
- [ ] Advance through different levels to expand their conceptual knowledge of integer operations

In addition, this project will include:

- [ ] An About modal briefly explaining how to interact with the game
- [ ] A production Readme

### Wireframes

This app will consist of a single screen that is divided into two subsections (the area with the heroes/villains, and the area with the number line), as well as nav links to the Github, my LinkedIn, and the About modal. Students will be able to choose between three different heroes to drag on to the screen, and three different villains to drag on to the screen to represent the math problem. Then, pop ups will come up asking them to make a decision on what they believe will happen when the characters meet, as well as to provide an answer on what the outcome would be.

![wireframe](./wireframe.png)

### Architecture and Technologies


This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation, sprites animation, and rendering,
- Webpack to bundle and serve up the various scripts.
- Some sort of library to help with the dragging of the characters across the screen.

In addition to the webpack entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.

`game.js`: this script will handle the logic for the flow of the game. It will also do the checking for whether the characters that the student dragged into the area is correct, as well as check whether the predicted outcome is correct.

`characters.js`: this script will contain the character objects, which can either be positive or negative.

`numberline.js`: this will handle logic for which area of the numberline to display.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Easel.js` API.  First, build out the `Character` object to connect to the `Board` object.  Then, use `board.js` to create and render the characters onto the board.

- Complete the `characters.js` module
- Render characters onto the board.
- Make characters draggable

**Day 3**: Write out the game flow logic, as well as the presentation of each level.

- Complete the `game.js` module
- Have all 5 levels completed for the game.


**Day 4**: Style the frontend and add animation to the characters.

- Add simple animation to the characeters
- Have a styled `Board`, with the appropriate nav links


### Bonus features

If the MVP is finished ahead of schedule, some potential bonus features include:

- [ ] Expanding this game to also provide visual representations of integer multiplication and division
- [ ] Ability to toggle between a horizontal and vertical number line
- [ ] Letting students choose how many integers per problem to work with
