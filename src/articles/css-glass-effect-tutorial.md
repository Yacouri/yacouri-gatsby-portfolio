---
title: The easiest way to make a glass effect in CSS 💎.
stack: HTML & CSS
slug: css-glass-effect-tutorial
readingTime: 2 mins
date: Aug 5, 2021
thumb: ../images/thumbs/css-glass-effect-tutorial.png
featuredImg: ../images/featured/css-glass-effect-tutorial-banner.png
---

Salute everybody, i hope y’all doing well.

Recently i have seen a lot of designs and websites using the glass effect which makes the website looks smoother 💎. 
So you might be wondering how have they done this effect.

Today i will show you the easiest way to use this effect in your project
in 4 steps.
## 1. Create a new div

So first things first we create a new div in our html file and giving it a class name like so:

```html
<div class="box">
  <button class="my-btn">Click me!</button>
<div>
```

- First step results
![First step results](https://miro.medium.com/max/335/1*K3tTr3rWy4FG6hnyDe1Cvw.png)
---

## 2. Remove the extra space
Secondly we go to our CSS file to remove all the extra space from the html elements.
```css
* {
  margin: 0;
  padding: 0;
}
```
---
## 3- Center the content
Adding a beautiful background to the body & align our div to center.
```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("<https://images.unsplash.com/photo-1488718729626-53eaa41c0848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80>");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
```
- Third step result:
- ![Third spet results](https://miro.medium.com/max/2400/1*3J7iOd5b0gzsiciDN9TDAA.png)
---
Congrats 🎉🎊 you have created the glass effect successfully!
This is how the final result looks like ! 💯
![Final results image](https://miro.medium.com/max/2400/1*iaQiXiT7ROpqX8mn1ND2cg.png)

For the “Click me” button here is the CSS:
```css
.my-btn {
  cursor: pointer;
  padding: 15px 40px;
  background-color: black;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
}
```

- 🌐 Here is a link if you want to visit the whole code [Here !](https://codesandbox.io/embed/interesting-bohr-v9ujs?fontsize=14&hidenavigation=1&theme=dark).
- 👌 I hope this post helped you to create your own glass effect.
- 💖 If you find this post a bit useful let me know in the comment section.
Love you guys, Yacouri was here.