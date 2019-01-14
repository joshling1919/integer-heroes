# Integer Heroes

[Live Link](https://joshuasling.com/integer-heroes/)

## Background

This project was one of the very first projects I made after learning
JavaScript. I'm particularly fond of it because it was built to address a very
specific issue I dealt with when teaching middle school math.

Specifically, my students struggled greatly with understanding negative numbers.
For example, up until that point in their math career, adding two numbers always
meant that you would end up with an answer that was greater in value than the
first original number. However, that mathematic principle was no longer true
when negative numbers were involved.

Because of this, I came up with a strategy that allowed my students to easily
understand negative numbers. In this strategy, students were taught to think of
positive numbers as superheroes, and negative numbers as villains. For example:

```
1. Let's imagine that we have the problem 3 + (-2).

2. The positive 3 would be represented by 3 superheroes.

3. The -2 would be represented by 2 villains.

4. When we add them together, 2 of the 3 superheroes would be canceled out by
   the 2 villains, leaving 1 superhero behind in the end.

5. Because there is 1 superhero left, and superheroes represent positive
   numbers, the answer to 3 + (-2) is positive 1.
```

My students really loved this strategy, and it made integer operations much
easier to understand. And so, I decided to use JavaScript and HTML canvas to
turn that same superheroes vs. villains strategy into a game.

## How it works

In Integer Heroes, students are first given an integer operation problem (ie.
`5 + (-9)= ?`). Then, they have to decide the appropriate way to represent each
of the numbers in the problem. In this game, **superheroes represent positive
numbers, and supervillains represent negative numbers**. In the case of
`5 + (-9)`, the students would select 5 heroes to represent the positive five,
and 9 villains to represent the negative nine.

Next, they have to make a decision on what happens when the different characters
"meet" each other. In the case of 5 + (-9), 5 of the superheroes cancel out 5 of
the supervillains, which leaves four supervillains left for an answer of -4.

One key concept that students also have to learn at this age is understanding
multiple representation of the same problems. With this in mind, the design of
this game includes a scrollable number line at the bottom of the page that
concurrently represents the scenario that is being played out by the student on
top with the heroes and villains.
