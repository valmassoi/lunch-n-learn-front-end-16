# lunch-n-learn-front-end-16
The goal of this lunch and learn is to highlight the newest Front End development tools, libraries, and frameworks. I have included a starter `react` Single Page App.

## ES6
`ECMAscript 6` also called `ES2015` brings some syntactic sugar to JavaScript. Most of the features are supported in modern browsers, but it's not best practice to use directly on the client yet. Using `Webpack` ES6 JavaScript can be compiled down to ES5 to support more browsers. Newer versions of `Node.js` support [most of](http://node.green/) ES6 directly.

#### Const and Let
`const` denotes that the variable will not be changing (immutable)  
`let` is the new `var` but the scoping is [different](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)  

I've found it is best to default all variables to `const` and use `let` when needed (like for an `error message` variable that will change based on a if/else block)  

#### Template Strings
```JavaScript
var adjective = 'radical'
//ES6  
const myString = `Template strings are ${adjective}!`
//Old
var myString = "Template strings are " + adjective + "!"
```
#### Destructuring
```JavaScript
//ES6  
const { user, admin: superUser } = res.data //renames admin to superUser
//Old  
var user = res.data.user,
    superUser = res.data.admin
```
#### Fat arrow functions
Binding the context of `this` is important in react apps (think `$.proxy`). Fat arrow functions do this for you.
```JavaScript
//ES6  
(argOne, argTwo) => argOne + argTwo //single line automatically returns and doesn't need { }
//Old  
function (argOne, argTwo) {
  return argOne + argTwo
}.bind(this)
```
Cleans up callbacks quite a bit.
#### Spread operator
```JavaScript
//ES6  
const array = [1, 2, 3]
const anotherArray = [0, ...array, 4] //[0, 1, 2, 3, 4]
```
It can be used with objects too, useful with `Redux` state.
#### Defaults
```JavaScript
function f(x, y=10) { } //if y isn't passed (or undefined), it defaults to 10
```
#### Classes!
Used throughout react
```JavaScript
//TODO
```
[examples](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)

