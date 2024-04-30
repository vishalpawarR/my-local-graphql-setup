# Project setup
--------

1. Run `npm init -y` to create an package.json
2. Install the typescript as dev dependency `npm i typescript -D`
3. Install the express `npm i express`
4. To setup the empty typescript project run `npx tsc --init`
5. Create a `src` folder for storing the ts code
6. Make changes in the config file to setup the rootDir and link it to the newly created `src` folder and also make output folder directry and give a name to the folder here we are naming it as `build`
7. Create an simple express server
   1. While creating the express you will get an error for not finding the types of the express to resolve it `npm i --save-dev @types/express`
   2. To make run and watch the changes which are happening in the TS file install this package `npm i tsc-watch -D`
   3. Add this scripts to setup the scripts 
   ```js
   "scripts": {
      "start": "node build/index.js",
      "dev": "tsc-watch --onSuccess \"npm start\""
   }
   ```
   4. 