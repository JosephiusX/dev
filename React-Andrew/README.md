# React-Andrew

## Startup Reminder

to run the react app on my machine for development purposes:

        - In indecision-app dir run babel command in lesson 9:
            babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

this tells babel to watch src/app.js and translate it to public/scripts/app.js

        - open indx.html in the scripts folder in the public directory with live server.

## Section 3.7

install live server

    -yarn:
        yarn global  add live-server

        -or-

    -NPM:
        npm i -g live-server

## Sec 3.9 Setting up Babel

in indecision app

    -babel command line interface:
        yarn global add babel-cli@6.24.1
            ||
        npm i -g babel-cli@6.24.1

            run babel --help to confirm

setting up react and env presets

    -initalize indecision-app creating a package.json file
        yarn:
            yarn init
            yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
                ||
        node:
            npm init
            npm i babel-preset-react@6.24.1 babel-preset-env@1.5.2

not a bad time to add node modules to .gitignore

    -specify path to our code in indecision-app dir:
        babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

this sets up babel so that it watches for changes in our src/app.js and translate it to our public/app.js

## 3.10 Exploring ejs

vs code extension babel es6/es7 is helpful as well as path intelisense

CHALLANGE: Create a templateTwo var JSX expression

    -div
    -h1 -Andrew Mead
    -p Age: 26
    -p location: Philadelphia

    - RECAP

    - Adjacent JSX elements must be wrapped in an enclosing tag.

when working with jsx I can only have a single root element.

    - within '{}' in jsx javascript expressions can be placed

JSX allows me to represent html in my javascript file wrapped un a div. In the html like language I can reference variables in the javascript code in the file.

render template Two instead of template

## 3.11 JSX Expressions

Challange:

    -create app object title/subtitle
    -use title/subtitle in the template
    -render template

## 3.12 Conditional Rendering in JSX

    && operator
        true && 'Some age'
            returns: 'Some age'

        false && 'Some age'
            returns: false

        - conditional statements
            true ? 'joseph' : 'Anonymos'

the above translates : if the first name is true than output 'joseph', else output 'Anonymos

challange

    -only render the subtitle (and p tag) if subtitle exist - logical && operator
    -render new p tag - if options.length > 0 'Here are your options' 'no options'

## 3.16 Events and Attributes

in JSX

    -class:
        className

    -React Dom Elements Docs:
        https://reactjs.org/docs/dom-elements.html
            -All Supported HTML Attributes is a good reference

Challange:

    -make button -1  - setup minusOne function and register - log 'minusOne'
    -make reset button "reset" - setup reset function - log "reset"

## 3.17 Manual Data Binding

Challange:

    -subtract 1 from count - render
    -set count to 0 - render - render

JSX does not have data binding built in

    ?? what is data binding

it would seem that data binding would refer to data to the web automatically updating when changes are made. React doesen't have data binding so we need to make a function to update our page when changes are made.

    -create renderCounterApp() to solve this

now when fn count() runs for instance, the first line incrimemts the count, and after the change is made programatically we run the renderCounterApp() fn to update the changes on the user end.

Rerendering the entire app whenever a change is made would be an intensive way of handleing things. Thats why Reacts virtual dom algorithm knows to only update elements within the dom that have changed. No energy is wasted.

## 18. Forms and Inputs

this page gives a rundown of the event handlers available to us.

    -for the form we are going to use onSubmit={onFormSubmit} and create a function with that name

    CHALLANGE:

        - create render function that renders the new jsx
        - call it right away
        - call it after options array added to

    CHALLANGE:

        - create "Remove All" button above list
        - on click -> wipe the array -> rerender

## 19. Arrays in JSX

JSX supports strings as well as numbers. It does not support objects, and it ignores booleans, null , and undefined.

I can use JSX within an array. Each child of an array needs a unique identifier so that JSX can optomize the rendering process.

        CHALLANGE:

            - map over add.options getting back an array of lis (set key and text)

        SOLUTION:

            {app.options.map(option => (
    			<li key={option}>{option}</li>
    		))}