#### More
```JavaScript
Math.hypot(3, 4) // 5
"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"
Array.map()// see react example (great for building tables)
```
generator functions, promises (eliminates callback hell), import/exporting (shown below)  
Great overview of the best features of ES6: [Part 1](https://www.youtube.com/watch?v=AfWYO8t7ed4) - [Part 2](https://www.youtube.com/watch?v=LmL0Gh193M0)  

## ESLint
A `linter` plugs into your text editor (I use Atom but I believe Sublime has a plugin), highlighting lines that don't meet the set standards. Can also be run in terminal. It looks for best practices that you define, like using `;` or not. It also can warn you when you are using a variable that hasn't been defined or if define one that never gets used. Linters are beneficial to bring code consistency, clarity to projects, and find bugs sooner.  
I use [AirBnB's style guide](https://github.com/airbnb/javascript) (code style - not to be confused with UI design) with some tweaks  
Install globally: `npm install -g eslint`  
Atom packages: [linter](https://atom.io/packages/linter) and [linter-eslint](https://atom.io/packages/linter-eslint)
Starter conf: [.eslintrc.js](https://github.com/valmassoi/lunch-n-learn-front-end-16/blob/master/.eslintrc.js)  
See plugins located in [package.json](https://github.com/valmassoi/lunch-n-learn-front-end-16/blob/master/package.json) devDependencies  
CL command can auto fix some errors: `eslint ./public/js --fix`  

## Webpack
Bundle, Minify, and Uglify  
Plugins: ..  
Live-Reload: `webpack-dev-server`  
You can even go to {{ip_address}}:{{port}} on your phone and it live reloads too. I have found live reload to be very beneficial to find bugs as they are written. If you like this, you can have the `Node.js` backend live reload too using `nodemon`  
Different settings based on `env` and [env vars](http://stackoverflow.com/a/38393027).

## NPM or Yarn

Yarn is new and works similar to NPM but it caches packages across all your local repos to install much faster. I haven't switched to it, but the community is raving about it.

## No more jQuery!
With `react` you no longer need `jQuery` to manipulate the DOM but you lose `ajax` requests and its other useful library methods.  
To make requests: [axios](https://github.com/mzabriskie/axios) is a nice light weight library  
[lodash](https://lodash.com/docs/4.17.4) or `underscore` supplement ES6 methods:  
finding min/max, string, array, object, filtering array of objects
## DEMO
```bash
git clone https://github.com/valmassoi/lunch-n-learn-front-end-16.git && cd lunch-n-learn-front-end-16
npm i #installs packages included in dependencies and devDependencies objects in package.json
npm run dev #serves up the app on localhost:8088 with live reload
npm install --save some-package #example to add a package
npm install --save-dev some-dev-package #example to add a dev package
```

## React.js
#### Components
Modular - promotes good coding patterns.  
Fast using a "virtual DOM".  
You are basically creating custom HTML elements that can take custom properties.  

#### Import
```JavaScript
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as formActions from '../actions/form'
import Form from '../components/Form'
```

#### Class
```JavaScript
class ComponentName extends Component {
//Docs commonly use: class ComponentName extends React.Component {
//but we destructured in the import!
  ...
}
export Default ComponentName
```

#### Props
```HTML
<ComponentName customProp="green" title={this.state.title} />
```

#### State
Each component has a state, when the state updates it rerenders the DOM, only changing what is needed (efficient).  
Note that you can have stateless components (can still receive props) - good for something like a footer.  

Initial State:
```JavaScript
class ComponentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [], //doesn't have to be empty
    }
  }
```

Using state in JSX:  
```JavaScript
render{
  const { users } = this.state
  return(
    <div>
      <ul>
        {users.map(user => {
          return (
            <li class="user-list" key={user.id} onClick={(user) => this.setActiveUser(user.id)}>
              user.name
            </li>
          )
        })}
      </ul>
    </div>
  )
}
```
Note I used `class` in the `li` above. In `react` you can't do this by default because `class` is now a reserved word. You are to use `className` but if you look in the `webpack` file I have a plugin that will change this for me on bundle.

Changing the state:  
```JavaScript
const cryptoCurrencies = ['bitcoin', 'ethereum', 'dash'],
      newTitle = 'Crypto'
setState({ cryptoCurrencies, title: newTitle }) //same key doesn't need :
```

#### Create table mapping an array of objects
```JavaScript
<table class="table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Address</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
    {trades.map((trade, i) => {
      const tradeType = this.getType(trade)
      return (
       <tr key={`tr-${i}`}>
         <td key={`td-0-${i}`}>{this.utcToEastern(trade.SendingTime)}</td>
         <td key={`td-1-${i}`}>{tradeType}</td>
         <td key={`td-2-${i}`} class="address">trade.BlockchainPortfolioAddress</td>
         <td key={`td-3-${i}`} class={trade.SecurityAmount >= 0 ? 'delta-green' : 'delta-red'}>
           {trade.SecurityAmount >= 0 ? '+' : ''}{trade.SecurityAmount} {trade.Symbol}
         </td>
       </tr>
      )}
    )}
  </tbody>
</table>
```

#### Component Lifecycle
`componentDidMount` (call requests here), `componentWillUnmount`, ...  
[doc](https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)

#### React Router  
Sets up the navigation for the Single Page App.  
Can take [params](https://github.com/valmassoi/voting-app/blob/master/public/js/routes.js#L24) or wrapped in [auth middleware](https://github.com/valmassoi/bookwerm/blob/master/src/routes.js#L20). I configure it not to have a `#`  

#### Flux or Redux  
React by itself is considered the `V` in `MVC` (Model View Controller)  
Flux or Redux fill in to handle data flow.  
Not all React projects require one of these but I often finding myself adding one as projects grow so I now just include `Redux` when I init a new project.  
It gives you global actions and a global state. One component can initiate an action (ex. a GET request in a search component) that updates the app's redux state - updating any component(s) using that part of the state (ex. a table and container title)

The Demo in this repo doesn't go into `Redux`

#### Prop types
Check the type of a property passed in. Not required to do.
```JavaScript
ComponentName.propTypes = {
  someProp: PropTypes.object.isRequired,
}
```

#### Unit/spec testing
[mocha](https://mochajs.org/) with [chai](http://chaijs.com/)  
Run: `npm run test:watch` in demo

#### Resources
[Official Docs](https://facebook.github.io/react/)  
[React basics playlist](https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b) (part 1 - 7 will give you a quick intro)  
[Redux Udemy](https://www.udemy.com/react-redux-tutorial) (includes full authentication loop using Node.js and JWTs)  

#### Alternatives
`React` is maintained by Facebook, `Angular` by Google. The general community consensus is if staring a new project go with `React`, but might not be worth refactoring `Angular` to `React`. I've used `Angular 2` and prefer `React`. `Meteor` and `Vue` are other popular frameworks.

#### React-Native
Compiles to native iOS and Android applications from JavaScript. This allows for code reuse from React web apps. It is young but is being used in production applications on app stores.  
