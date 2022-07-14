1. Introduction

- Unlike a lot of Object Oriented languages, in JS functions are first-class entity. It means we can add them to objects, execute them in context of those objects, remove them from their objects, pass to other functions and run them in entirely different contexts. First-class functions have no context of their own, they get one when program executes them. Hence, JS must let the developer determine the context.

2. Prerequisites

3. Global Object

- JS creates a global object when it starts running - which is the implicit execution context. In browser, the global object is the `window` object.
- Global values like `NaN`, `Infinity` and global functions like `parseInt` is present in the `window` global object.
- Like other JS objects, you can add properties to the global object.

**Global Object as Implicit Context**

- `foo = 1;` does not declare a global variable since it does not use `const`, `let` and `var`. Instead, JS makes a property `foo` on global variable - that line is same as `window.foo = 1;`
- Similarly while searching for `foo`, once JS does not find the `foo` variable, JS looks for the `foo` property on the global object.

**Global variables and Function Declarations**

- When we declare global variables with `var` or functions, JS adds them to global object as properties.
- The behaviour of the `var` variable appears to be identical to what happens when you dont declare the variable. However, you can delete global variables that you don't declare, but not those that you did.
- ie - you CAN NOT delete functions and var properties from the global object. Its like JS tries to the hide the fact that `var` variable and functions are global object properties.

**Strict Mode and the Glocal Object**

- In strict mode, the global object is not used as implicit context. Instead, the implicit context is undefined.
- Thus we can not access variables that have not been declared. It guards against misspellings adding new properties to the object.

4. Practice Problems : The Global Object

- With strict mode not enabled the global object serves as the implicit execution context. In this case, initializing an undeclared variable automatically creates a property on the global object. Even if that undeclared variable is initialized inside a function definition(what about inside method ? Yes, as expected).
- With strict mode enabled, we can not initialize an undeclared variable.

5. Implicit and Explicit Execution Contexts

**Function Execution Context**

- Everytime a JS function is invoked, it has access to an object called the execution context through the keyword `this`.
- Which object `this` refers to depends on how the function was invoked.
- 2 kind of execution contexts. Implicit - 1 which JS sets, Explicit - which we set.
- `this` gets bound based on how a function is invoked.

**Implicit Function Execution Context**

- The implicit function execution context (aka the implicit binding for functions) is the context for a function you invoke without supplying an explicit context.

- Binding a function to a context happens when you execute the function, not when you define it.

- Note that in the strict mode, `this` in the global scope is `undefined`.

**Implicit Method Execution Context**

- JS implicitly binds methods invoked to the calling object.
- Whether the calling object is implicit (ie function invocation) or explicit (method invocation) - the execution context is implicitly set for us by JS.

**Explicit Function Execution Context**

- JS lets us use `call` and `apply` methods to change a function's execution context at execution time.
- We can also 'borrow' a method from an object to use with another object. In that case we dont copy that method.
- `call` method can also pass arguments to the function as a comma separated list after the first argument which is the new context.
- `apply` is same as `call` except it pass arguments to function as array.

6. Practise Problems - Implicit and Explicit Function Execution Contexts

- The global `this` is `undefined` in strict mode.
- For a method invocation, its execution context is the receiving object.
- In a function invocation, the implicit function execution context is the global object.
- Implicit function execution context for a method invocation is the calling object.

7. Hard Binding Functions with Contexts

- Apart from `call` and `apply`, JS also has a `bind` method which permanently binds a function to a context object.
- Unlike `call`, `apply` - `bind` does not execute the function that invoke it. Instead it creates a new function that permanently binds the invoking function to a given context object. Now, we can pass the returned function around without concern that its context will change.
- Once binded, no matter what you do to the returned functionn, you can not change the value of the context.
- `bind` returns a new function, it does not alters the original function.

8. Example : Changing Function Context

- Remember arrays are objects in JS and hence can be used as a context. We can invoke a method with a different context using `call` or `apply`.
- We can create a new function permanently binded to a context.
- Lastly, we can change the execution context by using it as a method after defining it as a property in an object.

