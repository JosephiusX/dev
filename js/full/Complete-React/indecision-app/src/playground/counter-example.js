class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                {this.state.name}
                <h1>count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor


ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//      count++ // count = count + 1;
//      renderCounterApp();
    
//     }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => { // this function helps us to re render when there is a change
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot); // react dom render only re renders specifically what is changed. It dosent bother to render parts that havent changed
// };

// renderCounterApp();