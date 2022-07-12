1. Introduction

2. Prerequisites

3. Object and Methods

- JS object may contain methods as their properties. You can think of methods as functions with a receiver, ie the object the method is called on. A function invocation does not have an explicit receiver, a method invocation has.
- `this` is always available during a function or a method invocation.

- Function and Method Invocation
  - We can create a variable which points at an object method then invoke that function without an explicit receiver.
  - `this` during method invocation refers to the receiving object itself and it can be used to access and change the object's properties.
  - ie Object methods are properties that have a Function as its value.

4. Walkthrough - Object Methods

- Every function execution has a context which is represented by `this`.

5. Practise Problems - Object Methods

6. Mutating Objects

- JS Objects are mutable. Function can alter the content of Objects passed in as arguments.
- In case of object, variables hold a reference to the place in memory where the object is. You can think of variable acting as a pointer in case of objects.

7. Practise Problems - Mutating Objects

8. Functions as Object Factories

- An `Object` is a useful organizational tool that collects related data and behaviour together.
- A relatively straight-forward approach of using functions to create objects - that function is called object-factory.

9. Practise Problems - Functions as Object Factories

10. Object Orientation -

- At its core, Object Oriented Programming uses objects as the basic building blocs instead of local variables and functions.
- It puts data and procedures that manipulate data into containers for data ie objects
- Reducing duplication happens automatically in Object Oriented Framework.

11. Practise Problems - Object Orientation

12. Summary

- Object-oriented programming is a pattern that uses objects to organize code instead of Functions. Objects can also contain data or state.
- You can call the property of an object a `method` when the value you assign to it is a function.
- When you invoke an object's method - they can access the object to which they belong by using `this`

**Quiz**

- It is NOT possible to have a method which is not a property on an object.
- Objects can be used to organize related data and code together. Objects can use their properties to define state and behaviour.
- Primitives are never mutable - even though they seem that way when stored as object properties.
- Object factories can create new objects with object literals. 2 objects created from the same object factories do not compare as `true` with strict equality operator `===`.

**Discusssion**

- When a function is called without an explicit receiver, its execution context `this` is set to the global object. Even in case of callback function for `forEach` invoked in a method definition. Does not apply to arrow function, they 'inherit' the `this` from their parent scope.

- Properties are not variables. You can access them only from the object they belong to using `.` or `[]` notation. This even applies to method definition.

  - All of the properties defined in the objects are available to both the object's methods and the scope in which the object is defined - can only be accessed by `.` and `[]`.

- Arrow functions use static scoping for `this`, while other functions use dynamic scoping. They pick up `this` from the outer scope.

-