## 20. Picking an Option

21. Build it: Visibility Toggle

babel command for setting up babel:

    babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch


          CHALLANGE:

              - h1 with title visibility toggle
              - detail string
              - button called hide details that hides details when clicked

          SOLUTION:

                build-it-visible.js

in his solution the button text changes as well depending on weather the text is visible.

        - easally solved by adding a turnary operator to the jsx button within brackets so that the button text changes appropriately based on the current visibility.

        - switch back to app.js with babel:

            - In indecision-app dir run babel command in lesson 9:
            babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

22. React Components

React components allow us to take our big application and break it up into small pieces. For example we could have a component for the header, another for the user profile and a different component for signing in and handleing user interaction when the form is submitted.

23.   Thinking in React

24.   ES6 Classes: Part 1

      -  Set up babel to use our es6-classes-1.js: babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

React components are made using classes

        CHALLANGE:
            - Setup constructor to take name and age (default to 0)
            - getDiscription - Andrew Mead is 26 years old.

25. ES6 Classes: Part II

We can create a subclass of person called Students which is a person with a name and age, but we also want to track a major for the student.

        - we make a new class called Student
        - we extends the use of the Person methods to be used in students(students are people!)
        - then we make methods in Student for our student spacific needs

Before adding any methods to student we can already use it exactly like the Person class due to those properties being extended from Person to Student

        -using logical not operator

            ! true:
                false

            ! false:
                true

            !! true
                true

            !! false
                false

a single '!' (not operator) will flip the value of a boolean. '!!' flips the value twice.

we know that this.major will either be a string or undefined. so we flip it twice.

    ?? im not understanding the utility of this in this case
    ** The point is that instead of returning the variable, it returns either false or true, it also turns null and undefined to false.

the result however is that when I run the method on students it returns true if a major is included and false if the student dosent have a major in the paramiters

if I use getDiscription() in the student class it works just like in the parent class that it is inherited from. I can override that by making a new method in Student with the same getDiscription() name.

Now getDiscription() is different from the parent.

I can access the parent functionality agan by nameing a variable in the Student getDistribution() method and setting it equal to super.getDescription(). I have overwritten it and now have included it superemposed from the parent to be used along with new functionality.

            CHALLANGE: Travler -> Person

            - Add support for home location
            - Override getGreeting()
            - 1. Hi. I am Andrew Mead. I'm visiting from Philadelphia.
            - 2. Hi I am andrew Mead

26.   Creating a React Component

          - first we cut contents from app.js and paste into new file in playground called jsx-indecision

          - then we setup the babel command to run src/app.js:
              babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

27.   Nesting Components

            -  make React Component IndecisionApp
            -  place in the div from const jsx.
            -  delete const jsx
            -  add '<IndecisionApp />' to the render function at the bottem of the code

      CHALLANGE:

            - Create brand new component called option with text 'Option component here'

      SOLUTION:

            - create class component:

            class Option extends React.Component {
                render() {
                    return (
                        <div>
                            <p>this is an option</p>
                        </div>
                    );
                }
            }

            - then nest It within Options div:

            class Options extends React.Component {
                render() {
                    return (
                        <div>
                            <Option />
                        </div>
                    );
                }
            }

we learned that our components can render jsx meaning they can render other components. That allows us to create the nested structure we need for our applications.

28. Component Props

props are the core of how components communicate with each other

        - similar to html props as they are key value pairs.

        EXAMPLE:
            - we can add "title="Test value" to <Header /> in IndecisionApp

            - in header we can use it by using this before the return statememt:
                console.log(this.props)

The value in the nested <Header /> are logged to the console

now we can use this.props.title in jsx. we have successfully used our first prop.

        CHALLANGE:
            - Setup options prop for Options component
            - Render the length of the array
            - create new paragraph element for every item in the page

        SOLUTION:
            - in Indecision app component pass options variable into the props:
                <Options options={options} />

            - in Options use the variable:
                <h3>{this.props.options.length}</h3>

            -pt.2
                <ol>
    				{this.props.options.map(option => (
    					<p> key{option}</p>
    				))}
    			</ol>

