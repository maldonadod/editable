import React from 'react';
import { render } from 'react-testing-library';
import ValueRenderer from './ValueRenderer';

it('should render the value passed in by calling it', () => {

	const value = jest.fn(() => "hello")
	const { debug, getByTestId } = render(
		<ValueRenderer value={value} />
	)
	
	expect(value).toHaveBeenCalled()
	expect(getByTestId("rendered-value").textContent).toEqual(value())
});
