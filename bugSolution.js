```javascript
// Correct use of $all operator
db.collection.find({ field: { $all: [1, 2] } });
```