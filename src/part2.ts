import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = R.pipe(
    stringToArray,
    R.filter((letter: string) => vowels.some(i => i===letter.toLowerCase())),
    R.length
);;

/* Question 2.2 */
const checkPalindrome = (text: string): boolean => 
    (text.length===0 || text.length===1) ? true :
    (text[0]===text[text.length-1]) ? isPalindrome(text.slice(1,-1)) : false
    ;;

const sanitizeText = (text: string): string =>
    text.toLowerCase().replace(/[^a-z0-9]/g,''); 

export const isPalindrome = (text: string): boolean => checkPalindrome(sanitizeText(text));;
   

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => t.children.reduce((acc, x: WordTree   ) => acc + ' ' + treeToSentence(x), t.root);;

