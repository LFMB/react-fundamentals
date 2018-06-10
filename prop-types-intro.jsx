var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class Users extends React.Component{
	render(){
		var friends = this.props.list.filter(function(user){
			return user.friend === true;
		});

		var nonFriends = this. props.list.filter(function(user){
			return user.friend !== true;
		});

		return(
			<div>
				<h1>Firends</h1>
				<ul>
					{friends.map(function(user){
						return(
							<li key={user.name}>
								{user.name}
							</li>
						) 
					})}
				</ul>

				<hr/>

				<h1>Non Friends</h1>
				<ul>
					{nonFriends.map(function(user){
						return(
							<li key={user.name}>
								{user.name}
							</li>
						) 
					})}
				</ul>
			</div>
		)
	}
}

Users.propTypes = {
	list: PropTypes.array.isRequried,
	// list: PropTypes.arrayOf(PropTypes.object),
	/* list: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		friend: PropTypes.bool.isRequired,
	})),
	*/
}


ReactDOM.render(
	<Users list={[
		{name: 'Lucas', friend: true},
		{name: 'Hank', friend: true},
		{name: 'Lindsay', friend: false},
		{name: 'Jackie', friend: true},
		{name: 'Alisha', friend: false},
		{name: 'Anne Umphrey', friend: false}]}
	/>,
	documuent.getElementById('root')
);