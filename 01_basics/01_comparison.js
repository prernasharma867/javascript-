console.log(null >0);
console.log(null ==0);
console.log(null>=0);
 
/*the reason is that an equality check == and comparison > < >= <= workd differently
coparison convert null to a number, treating it as a 0 that's why (3) null>= 0 is true and (1) null >0 is false */
console.log(undefined == 0);