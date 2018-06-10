var React = require('react');
// removes the 'this' keyword from code 


function FriendItem (props) {
	return <li>{props.friend}</li>
}


function FriendsList (props) {
	return(
		<h1>Friends:</h1>
		<ul>
			{props.friends.map((friend, index) => <FriendItem friend={friend} key={friend} />)}
		</ul>
	)
}

module.exports = FriendsList;