import React from "react"

export default class ValueRenderer extends React.Component {

	state = {
		isEditing: false,
		editing_value: ""
	}
	
	startEdition = (initialValue) => {
		this.setState({
			isEditing: true,
			editing_value: initialValue
		})
	}

	changeEditingValue = (e) => {
		const value = e.target.value

		this.setState({
			editing_value: value
		})
	}

	renderEditingComponent = (value) => {
		const { editing_value } = this.state;
		return (
			<input
				onChange={this.changeEditingValue}
				data-testid="editing-value"
				value={editing_value} />
		)
	}

	renderValue = (value) => {
		return <span onClick={() => this.startEdition(value)} data-testid="rendered-value">{value}</span>
	}

	render() {
		const value = this.props.value
		const isEditing = this.state.isEditing
		return isEditing
			? this.renderEditingComponent(value())
			: this.renderValue(value())
	}
} 