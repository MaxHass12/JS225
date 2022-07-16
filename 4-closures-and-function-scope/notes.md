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

-
