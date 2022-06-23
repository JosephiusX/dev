console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:[]
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    render();
};

const removeAll = () => {
    app.options = []
    render()

}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1>
            <p>{app.subtitle && app.subtitle}</p>
            <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick ={removeAll}>RemoveAll</button>
            {
                // numbers.map((number) => {
                //     return <p key={number}>Number: {number}</p>
                // })
            }
            <ol>
              {
                  app.options.map((option) => {
                      return <li key={option}>{option}</li>;
                  })
              }
            </ol>
           
            <form onSubmit={onFormSubmit}> {/* here we reference the form we dont call it, no () */}
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();