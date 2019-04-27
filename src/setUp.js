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
	const editingValueContent = () => queryByTestId("editing-value").textContent

	return {
		renderedValueContent,
		editingValueContent,
		clickOnRenderedValue,
		renderedValue,
		debug
	}
}