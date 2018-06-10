class ProfilePic extends React.Component {
	render(){
		return(
			<img src={'https://photo.fb.com' + this props.username} />
		)
	}
})

class ProfileLink extends React.Component {
	render(){
		return (
			<a href={'https://www.fb.com/' + this.props.username}>
				{this.props.username}
			</a>
		)
	}
})

class Avatar extends React.Component {
	render(){
		return(
			<div>
				<ProfilePic username={this.props.username} />
				<ProfileLink username={this.props.username} />
			</div>
		)
	}
})

<Avatar username="lucasblom" />





// Stateless Functional Components

var ProfilePic = function(props){
	return <img src={'https://photo.fb.com/' + props.username} />
}

var ProfileLink = function (props){
	return(
		<a href={'https://www.fb.com/' + props.username}>
			{props.username}
		</a>
	)
}

var Avatar = function(props){
	return(
		<div>
			<ProfilePic username={props.username} />
			<ProfileLink username={props.username} />
		</div
	)
}

<Avatar username="lucasblom" />