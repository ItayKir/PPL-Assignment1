import { Result, makeFailure, makeOk, bind, either, isOk } from "./lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult = <T>(pred: (x: T) => boolean, a: T[]): Result<T> =>{
    const filterTrue:T[] = a.filter(pred)
    return (filterTrue.length===0) ? makeFailure("No element found.") : makeOk(filterTrue[0])
    }
    ;

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> => bind(findResult((x) => x%2===0,a), (x) => makeOk(x*x));

export const returnSquaredIfFoundEven_v3 = (a: number[]): number => undefined as any;

