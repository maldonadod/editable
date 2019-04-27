import React from "react"

export default class ValueRenderer extends React.Component {

	render() {
		const value = this.props.value
		return (
			<span data-testid="rendered-value">{value()}</span>
		)
	}
} 