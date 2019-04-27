import React from "react"

export default class ValueRenderer extends React.Component {

	state = {
		isEditing: false
	}

	startEdition = () => {
		this.setState({
			isEditing: true
		})
	}

	renderEditingComponent = (value) => {
		return <span data-testid="editing-value">{value}</span>
	}

	renderValue = (value) => {
		return <span onClick={this.startEdition} data-testid="rendered-value">{value}</span>
	}

	render() {
		const value = this.props.value
		const isEditing = this.state.isEditing
		return isEditing
			? this.renderEditingComponent(value())
			: this.renderValue(value())
	}
} 