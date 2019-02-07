import React from 'react';

class TodoItems extends React.Component {
	render() {
		return(
			<li>{this.props.addItem}</li>
		);
	}
}

export default TodoItems;