this solves it but to go further we can just pass in <Option /> instead

what we learned is that when we create instances of react components we can also choose to pass data into it that looks very much like html attributes (key value pairs) key is a string and the value can be anything we like, string number or any other js expression. Then we can use that information with this.props. this gives us oneway communication.

29. Events & Methods

instead of having global functions for our events we can add them as methods to our components

    CHALLANGE:
        - Add Remove All button to Options component
        - Setup handleRemoveAll -> alert some message
        - setup onClick to fire method

    SOLUTION:
        class Options extends React.Component {
            handleRemoveAll() {
                alert('handleRemoveAll');
            }
            render() {
                return (
                    <div>
                        {this.props.options.map(option => (
                            <Option key={option} optionText={option} />
                        ))}
                        <button onClick={this.handleRemoveAll}>Remove All</button>
                    </div>
                );
            }
        }

    PT.2:
        - setup the form in AddOption with a text input and a button
        - wire up onSubmit
        - handleAddOption -> fetch the value typed typed -> if value, then alert

    SOLUTION:
        class AddOption extends React.Component {
            handleAddOption(e) {
                e.preventDefault();

                const option = e.target.elements.option.value;

                if (option) {
                    alert(option);
                }
            }
            render() {
                return (
                    <div>
                        <form onSubmit={this.handleAddOption}>
                            <input type="text" name="option" />
                            <button>Add Option</button>
                        </form>
                    </div>
                );
            }
        }

30. Method Binding

we are using bind to reset the context

?? check MDN for more useful things I can do with bind

31. What Is Component State?

state allows our components to manage data so that we dont have to re-render when changes are made

        - setup default state object
        - the component is rendered with default state values *
        - state changes based on event
        - Component re-rendered using new state values
        - ??Start at 3

component state is essential for interactive applications

we learned that our state is an object with key value pairs. we define our initial data and that allows us to get that rendered to the screen(if count is set to 0 it starts at 0). we can change the state object based off of an event.

32.   Adding State to Counter App: Part 1

          - setup babel to run counter-example.js as source:
                babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

          CHALLANGE:
            - create 3 methods: handleAddOne, handleMinusOne, handleReset - Use console.log to print the method name

          SOLUTION:
            class Counter extends React.Component {
                constructor(props) {
                    super(props);
                    this.handleAddOne = this.handleAddOne.bind(this);
                    this.handleMinusOne = this.handleMinusOne.bind(this);
                    this.handleReset = this.handleReset.bind(this);
                }
                handleAddOne(e) {
                    console.log('add one');
                }
                handleMinusOne(e) {
                    console.log('minus one');
                }
                handleReset(e) {
                    console.log('reset');
                }
                render() {
                    return (
                        <div>
                            <h1>Count: </h1>
                            <button onClick={this.handleAddOne}>+1</button>
                            <button onClick={this.handleMinusOne}>-1</button>
                            <button onClick={this.handleReset}>reset</button>
                        </div>
                    );
                }
            }

            ReactDOM.render(<Counter />, document.getElementById('app'));

33.   Adding State to counter App: Part II

            - In the constructor fn set this. state = {}

34.   Alternative setState Syntax

                  - this way has been around for a while:
                      handleReset(e) {
                          this.setState(prevState => {
                              return {
                                  count: 0,
                              };
                          });
                      }

                  - An alternative method that is now concitered preferred:

      our calls to this.setState are asynchronous so they can move to the next line without making a change to the state resulting in the only the last instance being registered.

35.   Build It: Adding State to Visibility toggle

              - setup babel:
                 babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

              CHALLANGE:
                - VisibilityToggle - render, constructor, handleToggleVisibility - visibility -> false

36.   Indecision State: Part I

                  - setup babel:
                   babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

we have children that need to be able to manipulate the parents state for example AddOption needs to get the text from the user and needs to manipulate the piece of state in IndecisionApp to store the new information from the user.

