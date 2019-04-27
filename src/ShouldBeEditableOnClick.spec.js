import setUp from './setUp';

it('should hide rendered value when clicks on it and show editing value', () => {

	const value = jest.fn(() => "hello")
	const { clickOnRenderedValue, editingValueContent, renderedValue } = setUp({value})

	clickOnRenderedValue()

	expect(renderedValue()).toBeNull()
	expect(editingValueContent()).toEqual(value())
});