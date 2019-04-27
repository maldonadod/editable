import React from 'react';
import { render } from 'react-testing-library';
import ValueRenderer from './ValueRenderer';

it('renders without crashing', () => {

	const value = "hello"
	const { debug } = render(
		<ValueRenderer value={value} />
	)
	debug()
});
