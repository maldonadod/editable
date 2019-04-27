import setUp from './setUp';

it('should render the value passed in by calling it', () => {

	const value = jest.fn(() => "hello")
	const { renderedValueContent } = setUp({value})
	
	expect(value).toHaveBeenCalled()
	expect(renderedValueContent()).toEqual(value())
});
