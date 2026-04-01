## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative - Answer: *The program is designed as a sequence of commands, the program is ran by executing each command by order in the sequence.*
   1. [5 points] Object Oriented - Answer: *A sequence of messages between objects*
   1. [5 points] Functional - Answer: *The program is an expression or a sequence of expressions and not a sequence of commands, running the program means calculating the expressions.*
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm? - Answer: *Imperative paradigm often relies on global state, where data is exposed to any part of the program, while in Object-Oriented paradigm the data and logic are combined into objects - making interactions with the objects only through calling methods, which helps safety of the objects. It also allows for core concepts like abstraction, inheritance and polymorphism which help with code reusability and modularity.*
1. [5 points] How does the functional paradigm improve over the object oriented paradigm? - Answer: *Functional paradigm improves on verification of code since they are just mathematical expression and they have no side effects. With that they also allow for Parallelism, since no side effects mean no issues in Parallelism. They also improve on Abstraction due to functions like map, filter and reduce and algebraic data types that reduce errors.*

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```
  //1. filter only on discounted
  //2. sum all 
  //3. count items
  //4. return sum/count

```ts
const getDiscountedProductAveragePriceFP = (inventory: Product[]): number =>{
  const discontinued_products = inventory.filter((product) => product.discounted==true);

  return (discontinued_products.length ==0) ? 0 : discontinued_products.reduce((sum,curr) => sum + curr,0,discontinued_products.map((product) => product.price/discontinued_products.length))
}
```
```ts
const getDiscountedProductAveragePriceFP = (inventory: Product[]): number =>

  reduce((sum,curr) => sum + curr,0,map((product) => product.price/filter((product) => product.discounted==true, inventory).length, filter((product) => product.discounted==true, inventory)))
```



This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
2. [3 points] `x => x.map(y => y * 2)`
3. [3 points] `(x, y) => x.filter(y)`
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
5. [3 points] `(x, y) => x ? y[0] : y[1]`
6. [3 points] `(f,g) => x => f(g(x+1))`
