import React from 'react';
import { render } from 'react-testing-library';
import ValueRenderer from './ValueRenderer';

it('should render the value passed in by calling it', () => {

	const value = jest.fn(() => "hello")
	const { debug, getByTestId } = render(
		<ValueRenderer value={value} />
	)
	const valueRendererContent = () => getByTestId("rendered-value").textContent
	
	expect(value).toHaveBeenCalled()
	expect(valueRendererContent()).toEqual(value())
});
