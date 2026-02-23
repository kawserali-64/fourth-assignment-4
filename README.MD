
<!-- question 1 -->
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
<!-- answer 1 -->
### 1. answer => getElementById → Selects one element by its id. || getElementsByClassName → Selects all elements with a specific class name. || querySelector → Selects the first matching element using a CSS selector. || querySelectorAll → Selects all matching elements using a CSS selector.


<!-- question 2 -->
### 2. How do you create and insert a new element into the DOM?
<!-- answer 2 -->
### 2. answer => Create the element using document.createElement() || Add content or attributes (like text, class, id) || Insert it into the DOM using methods like appendChild() or append() 

<!-- question 3 -->
### 3. What is Event Bubbling? And how does it work?
<!-- answer 3 -->
### 3. answer => The event runs on the clicked element first || Then it moves to its parent || Then to the grandparent || And continues up to the document

<!-- question 4 -->
### 4. What is Event Delegation in JavaScript? Why is it useful?
<!-- answer 4 -->
### 4. answer => Improves performance (fewer event listeners) || Works for dynamically added elements || Keeps code cleaner and more efficient

<!-- question 5 -->
### 5. What is the difference between preventDefault() and stopPropagation() methods?
<!-- answer 5 -->
### 5. answer => preventDefault() → Stops the browser’s default action. || stopPropagation() → Stops the event from bubbling up or capturing down the DOM. 