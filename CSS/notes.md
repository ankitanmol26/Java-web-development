CSS (Cascading Style Sheets) is the language used to style HTML pages. It controls how elements look, including colors, fonts, spacing, layouts, animations, and responsiveness.

HTML → Structure
CSS → Appearance
JavaScript → Functionality
Ways to Add CSS
1. Inline CSS

Applied directly to an HTML element.

<p style="color: blue;">Hello World</p>


Pros: Simple for quick testing.
Cons: Not recommended for large projects.

2. Internal CSS

Written inside the <style> tag.

<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <p>Hello World</p>
</body>
</html>

3. External CSS (Recommended)

Create a file named style.css.

HTML

<link rel="stylesheet" href="style.css">


style.css

p {
    color: blue;
    font-size: 20px;
}

CSS Syntax
selector {
    property: value;
}


Example:

h1 {
    color: red;
    font-size: 40px;
}

Selector: h1
Property: color
Value: red
CSS Selectors
Element Selector
p {
    color: green;
}


Styles all <p> elements.

Class Selector

HTML

<p class="intro">Hello</p>


CSS

.intro {
    color: blue;
}


Use . before the class name.

ID Selector

HTML

<h1 id="title">Welcome</h1>


CSS

#title {
    color: red;
}


Use # before the ID.

Universal Selector
* {
    margin: 0;
    padding: 0;
}


Selects every element.

Group Selector
h1, h2, p {
    color: navy;
}

Colors
color: red;
color: #ff0000;
color: rgb(255,0,0);
color: rgba(255,0,0,0.5);


Background color

background-color: yellow;

Text Properties
p {
    color: blue;
    font-size: 20px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
    line-height: 1.6;
}

Background
body {
    background-color: lightgray;
}


Background image

body {
    background-image: url("bg.jpg");
}

Border
div {
    border: 2px solid black;
}


Rounded corners

div {
    border-radius: 10px;
}

Margin

Space outside an element.

div {
    margin: 20px;
}

Padding

Space inside an element.

div {
    padding: 20px;
}

Width and Height
div {
    width: 300px;
    height: 200px;
}

Display Property
display: block;
display: inline;
display: inline-block;
display: none;
display: flex;
display: grid;

Position
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;


Example

.box {
    position: absolute;
    top: 50px;
    left: 100px;
}

Flexbox (Very Important)
.container {
    display: flex;
}


Useful properties

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

justify-content → Horizontal alignment
align-items → Vertical alignment
gap → Space between items
CSS Grid
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

Box Model

Every HTML element is made up of:

+-----------------------+
|       Margin          |
| +-------------------+ |
| |      Border       | |
| | +---------------+ | |
| | |    Padding    | | |
| | | +-----------+ | | |
| | | | Content   | | | |
| | | +-----------+ | | |
| | +---------------+ | |
| +-------------------+ |
+-----------------------+

Hover Effect
button:hover {
    background: blue;
    color: white;
}

Transition
button {
    transition: 0.3s;
}

Transform
div:hover {
    transform: scale(1.1);
}


Other transforms:

transform: rotate(45deg);
transform: translateX(50px);
transform: skew(20deg);

Animation
@keyframes move {
    from {
        left: 0;
    }

    to {
        left: 200px;
    }
}

.box {
    position: relative;
    animation: move 2s infinite;
}

Responsive Design
Media Query
@media (max-width: 768px) {
    body {
        background: lightblue;
    }
}


Used to adapt layouts for phones, tablets, and desktops.

Common CSS Units
Unit	Meaning	Example
px	Pixels	20px
%	Percentage	50%
em	Relative to parent font size	2em
rem	Relative to root font size	1.5rem
vw	Viewport width	50vw
vh	Viewport height	100vh
CSS Specificity (Priority)

When multiple rules target the same element, CSS applies them in this order (highest to lowest):

Inline styles
ID selectors (#id)
Class selectors (.class)
Element selectors (p, h1, etc.)

Example:

p {
    color: blue;
}

.text {
    color: green;
}

#message {
    color: red;
}


If a <p> has both class="text" and id="message", the text will be red because the ID selector has higher specificity.

Common CSS Properties
Property	Purpose
color	Text color
background / background-color	Background styling
font-size	Text size
font-family	Font type
font-weight	Text thickness
text-align	Text alignment
width / height	Element dimensions
margin	Space outside an element
padding	Space inside an element
border	Border around an element
border-radius	Rounded corners
display	Layout behavior
position	Element positioning
z-index	Stacking order
overflow	Handles overflowing content
opacity	Transparency
box-shadow	Shadow effect
transition	Smooth property changes
transform	Move, rotate, scale, skew elements
animation	Create animations
Essential CSS Topics to Learn

