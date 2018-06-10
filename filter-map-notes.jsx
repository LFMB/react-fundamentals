var numbers = [1,2,3];
var numbersPlusTen = numbers.map(function (num){
	return num + 10;
});

console.log(numbersPlusTen);


// using filter
var friends = ['Chris', 'Shep', 'Bill', 'Barrett', 'Jackie', 'SamBo'];
var newFriends = friends.filter(function(friend){
	return friend[0] === 'B'
});





class FriendsContainer extends React.Component {
	render(){
		var name = 'Lucas Blom';
		var friends = ['Jackie Doyle', 'Chris Marshall', 'Bill Marshall'];
		var moreFriends = ['Shep', 'SamBo', 'Barrett', 'JOBs', 'Barrett', 'Mike'];

		var namesStartWithB = moreFriends.filter(function(friend){
			return friend[0] === 'B'
		});

		return (
			<div>
				<h3> Name: {name}</h3>
				<ShowList names={friends} />
				<ShowFilteredList filteredNames={namesStartWithB} />
			</div>
		)
	}
}

class ShowList extends React.Component {
	render() {
		return(
			<div>
				<h3>Friends</h3>
				<ul>
					{this.props.names.map(function(friend){
						return <li>{friend}</li>
					})}
				</ul>
			</div>
		)
	}
}



class ShowFilteredList extends React.Component {
	render(){
		return(
			<div>
				<p>Friends names that start with B</p>
				<ul>
					{this.props.filteredNames.map(function(filteredName){
						return <li>{filteredName}</li>
					})}
				</ul>
			</div>
		)
	}
}





