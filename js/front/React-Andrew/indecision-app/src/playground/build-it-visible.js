// SOLUTION - Adding state to Visibility toggle
class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			title: 'Visibility Toggle',
			visible: false,
			message: 'Now you see me!!!',
		};
	}
	toggle() {
		this.setState(prevState => {
			return {
				// visible: this.state.visible ? false : true,
				visible: !prevState.visible, // more concice form of whats above
			};
		});
		render();
	}
	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<button onClick={this.toggle}>{this.state.visible ? 'Hide text' : 'Show text'}</button>
				<p>{this.state.visible ? this.state.message : ''}</p>
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// console.log('Visibility toggle app running');

// var appRoot = document.getElementById('app');
// let visible = true;

// let app = {
// 	title: 'Visibility Toggle',
// 	message: 'Now you can see this message',
// };

// const render = () => {
// 	const jsx = (
// 		<div>
// 			<h1>{app.title}</h1>
// 			<button onClick={toggle}>{visible ? 'Hide text' : 'Show text'}</button>
// 			<p>{visible ? app.message : ''}</p>
// 		</div>
// 	);
// 	ReactDOM.render(jsx, appRoot);
// };

// // if statement converted to turnary operator
// const toggle = () => {
// visible ? (visible = false) : (visible = true);
// render();
// };
// render();
