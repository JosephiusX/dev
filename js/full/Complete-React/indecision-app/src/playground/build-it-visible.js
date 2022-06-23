
class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }
    handleToggleVisibility() {
       this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        };
       });
    }
    render () {
          return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. Thease are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// const app = {
//     title:  "Visibility Toggle",
//     details: "hey thease are some details I can now see"
// }

// let visibility = false;

// const toggle = () => {
//     visibility = !visibility
//     render()
// }

// const appRoot = document.getElementById('app');

// const render = () => {
    // const jsx = (
    //     <div>
    //         <h1>{app.title}</h1>
    //         <button onClick={toggle}>{visibility ? 'Hide details' : 'Show details'}</button>
    //         {visibility && (
    //             <div>
    //                 <p>{app.details}</p>
    //             </div>
    //         )}
    //     </div>
    // );
//     ReactDOM.render(jsx, appRoot);
// };

// render();