So far with props we have a way to pass information from a parent component to a child component. To reverse this oneway dataflow we are going to include functions as props

        - we define handleDeleteOptions method in indecision app
        - In <Option /> inside the indecision app we add handleDeleteOptions in the props and set it equal to this.handleDeleteOptions
        - in Options component remove handleRemoveAll method as well as the constructor
        - access it from the parend using:
            this.props.handleDeleteOptions
        - In the IndecisionApp constructor bind handleDeleteOptions to this instance:
            this.handleDeleteOptions = this.handleDeleteOptions.bind(this)

now when we click remove all our options dissappear because we took a method and passed it to a child component. The method is used to make changes to the parent component allowing for 2 way communication.

while a component like Options cannot change its own props, new prop values can get passed down from the parent and those will trigger a re-render in child.

        CHALLANGE:
            - create new method in IndecisionApp component called handlepick - pass down to Action and setup onClick - bind
            - Randomly pick object and alert it.

        SOLUTION:
            - delete handlePick in Action
            - create handlePick with logic in Indecision app
            - add to constructor and bind to this instance
            - pass handlePick into <Action /> properties
            - use in action component button onClick:
                this.props.handlePick()

Success! we have allowed a child to communicat with a parent by calling the method.

37.   Indecision State: Part II

In the last videw we learned how to reverse the dataflow from child to parent. Now we are going to do that as well as pass information upstream.

        - in IndecisionApp make handleAddOption method
        - set equal to self with the this binding set to this instance
        - pass down to <AddOption/> as a prop
        - now we call it and pass in option as an argument in AddOption component:
            this.props.handleAddOption(option)

Unlike before we keep the method in AddOption because we need access to things like e.preventDefault or get things from the form

        - we do need to setup a constructor and pass in props
        - pass them up to super
        - then we bind that method

we have 2 handleAdd methods now, one built into the component thats in charge of doing something when the form is submitted and we have one passed down from the parent thats going to manipulate things in terms of that state. It dosent yet.

        - in indecisionApp:
            handleDeleteOptions() {
                this.setState(() => {
                    return {
                        options: [],
                    };
                });
            }

Now we can add to the options from our user interface!!!!! This means we have sucessfully communicated and passed information from a child component to a parent.

        - add error handling incase someone tries to add an option again.

we learned to add component state to as many as we need to , and we can also use function props to communicate in both directions. this allows a child like <Option/> to pass information to a parent like <IndecisionApp/>

not only are we getting data into an array , we are gitting data on an array that lives on the component as component state, and we setup validation for our form.

38.   Summary: Props vs. State

vizual sumary of everything we learned in this section alisudhf

# sec5 Stateless Functional Components

39. Section Intro: Stateless Functional Components

Functional components are another way of doing things. Both ways are useful depending on whats needed. we will be using both.

class components - for things that require state

functional components - for things that dont require state

functional components are quicker than class components, so we should use them when we can

        - easier to read and write
        - easyir to test

        CHALLANGE:
            convert Option Options, and header into functional components

the formula for turning a react class component into a functional component is to

        - make a const and set it equal to a function with props passed in

        - in brackets after that copy the return statement

        - remove all instances of this from the return statement

41. Default Prop Values

we can add default props to a component reguardless of weather it is functional or class based

        CHALLANGE:
            in counter-example.js setup default prop value to 0

42. React Dev Tools

lookup chrome React dev tools in google, or firefox react dev tools and download extensions

43. Removing Individual Options

? looks like im caught up to at least 11:42 with my code but still not working - catching up to where I left off at around 13:09

-  prevState wasent set in on setState on line 18 inside 'handleDeleteOption'. I have it set now.

*                       ? now everything is removed when I only press single remove button

                        * seems to be working great now!!!!!!!!!!!!!!!!

                         - we never do anything in set state becides returning right away which is why we will be doing so implicidly from now on.

looks like I have remove buttons' button already

great app overview at the end of this lesson

