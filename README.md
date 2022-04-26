
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Add and delete tasks from the database,
- Filter/search for tasks using a particular keyword

### Screenshot

![TODO list with empty list](todo%20list-empty.jpg)
![TODO list with tasks](todo%20list-tasks.jpg)

### Links

- Solution URL: [My Github Repos](https://github.com/SageKyle?tab=repositories)

## My process

### Built with

- Semantic HTML5 markup
- Javascript
- Materialize CSS
- Font Awesome Icons

### What I learned

Through this project, I learned how to work with the DOM and also how to work with the Javascript Local Storage methods.

Below is a snippet of what I learned through this project:

```js
// Romove from Local Storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    console.log(taskItem);

    localStorage.setItem('tasks', JSON.stringify(tasks));
};

```

### Continued development

The Next thing I want to learn now is Javascript Classes, Prototypes and Inheritance.

## Author

- My Github Profile - [Paul SaGe](https://github.com/SageKyle)

## Acknowledgments

This project was inspired by Brad Traversy of [Traversy Media](traversymedia.com) Through his Javascript course on Udemy.
