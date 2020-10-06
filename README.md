## Fast Food Ordering System  

I bootstrapped this project using [Create React App](https://github.com/facebook/create-react-app).

This was just used due to the available time frame and to make things easier and focus on the menu functionality.

With more time, I would add eslint or typescript to the project. Also depending on the project requirements, the setup of could be done using Webpack or LaravelMix.


To preview this app you need to run

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## App.js
This is our main application file and it's located in the `/src` folder.

This file is the container for the following components

- Menu.js `/src/components/Menu.js`
- Order.js `/src/components/Order.js`

Things I wanted to do with more time:
- Adding Total Order
- Adding Remove Items from Order
- Combine multiple items of the same type into one, i.e: 3x Small Fries $2.99
- Fix the issue with the CORS so I can use get the data form the API
- Add more styling to the menu, maybe some graphics or icons. (Material UI icons or Fontawesome.)
- Add a Place Order Button that will sent a Post request to the api with the order. 