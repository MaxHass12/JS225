1. Closures and Functions Review

- `function` keyword creates JS function. 2 different syntax - function declaration and function expression.
- function expression syntax is handy when passing a function to another as argument.
- All functions, regardless of syntax, obey the same lexical scoping rules:
  - They can access any variables defined within it.
  - They can access any variables that were in scope based on the context where the function was defined.

2. Higher-Order Functions

- Higher-order functions accept and / or return a function when invoked.
- In JS, functions are objects and they can be passed or returned from a function.

3. Practice Problems: Higher-Order Functions

4. Closures and Private Data

- Functions close over or enclose everything that is in scope at their definition point - so we call them closures.
- We CAN NOT access the private data of a closure from outside it except by using the returned function. There is no way to access the value of the variable from outside the function.

5. Object and Closures

- We can make our function return an object making it an object-factory ie what we studied in the past. But this would expose the data.

- Why use closures to make data private ?

  - We can force other developers to use the intended interface. By keeping the collection of items private, we enforce access via provided methods.
  - However making data private can make it harder to extend the code. On the contrary we can easily add new properties to an object from an object factory.

  8. Garbage Collection

  - When there are not variables, objects, or closures that maintain a reference to the object or value - JS marks the memory as eligible for GC.
  - When a function returns a primitives, it does so by making a copy of that primitive value. In this case, the primitive value within the function is eligible for GC.
  - However, when a function returns an object - only a reference to that object is returned and hence it is not eligible for GC.

  **The Stack and Heap**

  - Most programming language divide memory into 2 principal regions - the stack and the heap. JS stores most primitive values and references on the stack, and everything else on the heap. You can think of references as pointers to the actual values of an object, array or string that lives in the heap.

  - Stack does not participate in garbage collection ie primitive values do not get involved in garbafe collection when they are stored on the stack.

  - THe process of freeing space from stack is similar to GC but is distinct. Each primitive has a fixed size, JS can calculate the amount of memory it needs during the creation phase without knowing the execution values.

  - The heap is much trickier. Each value has a different size that can't be determined ahead of time. JS relies on Garbage Collection to detect when a value's reference count reaches 0. GC does not happend when a variable goes out of scope - closures, arrays, objects can all persist references - for GC to happen reference score must be zero.

- Reference cycle problem happens when 2 objects refer each other. For them, the reference count will never be 0. Modern JS takes care of that but introduces other problems.

9.  How Closures Affect Garbage Collection

- As long as closures exist, the variables in the closure remain in existence ie the objects or values they reference must also endure. Hence, JS can not GC any object referenced by the variable that the closure keeps in its context.
- If we have to remove a closure or other reference explicitly, we xan assign `null` to the item that references it.

11. Partial Function Application

12. Immediately Invoked Function Expression

- IIFE is a function that we define and invoke simultaneously.
- Done by:
  - Wrapping a pair of paranthesis around a function declaration and then invoking the resulting expression.
  - Wrapping a pair of paranthesis around a function expression and then invoking the resulting expression.

14. Creating a Private Scope with IIFE

If we have to write some code in middle of thousands of lines of JS code then there can be many problems with it.

- The variable names or the function name may already be present in the global scope. This might mess up with the exisiting code base.

- We usually turn the function declaration and invocation into an IIFE.

15. Creating Private Data with an IIFE

- Think that you are defining a function and then invoking it just once to return a object.

16. Practice Problems: IIFE

- Even named functions are not visible outside the scope created by IIFE.

17. Summary

- Closures let you access any variable that was in scope when the function was defined.
- Objects and Arrays that are no longer accessible from anywhere in code are eligible for Garbage Collection, which frees up the memory that they use for reuse by other parts of program.
- You can use closures to make variables private to a function, or a set of functions, and inaccesible anywhere else.
- Closures allow functions to 'carry around' values for later use.
- Higher-order functions are functions that take function as an argument, return a function, or both.

18. Quiz

- closures are created when a functin is defined and allows the function to retain access to the variables it needs from the outer scope.
- its possible to create a closure without returning a function ie by returning an object.
- private data can be altered by the function whose closure retains the reference to the private data.
- once created, private data is never eligible for GC.
- An object becomes eligible for GC when there are no longer any references to it in the code. Thus an object referenced by an out-of-scope variable is not necessarily eligible for GC.
- An IIFE can be invoked by its name only recursively. Its name is not in scope outside the enclosing paranthesis. An IIFE can be used to create a temporary private scope. The paranthesis can be omitted if the function definition is an expression that does not occur at the begining of a line.

19. Discussion

- Some primitives (string and bigInt) are not stored on stack. Their values are stored in heap. But they behave as if they are stored in stack ie they will not be garbage-collected. Primitives including `undefined` are not GC-ed.
- The correct statement is 'inner scope has access to variables in the outer scope'
- Assume that when an object is no longer reachable, it is eligible for GC.
- Most primitives have a fixed size. JS knows it. Thus they are placed on stack. Objects and Arrays have dynamic sizes, thus they need to be stored in heap. However a pointer to that object will be placed on stack. Strings are unusual - it is stored in heap, it is an object - however it is treated like a primitive and passed by value.
- It is possible to create immutable objects. Strings for example. Whether a value is primitive or not depends on how they are implemented. Functions are objects, not primitves.
- All values used in a program are eligible for GC at the end of the program.
- Returning objects and primitives from a function works exactly like passing them as arguments. One can make a mental model of passing objects by reference.
- A closure is created when a function is declared, not when it is invoked.
- Methods in an object create a closure as well and hence can access private variables in the closure.
- In JS outer scopes are available to inner scopes. This is different from Ruby where methods create their own scopes. Functions create scope, objects within the function have the same scope as the function.
