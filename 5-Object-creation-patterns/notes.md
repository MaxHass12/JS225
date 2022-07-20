1. Introduction

- JS does not implement behavior sharing using class-based inheritence. Instead uses object prototype to share properties.

2. Factory Function

- Allows us to create objects with pre-defined template.
- However, every object created with the factory function has a full copy of all the methods and properties, which can be redundant.
- No way to check if the object is made from a factory function. Makes it difficult to identify the type of the object.

3. Practise Problems: Create Objects with Factory Functions

4. Constructor Pattern

- Constructor functions are used to create object.
- They are called with `new` to create objects.

  - `new` creates a new object
  - `this` in the function is set to point to the new object
  - the code in the function is executed
  - `this` is returned if there is no explicit return statement
  - to make a constructor function not return `this`, you need to make it return some other object instead.

- If we invoke the constructor function without calling `new`, `this` points to the global object and properties on the global object are set.

- applying `.constructor` to variable name returns the name of the constructor function.
- As a convention, constructor functions start with capital letter.

5. Objects and Prototypes

**Object's Prototype**

- Every JS object has a special hidden property `[[Prototype]]`.
- We can get and set that by `Object.getPrototypeOf(varName)` and `Object.setPrototypeName(varName)` respectively.
- We create objects of a given prototype using `Object.create`
- `protypeObject.isPrototypeOf(object)` is how we check if a prototype Object is the prototype of the object.

- dunder proto `__proto__` is deprecated in favor of `Object.setPrototypeOf` and `Object.getPrototypeOf`

**Prototype Chain and the Object.prototype Object**

- `Object.prototype` is at the end of the prototype chain for all JS objects. If you do not create an object from a prototype, its prototype is the `Object.prototype` object.

6. Prototypal Inheritance and Behavior Delegation

-
