Q: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById is used to select an element by its unique id.
getElementsByClassName is used to access all elements with a class and returns a live HTMLCollection.
querySelector is used to select the first element that matches a CSS selector.
querySelectorAll is used to select all elements that matched a CSS Selector and returns a NodeList.

Q: How do you create and insert a new element into the DOM?

Ans: To create a new element we have to use document.createElement() and for insert the element into the DOM we have to use appendChild().

Q: What is Event Bubbling and how does it work?

Ans: Event Bubbling is when an event on a child element automatically moves up to its parent and ancestor elements. It works from child to parent, and to stop it we have to use .event.stopPropagation().

Q: What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is when you put a single event listener on a parent element to handle events for all its child elements. It is useful because it saves memory by reducing many listeners and can also handle elements added later dynamically.

Q: What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() is used to stop the browser’s default action for an event, like preventing a link from opening.
stopPropagation() is used to stop the event from bubbling up or capturing down to parent or ancestor elements.