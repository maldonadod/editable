import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import ValueRenderer from './ValueRenderer';

export default function setUp({value}) {
	const { debug, queryByTestId } = render(
		<ValueRenderer value={value} />
	)
	const renderedValue = () => queryByTestId("rendered-value")
	const renderedValueContent = () => renderedValue().textContent
	const clickOnRenderedValue = () => fireEvent.click(renderedValue())
	const editingValue = () => queryByTestId("editing-value")
	const editingValueContent = () => editingValue().value
	const pushValueToEditingValue = (value) => fireEvent.change(editingValue(), { target: { value } })

	return {
		pushValueToEditingValue,
		renderedValueContent,
		editingValueContent,
		clickOnRenderedValue,
		renderedValue,
		debug
	}
}