import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from './NewTodoForm';

it('should render without crashing', () => {
    render(<NewTodoForm />); 
})

it('should match with snapshot', () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot(); 
})