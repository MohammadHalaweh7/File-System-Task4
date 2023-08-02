# File-System-Task4

create a Node JS file

Call it `main.js`
In this file, 
You will read a file from the file system (same folder of main.js) called input.csv.

File Example: 

[users.csv](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ef9dac7-a2b3-4497-821d-6bfab24c1581/users.csv)

Only the first line is a header/metadata line that we will ignore, the rest of the file is actual data.

Each of the lines represents user data, we need to switch this line to a JS object

All these objects must be stored in an array, let’s call it `users` 

You are expected to have these functions:

- `readCSV`: It will be responsible to read from the plain `users.csv` file.
- `saveToFile`: It’s expected to save the csv
- `readJsonFile`: It’ll will read the previous file and print it in console