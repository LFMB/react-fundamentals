class HelloWorld extends React.Componet {
	render(){
		return(
			<div>Hello {this.props.name}</div>
		)
	}
}

ReactDOM.render(<HelloWorld name='Lucas' />, document.getElementById('app'))


// refactored as a stateless functional component
function HelloWorld (props) {
	return (
		<div>Hello {props.name}</div>
	)
}

ReactDOM.render(<HelloWorld name='Lucas' />, document.getElementById('app'))