44. Lifecycle Methods

lifecycle methods fire at various points in the component lifetime. Theyre only availabel in class based components.

https://reactjs.org/docs/react-component.html

45.   Saving and Loading Options Data

              localStorage.setItem('name', 'name')
              localStorage.getItem('key')
              localStorage.removeItem('key')

      local storage only works with string data, any numbers will be converted into a string.

we overcome this by using json which is a string object

        -JSON.stringify :
            takes regular javascript object and turns it into a string representation

        -JSON.parse :
            takes the string representation and turns it back into a true javascript object

        EXAMPLE:

            JSON.stringify({age:26})
                returns:
                    "{"age":26}"

save it as const

            const json = JSON.stringify({age:28})

convert it back to a javascript object

            JSON.parse(json)


    ?? Only getting back the numberr of options at 7:52 in the lesson

        - seems the local sotrage is working
        - maybe a problem options variable




        ? prevProps not unused in 'componentDidUpdate'
    * const json = "JSON.stringify(this.state.options.length)" on this line I saved the length of options instead of just the options

back on track

If there are no options JSON.parse() returns null which results in an error

        so we set the state in an if statement to run only if options is true
        if its null it wont set state

If the data inside options isint valad data an error arises :

        we use try catch in 'componentDidMount'

46. Saving and Loading the Count

in 'indecision app'

        - set props.options to an empty array
        - delete the default props

do the same for the counter example only setting the state to 0 instead of an empty array

# SEC.6 WEBPACK

48. What Is Webpack?

high level overview

49. Avoid Global Modules

currently webpack is installed globally which is not scalable.

remove global modules

        > yarn global remove babel-cli live-server

            or if with npm

        > npm uninstall -g babel-cli live-server

add as dev dependancies

        > yarn add live-server babel-cli6.24.1

automatically places them in dev dependences

            npm option

       ? > npm i live-server babel-cli6.24.1 -save-dev

? none of this is working, something about no yarn lock file

    - I made a yarn.lock file after re installing yarn, resetting computer,
    and installing live server with yarn (automatically upon installing with yarn)

i installed them individually FINALLY

set up scripts

    live-server:
        - npm run serve

    babel:
        npm run build
            changedL
        build-babel


            or
        yarn run build

now we are set up in a much more scaleable way than using global modules alone.

50.   Installing & Configuring Webpack

          - set build script to "webpack"

          - move app.js into playground folder

          - in src make a new app.js file

          - in the root create file 'webpack.config.js'

webpack.js.org docs to learn about all the ways entry can be used

        to run after config(indecision-app):
            > node webpack.config.js
                results in absolute path to folder

we want it in the public folder so we can serve it up5

        check out docs for 'node path'

        - import path module and usit to join paths '__dirname' and 'public'

Build command works now

        - I now have bundle.js in my public folder

        - inside public, we delete scripts altogether

        - In index.html, remove unneeded script tags and update path to:
            /bundle.js

app.js is running!!!!!

'watch' webpack in the scripts

53. Importing npm Modules

lookup npm validator on npm

        yarn install npm validator:
            yarn add validator@8.0.0

        check docs on npm for the module usage
            import validator form 'validator'

        npm react and npm react dom:

            yarn add react@16.0.0 react-dom@16.0.0

we now have react and react dom installed imported and used. Next we need to setup support for jsx

54.   Setting up Babel with Webpack

          yarn add babel-core@6.25.0 babel-loader@7.1.1

in webpack config setup module object. look at webpack.js.org for the docs

now we can use jsx instead of the react call placeholder

55. One Component per File

we refactored AddOption component from app.js into its own file in components called AddOption.js using export default to then import it in app.js

CHALLANGEs: aced

56. Source Maps with Webpack

we setup devtool property in webpack config file to choose the type of sourcemap we want. check docs for details and options.

now when the test error in AddOption.js we created is thrown , we are directed to that file in the source instead of the convoluted public file. takes us to the original issue instead of the bundle file.

57. Webpack Dev Server

specialized replacement for live-server

