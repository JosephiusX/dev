# Complete-React

sec.2 L.2

     install yarn glabally:
        npm install -g yarn

sec.3 Hello React

     Indecision app
        page : https://indecision.mead.io

        source : https://github.com/andrewjmead/react-course-2-indecision-app

    installing live-server with yarn:
        yarn global add live-server

    installing live-server with npm if yarn isin't working:
        npm i -g live-server

    to run the public directory run live server from inside its parent directory like so:
        live-server public

L.9 Setting up Babel

    instead of installing individual plugins , we can use React Presets instead that will have the plugins that we need

        install babel:
            yarn global add babel-cli@6.24.1
            npm i -g bable-cli@6.24.1

            I had trouble with the yarn and when I tryed npm the issue was the same, to fix this I uninstalled them both and used the npm command again
            yarn global remove babel-cli
            npm uninstall -g babel-cli 
            npm install -g babel-cli
        then to check if it worked
            babel --help

        initalize package.json using yarn
            yarn init

        install react preset:
            yarn add babel-preset-react@6.24.1

        install env preset:
            yarn add babel-preset-env@1.5.2
            
        our first babel command(to compile the code):
            babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
        we leave this running in the background

L.10 Exploring JSX

         some extensions that are helpful with JSX:
            Babel ES6/ES7
            Path Intellisense

L.13 ES6 const and let

        in the source dir create playground folder
        in playground folder create es6-let-const.js
        stop babel and restart it to compile the file we just created:
        babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch

L.15 Arrow functions pt 2

        we make arrow-functions-2.js file and connect it up wit babel:
        babel src/playground/es6-arrow-function-2.js --out-file=public/scripts/app.js --presets=env,react --watch

        then run live server from inside the public dir

L.16 Events and attributes

        switch babel back to app.js:
        babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

L.21 Build It: Visibility toggle

    set up babel from the indecision dir:
    babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

L24. ES6 Classes

    babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

    recap: classes are genaric templates. 
    when we call the class with new we can set the individual details for that instance

L.25 Es6 Classes II

    we can override method in parent class by defining the same method name

L.26 Creating React Component

    configure babel:
    babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

    React components wont work without a uppercase first letter
    this is how it diferenciates betwen html and react elements

L.27 Nesting Components

    Our components can render jsx meaning they can also render other components

L.28 Component Props

    I can pass in properties to my components similar to how it would be done in html
    their actually just key value pares
    when we pass data into a component we can use that data inside of the component

L.32 Adding State to counter app pt 1

    set up babel:
        babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

L.35 Build it: Adding State to VisibilityToggle

    set up babel:  
    babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

L.36 Indecision State: pt 1

    set up babel: 
    babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

    In this lesson we tought a child to communicate with its parent

L.38 Section summary Props vs. State

    Props Vs States: 
        They both: 
            are objects
            can be used when rendering
            Changes cause re-renders
    
        diffrences
    Props : defined from above

    State: defined form component inself
        
L. 40 The statless functional component 

    class based components are good for when we need to used state

    functional components are quicker and better for the components where we dont need state



        



        