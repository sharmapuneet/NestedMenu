This project is made for nested menu.

## Project Architecture

- This project is using React javascript library.
- This app is using latest version of react and also react hooks are used.
- There are five components used in this app : Form, Message, Routing, SimpleMenu, Welcome.
- The data.js file contains the json data for menu items with deep nesting.
- I am using material-ui for UI implementation of components.
- I have made a minified production build of this app and used it in the html file passing through the `<script>` tag.

```
NOTE - The form submission data is being passed to the endpoint but you can't see it as of CORS issue. You can see it working if you run `npm start` form the root directory. You need to inspect the browser using browser dev tools and in the network tab you'll see failed api. Click on that and check the form data at the bottom.

Also if you want to change the data.js file to add or delete menu items you need to run `npm run build` and then change the `main.*.chunk.js` file in `index.html` file to the new file.
```

### Form Component

The form component has two text fields for first name and last name and two buttons to submit the form and to cancel the form.

### Message Component

This is a simple text component to show if the menu item has not been implemented.

### Routing Component

This component is made to show different components on different links.

### SimpleMenu Component

This component is consuming the json data from the data.js file to create menu.

### Welcome Component

This is a simple text component to show welcome message on home screen.

### Testing

For testing I am using Jest and Enzyme. For this you need to locally install npm - https://www.npmjs.com/get-npm

- Clone the afterpay-test from - https://github.com/sharmapuneet/NestedMenu
- Go to afterpay-test directory in your machine.
- run the command `npm install`
- After running above command run `npm test -- --u`
- The above command will run and will show you if the tests are passed. It will show 
    ```
    Test Suites: 6 passed, 6 total
    Tests:       10 passed, 10 total
    Snapshots:   1 updated, 5 passed, 6 total
    ```
- If you want to test more things you can write test cases in the index.spec.js files for each component. For example for Form component you can find the test file here src/components/Form/index.spec.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