look on webpackjs.org for docs for info

        - yarn add webpack-dev-server@2.5.1

after setting up in webpack config file we can make a adjustments to our scripts in package.json

        - remove build-babel command
        - remove watch from build script command
        - add "dev-server" to scripts and set it to "webpack-dev-server"

now we dont need liveserver as the dev server will be activated with the 'yarn run dev-server' command.

58. ES6 class properties

This will allow us to not have to write out a constructor function.

babbel.js.io: look up plugins in the docs

            -yarn add babel-plugin-transform-class-properties@6.24.1

            - configure in babelrc

            class OldSyntax {
                constructor() {
                    this.name = 'Mike';
                }
            }
            const oldSyntax = new OldSyntax();
            console.log(oldSyntax);
                result:
                    OldSyntax {name: 'Mike'}

            class NewSyntax {
                name = 'Jen';
            }
            const newSyntax = new NewSyntax();
            console.log(newSyntax);
                result:
                    same as above without writing out a constructor function

we can now update AddOption by deleting the constructor function, and turning handleAddOption into an arrow function

# SEC 7

58. ES6 class properties

introduction

60. Passing Children to Component

61. Setting up React-Modal

https://github.com/reactjs/react-modal

        - yarn add react-modal@2.2.2

        - in components touch OptionModal.js

10:56 modal showing up as expected

        CHALLANGE:

            - create a new event handle in IndecisionApp
            - Pass that into OptionalModal
            - call it on click

62. Bonus: Refactoring Other Stateless Functional Components Up next

63. Section Intro: Styling React How did this section go?

64. Setting up Webpack with SCSS

run stuff whenever webpack discovers a styles file

lookup css-loader package on npm allows webpack to load in our css assets

npm package style-loader as well

    yarn add style-loader@0.18.2 css-loader@0.28.4

        configuration:

            {
    			test: /\.scss$/,
    			use: ['style-loader', 'css-loader'],
    		}

now we can load our styles into app.js using an import statement like we would with a javascript file

lookup ' sass-lang.com '

yarn add sass-loader@6.0.6 node-sass@4.5.3

        ? gyp error
            seems not installing properly 10:50

-  finally after installing individually it worked, though node sass took a couple trys

sass styles now connected

65. Architecture and Header Styles

By default 1rem is 16px, this can be unintuitive to calculate as is,

        SOLUTION:
            - set html font size to 62.5%

now if we 'ctrl + shift + c' and select the element, we can select the computed tab as apposed to the style to see that 1rem is now 10px. Easier to calculate.

        - then we set fontsize in the body to 1.6rem which calculates to 32px

        - make a components folder in styles.

        - import into styles.scss

        - now we navigate to the corisponding component in source
        - we give the div 'className="header" as opposed to just class as it is jsx.

lookup getbem for info on block element midifier

66. Reset That $#!\*

lookup normalize css to find resets so we are always have the same starting point for communication with other browsers

        > yarn add normalize.css@7.0.0
            then we import it into app.js
                then we update the test: regExpression to:
                    test: /\.s?css$/,

Now some of the wierd browser margins are gone and we have a good starting point.

Again, look into regular expressions.

67. Theming with Variables

68. Big Button & Options List

lookup 'sass reference functions'

69.   Styling the Options List

          CHALLANGE:
              - setup an element selector for widget-header
              - set margin
              - use the class

          CHALLANGE:

              - create a widget element selector
              - use it on the p tag
              - off-white color
              - no margin
              l size padding on all sides
              - center the text using - text-align: center;
              - set the bottom border 1px solid border lightened version of $light-blue 10%

70.   Styling Option Item

71.   Styling React-Modal

72.   Mobile Considerations

73.   Bonus: Favicon

74.   Setting Up Budget App

# SEC 9 React Router

cloneing and gutting indecision app to gut it for an expensify app

77. React-Router 101

google react-router to find the github repo page

by the end of this lesson we should have a page for each compnent

        - yarn add react-router-dom4.2.2

        CHALLANGE:

            -add /edit : /EditExpensePage
            -add /help : /helpPage

