// Create an array called 'ages'
const ages = [25, 31, 42, 77];

// Use the 'map' method to create a new array 'd', which processes each element in 'ages'
let d = ages.map((item) => {
    // Check if the item is less than 70
    if(item < 70) {
        // If true, return the item multiplied by 2
        return item * 2;
    } else {
        // If false (i.e., item is 70 or greater), return the item unchanged
        return item;
    }
});

// Log the new array 'd' to the console
console.log(d);  // Output will be [50, 62, 84, 77]
