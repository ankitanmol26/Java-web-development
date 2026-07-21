HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. It defines elements such as headings, paragraphs, images, links, forms, and tables. HTML works together with:

HTML – provides the structure.
CSS – styles the page (colors, fonts, layouts).
JavaScript – adds interactivity and behavior.
Basic HTML Structure
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>

Explanation
<!DOCTYPE html> – Declares the document as HTML5.
<html> – Root element of the webpage.
<head> – Contains metadata, title, links to CSS, etc.
<body> – Contains all visible content.

Important HTML Tags
1. Headings

Used for titles and section headings.

<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Smaller Heading</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

2. Paragraph
<p>This is a paragraph.</p>

3. Line Break
<br>


Moves text to the next line.

4. Horizontal Line
<hr>


Creates a horizontal divider.

5. Anchor (Link)
<a href="https://example.com">Visit Example</a>


Common attributes:

href – destination URL
target="_blank" – opens in a new tab

Example:

<a href="https://google.com" target="_blank">
    Open Google
</a>

6. Image
<img src="image.jpg" alt="A beautiful image">


Important attributes:

src
alt
width
height

Example:

<img src="cat.jpg" alt="Cat" width="300">

7. Lists
Unordered List
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Orange</li>
</ul>


Displays:

Apple
Mango
Orange
Ordered List
<ol>
    <li>Wake up</li>
    <li>Study</li>
    <li>Sleep</li>
</ol>


Displays:

Wake up
Study
Sleep
8. Tables
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>Alice</td>
        <td>22</td>
    </tr>

    <tr>
        <td>Bob</td>
        <td>25</td>
    </tr>
</table>


Important tags:

<table>
<tr> – table row
<th> – table header
<td> – table data
9. Forms
<form>

    <label>Name:</label>
    <input type="text">

    <br><br>

    <label>Password:</label>
    <input type="password">

    <br><br>

    <button>Submit</button>

</form>


Common form elements:

<form>
<input>
<label>
<textarea>
<select>
<option>
<button>
10. Buttons
<button>Click Me</button>

11. Div

Used to group elements together.

<div>
    <h2>About Us</h2>
    <p>Welcome to our website.</p>
</div>

12. Span

Used for styling or manipulating a small portion of text.

<p>
    My favorite color is
    <span style="color:red;">Red</span>
</p>

13. Semantic HTML Tags

These tags make your HTML more meaningful and improve accessibility and SEO.

<header>
    Website Header
</header>

<nav>
    Navigation Menu
</nav>

<main>
    Main Content
</main>

<section>
    Section Content
</section>

<article>
    Blog Article
</article>

<aside>
    Sidebar
</aside>

<footer>
    Footer Information
</footer>

14. Text Formatting Tags
<b>Bold</b>

<strong>Important Text</strong>

<i>Italic</i>

<em>Emphasized</em>

<u>Underline</u>

<mark>Highlighted</mark>

<small>Small Text</small>

<del>Deleted Text</del>

<ins>Inserted Text</ins>

<sup>Superscript</sup>

<sub>Subscript</sub>


Example:

<p>
    H<sub>2</sub>O
</p>

<p>
    x<sup>2</sup>
</p>

15. Comments
<!-- This is a comment -->


Comments are ignored by the browser and are useful for notes.

Common HTML Attributes
Attribute	Purpose	Example
id	Unique identifier	<div id="header">
class	Group elements for styling	<p class="intro">
style	Inline CSS	<p style="color:red;">
href	Link destination	<a href="page.html">
src	Image/file source	<img src="cat.jpg">
alt	Alternative text	<img alt="Cat">
title	Tooltip text	<p title="Hello">
width	Width	<img width="300">
height	Height	<img height="200">
Empty (Void) Tags

These tags do not require a closing tag:

<br>
<hr>
<img>
<input>
<meta>
<link>

Most Frequently Used HTML Tags
Tag	Purpose
<html>	Root element
<head>	Metadata
<title>	Browser tab title
<body>	Visible page content
<h1>–<h6>	Headings
<p>	Paragraph
<a>	Link
<img>	Image
<ul>, <ol>, <li>	Lists
<table>, <tr>, <th>, <td>	Tables
<form>	Form
<input>	User input
<button>	Button
<div>	Block-level container
<span>	Inline container
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>	Semantic page structure
Tips for beginners
Use semantic tags (<header>, <main>, <section>, <footer>) whenever they fit the content.
Use only one <h1> per page to represent the main heading, then organize content with <h2>–<h6>.
Always provide meaningful alt text for images to improve accessibility.
Keep your HTML focused on structure, and use CSS for presentation instead of inline style attributes when possible.

Learning these tags will give you a solid foundation for building web pages before moving on to CSS and JavaScript.