understood.

review at : 19:00

78. Setting up a 404

if someone trys to access a route that dosent exist, an empty page is rendered. Insted we need a error route

        using Switch
            -add it to imports in app.js 'Switch'
            - change the div in routes to '<Switch>

this will change behavior of react router. With switch react moves through switch routes in order until a match is found, then it stops.

now we get the first match for a route only, and if we dont have a match , the 404 error appears.

79. Linking Between Routes

Switching pages without a full refresh!!

        Old way(causes refresh):


            const  NotFoundPage = () => <div>404! <a href='/' >Go home</a> </div>;

        add "Link" to our imports
            replace "<a>" tags with "<Link>" and "href" with "to" like so:

                <div>
    	            404! <Link to="/">Go home</Link>
                </div>`

...

        CHALLANGE:
            -link to home page
            -link to the create expense page
            -link to the edit page
            -linking to the help page

now we can navigate through each page of without a full page reload!!!!!!

to style the links :

        import 'Navlink' at the top of the file.
            - below , change every instance of "Link" to "NavLink"

now we can add prop "activeClassName='is-active'"

        then in styles we target it and set it to bold:

            .is-active {
                        font-weight: bold;
                        }

Now the navigation route that is active now shows up bold.

80.   Organizing Our Routes

              -im src mkdir routers
              - in routers touch AppRoter.js

      from app.js cut everything but the imports and the render call and paste into AppRouter

              CHALLANGE :
                  - create 6 new files for 6 components
                  - setup imports, component, default export
                  - import into AppRouter so they can be used

      Getting lost with what imports and exports where

81.   Query Strings and URL Parameters

82.   Build It: Router for Portfolio Site ( great spot for review)

          CHALLANGE: clone expensify-app to make a portfolio-site

              /  -> Home page (in nav)
              /portfolio -> portfolio item page that shows the ID
              /portfolio/123 -> individual portfolio item page that shows the ID
              /contact -> Contact page (in nav)

follow through

# SEC: 10 Redux

84. Why Do We Need Something Like Redux?

component state and redux both solve the same problem, tracking changing data.

        Component State (IndecisionApp):

in indecision app all the data lives in the Indecision-app component, is passed down to options, option, and AddOption, and Is Passed Up to Indecision App from AddOption. This is simple and is easaly handled using component state.

        - its clear where the state should live
        - components are reliant on each other thus not truely reusable
        - good to use when passing a prop to a child that said child will make use of.

components communicate with eachother for state data

        REDUX (ExpenxsifyApp):

In the expensify-app we are going to be building, data will live in AddExpensePage to b passed down to AddExpense, and data in ExpenseDashboardPage to be passed down only to Expenses, and expence. Being more complex and having data in 2 places only needed in specific places, the ExpensifyApp is a good candidate to use REDUX to manage data(state)

        - theres not one clear place where the state should live
        - we can route data needed in multiple places without routeing through the parent makeing our components actually reuseable.
        - Instead of passing props from child to child to be used down the chain, REDUX helps us avoid this.

Redux Store is an object in which we store data. The components can choose individually what to do with the data they need(retreve and edit).Instead of communicating with each other, the components only need to communicate with Redux store. This allows for great scaleability.

85. Setting up Redux

lookup redux.js.org

        - yarn add redux@3.7.2
        - import {createStore} from 'redux'

        redux-101.js
            import {createStore} from 'redux';

            const store = createStore((state = {count: 0}) => {
                return state;
            });

            console.log(store.getState());

86.   Dispatching Actions - (an object that gets sent to the store)

          see redux-101.js in playground

87.   Subscribing and Dynamic Actions

How do we watch for changes in the redux state

88.   ES6 Object Destructuring

          - touch destructuring.js file in playground

89.   ES6 Array Destructuring

          - also in destructureing.js

90.   Refactoring and Organizing

storing objects manually make it difficult when an error is made because the code wont work and there is no error message. If we call the info as a function instead, we get an error message if we misspell the function

?? got lost halfway through this lesson \*\* typo

all caught up

did more than I needed in this part of the challange:

        my challange solution:

const setCount = ({setTo = 0} = {}) => ({ type: 'SET', setTo, });

        class solution:

const setCount = ({count}) => ({ type: 'SET', count, });

good lesson to review to see what redux looks like in a single file as it will be broken up later. Abstracted.

91.   Reducers

          - pure functions
          - does no use anything outside of their scope
          - dosent change anything outside the function scope
          - Only uses whats passed in.
          - Never changes state pr actions

Not Pure function: It relies on data from the outside.

        let a = 10;

            const add = (b) => {
            return a + b;
        }

Pure Fn: only data it uses if from inside the function (parameters passed in)

        const addPure = (a, b) => {
            return a + b;
        }

not pure because it makes changes outside the function

            let result;

            const add2 = (b, b) => {
                result = a + b;
            }

before we were passing a reducer into the function for createing the store. Instead we create a function for the reducer and reference it in properties of store fn. This way we can facilitate multiple reducers

92. Working with Multiple Reducers

93. ES6 Spread Operator in Reducers (array spread)

7:30 so far so good

followed along with challange

94. Spreading Objects

FOLLOWN THROUGH CHALLANGES

inside arrays we spread arrays inside objects we spread objects

for objects we need to customize babel to support this syntax

lookup the plugin in google: babel object spread operator

obj spread example:

        const user = {
            name: 'Jen',
            age: 24,
        };

console.log({ age: 27, // not overwritten before the spreade ...user, location: 'Philadelphia', // age: 27, // age is overwritten to 27 }); esd

95. Wrapping up Our Reducers

3:40 working

aced challange

96.   Filtering Redux Data

          copied from course materials because I took time off the subject

97.   Sorting Redux Data

# sec 11 React with Redux

98.   Section Intro: Connecting React and Redux

99.   Organizing Redux

          * got webpack to compile
          > next lets see if theres still errors to troubleshoot n the console

OMG. 8 hours to rediscover im dyslexic: mispelled filters in the import statement

100. The Higher Order Component

     CHALLANGE: requireAuthentication

101. Connecting Store and Component with React-Redux

https://github.com/reduxjs/react-redux

        ? getting an error recomending i remove my package.lock json files and only use yarn or npm but not both as they can conflict
        > removeing the lock file and refraining from using npm to download packages in favor of yarn , which i do use npm to aquire.

we setup provider in the root of our application which let us define a store that we can provide to all of our components (step 1]) next we created higher order function

    102. Rendering Individual Expenses

        CHALLANGE: Export a stateless functional component description, amount, createdAt

    103. Controlled Inputs for Filters

we now have our firs component thats not only reading from the store but also writeing to it as well

    104. Dropdown for Picking SortBy

    105. Creating Expense Add/Edit Form

        8:47 - so far so good

        CHALLANGE: setup note state setup onChange and value for textarea

        Something went wrong got it

        11:31: everything is working

        13:04 " "

https://regex101.com/ - resource for rejex deffinition matching

106. Setting up a Date Picker

https://momentjs.com/ - time library for manipulating and formating time, nodes datetime

    $ yarn add moment@2.18.2 react-dates@12.3.0
     yarn add react-dates@12.7
        -or if problems
            yarn add react-dates@12.7

     as well as this one as well

react-addons-shallow-compare@15.6.0

4:24 after installing dependancies and restarting dev server.

        @ 16:46 im not getting a datepicker like he does
        > starting again at 12:44
        > jump to 15:14
    * it was working fine originally, I just hadent navigated to add expense page yet

107. Wiring up Add Expense

     13:42-works so far

add expense form done

108.  Wiring up Edit Expense

             back at it at 5:17 ?
             seems to be up to date at 8:03

109. Redux Dev Tools
 lookup redux developer tools extension

 https://github.com/reduxjs/redux-devtools/tree/main/extension#installation

 111. Section Intro: Testing React Components
