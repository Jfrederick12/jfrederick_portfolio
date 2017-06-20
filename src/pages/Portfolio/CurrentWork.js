import React, {Component} from 'react';
import './current-work.css';

class CurrentWork extends Component {
	constructor(props) {
		super(props)
		this.state = ({
			display: this.props.display
		})
	}

	openWork() {
		this.props.openWork()
	}

	close() {
		this.setState({ display: 'none' })
	}

	render() {
	console.log(typeof this.props.display === 'string')
	console.log(this.state.display)
	console.log(this.props.display)
		return(
			<div style={{display: this.state.display}}>
			<button onClick={this.close.bind(this)}>close</button>
			</div>
		)
	}
}

export default CurrentWork;