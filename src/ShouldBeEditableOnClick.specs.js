import React from 'react';
import { render } from 'react-testing-library';
import ValueRenderer from './ValueRenderer';

function setUp({value}) {
	const { debug, getByTestId } = render(
		<ValueRenderer value={value} />
	)
	const valueRendererContent = () => getByTestId("rendered-value").textContent

	return {
		valueRendererContent,
		debug
	}
}

it('should be editable on click', () => {

	const value = jest.fn(() => "hello")
	const { valueRendererContent } = setUp()

	expect(value).toHaveBeenCalled()
	expect(valueRendererContent()).toEqual(value())
});
