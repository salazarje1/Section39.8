import { render, fireEvent } from '@testing-library/react'; 
import BoxList from './BoxList';

test('box list renders without crashing', () => {
    render(<BoxList />);
})

test('it matches snapshop', () => {
    const { asFragment } = render(<BoxList />)

    expect(asFragment()).toMatchSnapshot(); 
})

test('form should add new box to list', () => {
    const { container, getByLabelText, queryByText } = render(<BoxList />);

    const boxes = container.getElementsByClassName('Parent');
    const input = getByLabelText("Color");
    const btn = queryByText('Add Box'); 

    expect(boxes.length).toBe(2); 

    fireEvent.change(input, { target: { value: 'Green' } }); 
    fireEvent.click(btn); 

    expect(boxes.length).toBe(3); 

})