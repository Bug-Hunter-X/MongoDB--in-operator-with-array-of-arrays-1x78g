# MongoDB $in operator with array of arrays
This repository demonstrates an uncommon bug in MongoDB related to the incorrect use of the `$in` operator with an array of arrays.

## Bug Description
The `$in` operator is used to query documents where a field's value is in an array. However, when using `$in` with an array of arrays, the behavior might not be what is intended. MongoDB treats each inner array as a single element, resulting in unexpected results.

## Solution
The solution is to replace `$in` with the `$all` operator. `$all` checks if the field contains all the elements of an array.

## How to reproduce
1. Clone the repo.
2. Create a MongoDB collection.
3. Insert sample documents into the collection.
4. Run the query with the incorrect use of `$in`.
5. Observe that the results are not as expected.
6. Run the query with the correct use of `$all`.
7. Observe the desired results.