9. Practise Problems : Hard Binding Functions with Contexts

- We use `Function` method `bind` to permanently bind a function to a particular execution context.
- Unlike `call`, `apply` - `bind` returns a new function. It does not call that function.
- After explicit binding with `bind`, you can not change the context - even explicitly.

10. Dealing with Context Loss - 1

**Methods Losing Context when Taken Out of Object**

- We can use `call` passing the original object to reinstate the original context. But what if we dont want to execute the function right away or need to pass it to another function.
  - Then you can pass the context everytime you pass the function.
  - Or you can use hard-binding to permanently bind the function to the desired context.

11. Dealing with Context Loss - 2

**Internal Function Losing Method Contest**

- Object methods have the object as the default implicit context. However, that context is not propagated to functions within that method. Its a bug in design.
- For such functions, like functions in general, the default implicit context is the global object.

- In this case, the context can be preserved by
  - using a local varialble like `self` to refer to `this`
  - explicitly pass the context using `call` or `apply`
  - bind the context with a function expression
  - arrow functions - they get the context from the surrounding scope

12. Dealing with Context Loss - 3

**Function as Argument Losing Surrounding Context**

- Solution is the same as the previous example
- `forEach` has an optional thisArg argument
- using arrow function for call back

13. Practice Problems: Dealing with Context Loss

- when we extract a method from object and pass it as an argument, we remove the method from its context.
- Inner functions lose the outer object as the context.
- `bind` can't be called on function declaration, but it can be called on function expression.

14. Summary - The `this` Keyword in JavaScript

- A function invocatio is performed when an expression that evaluates to a function object is followed by an open paranthesis. `this` is the global object in function invocation.

- However, in strict mode function invocation, `this` is `undefined`.

- `this` is NOT the same in inner function as in outer function. The context of the inner function depends only on invocation but not on outer function's context.

- A method is a function stored in a property of an object. In a method invocation, `this` is the object that owns the method.

- If a method is separated from its object, then that method loses its context. When invoked after being detatched, the invocation becomes function invocation - `this` refers to the global object.

- Constructor Invocation - need to study later

- Indirect invocation is performed when a function is called using `call` or `apply`. In JS functions are first-class ie they are objects whose type is `Function`. In indirect invocation, `this` is the first arguments of `call()` or `apply()`.

- Bound Function is a function binded with an object using `bind` keyword. It returns a new function and does not invoke it. `this` in bound function is the first argument of `bind()` method.

- `.bind()` makes a permanent context link. Called tight context binding.

- Arrow Function. It is anonymous, ie the `name` property is an empty string. `this` is the enclosing context where the arrow function is defined.

- In short, function invocation determined `this`.

15. Practise Problems: What is this? - 1

- We dont know what the context of the function is until it is invoked. Thus we dont know what the context is here.
- Function invocation sets the context implicitly to global object.
- When we call a method on an object, the `this` points to that object.

16. Practise Problems: What is this? - 2

17. Summary

18. Quiz

- Undeclared properties on the global object can be deleted with the `delete` keyword. While the declared properties including the functions can be deleted using the `delete` keyword.

- function execution context refers to the value of the `this` keyword and depends on how the function is invoked.

- first-class function support means that functions can be removed from their objects, passed around, and executed in entirely different areas of the code. They are initially unbound, but dynamically bound to a context object at execution time.

- `call` takes an optional argument list while `apply` takes optional arguments in an array.

- `bind` returns a new function bound to the context argument permanently but does not invoke any functions.

- A function that has had its context hard-bound by `bind` cannot be invoked with a different context using `call` or `apply`. `bind` does not alter the receiver function, but rather returns a new function.

19. Discussion

- Execution context is an object that is bound to a function at execution time when the function is invoked which is referenced by `this` at the execution time.
- Node uses the current module as the global object when runnin code from a file. It uses `global` only while in REPL.
- A function's execution context `this` is the global object unless it is modified.
-
