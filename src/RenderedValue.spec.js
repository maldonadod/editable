import setUp from './setUp';
import { cleanup } from 'react-testing-library';

const MOCK_VALUE = "hello";

beforeEach(cleanup)

test('should render the value passed in by calling it', () => {

	const value = jest.fn(() => MOCK_VALUE)
	const { renderedValueContent } = setUp({value})
	
	expect(value).toHaveBeenCalled()
	expect(renderedValueContent()).toEqual(value())
});

test('should hide rendered value when clicks on it and show editing value', () => {

	const value = jest.fn(() => MOCK_VALUE)
	const { clickOnRenderedValue, editingValueContent, renderedValue } = setUp({value})

	clickOnRenderedValue()

	expect(renderedValue()).toBeNull()
	expect(editingValueContent()).toEqual(value())
});

test('should change value when push values into editing value', () => {

	const value = jest.fn(() => MOCK_VALUE)
	const {
		clickOnRenderedValue,
		pushValueToEditingValue,
		editingValueContent
	} = setUp({value})

	clickOnRenderedValue()

	const input = "a"

	pushValueToEditingValue(input)

	expect(editingValueContent()).toEqual(input)
});
