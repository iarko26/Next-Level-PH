/*

Create a function filterByRating that accepts an array of items, where each item has the following properties:

title (string)
rating (number between 0 and 5)
The function should return a new array containing only the items with a rating of 4 or more.

Requirements:
You must write the correct type for the function parameter and the return type.
Do not mutate the original array.
Sample Input:
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
Sample Output:
[
  { title: 'Book A', rating: 4.5 },
  { title: 'Book C', rating: 5.0 },
];

*/
type Rating=0|1|2|3|4|5;
type Item={
    title:string,
    rating:Rating | number
}
function filterByRating(res:Item[]):Item[]{
    return res.filter((i)=>i.rating>=4 && i.rating<=5);
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books))
