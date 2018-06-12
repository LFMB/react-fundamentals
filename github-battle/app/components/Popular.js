var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

// if writing simple ui components with just render methods can do the following
// stateless functional component
/*
function SelectLanguage (props){
	var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

	return (
		<ul className='languages'>
		{languages.map(function(lang){
			return(
				<li
				style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
				onClick={props.onSelect.bind(null, lang)}
				key={lang}>
					{lang}
				</li>
			)
		})}
		</ul>
	)
}

*/

class SelectLanguage extends React.Component {
	render(){
		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

		return(
			<ul className='languages'>
			{languages.map(function(lang){
				return(
					<li
					style={lang === this.props.selectedLanguage ? {color: '#d0021b'}: null}
					onClick={this.props.onSelect.bind(null, lang)}
					key={lang}>
						{lang}
					</li>
				)
			}, this)}
			</ul>
		)
	}
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}



class Popular extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};

		this.updateLangauge = this.updateLangauge.bind(this);
	}

	componentDidMount(){
		// stopped at 5:57 at https://learn.tylermcginnis.com/courses/50507/lectures/2466755#/questions/3
	}

	updateLangauge(lang){
		this.setState(function(){
			return(
				{
					selectedLanguage: lang
				}
			)
		});
	}

	render() {
		
		return(
			<SelectLanguage 
				selectedLanguage={this.state.selectedLanguage}
				onSelect={this.updateLangauge}
			/>
		)
	}	
}


module.exports = Popular;