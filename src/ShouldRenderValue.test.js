import React from 'react';
import { render } from 'react-testing-library';
import ValueRenderer from './ValueRenderer';

it('should render the value passed in', () => {

	const value = "hello"
	const { debug, getByTestId } = render(
		<ValueRenderer value={value} />
	)

	expect(getByTestId("rendered-value").textContent).toEqual(value)
});
