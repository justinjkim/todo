import React from 'react';

class TodoList extends React.Component {
	render() {
		return(
			<form onSubmit={this.props.addItem}>
				<input 
					type="text" 
					placeholder="Buy milk..."
					ref={this.props.inputElement}
					value={this.props.currentItem.text}
					onChange={this.props.handleInputChange} 
				/>
				<button type="submit">Add Task</button>
			</form>
		);
	}
}

export default TodoList;