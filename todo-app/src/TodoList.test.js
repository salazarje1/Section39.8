import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it('should render without crashing', () => {
    render(<TodoList />)
})

it('should match snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot(); 
})

it("shoudl add new task", () => {
    const { queryByText, getByLabelText } = render(<TodoList />); 

    const input = getByLabelText("New Task");
    const btn = queryByText('Add New Task'); 

    expect(queryByText("Clean")).not.toBeInTheDocument(); 

    fireEvent.change(input, { target: { value: "Clean"} });
    fireEvent.click(btn);

    expect(queryByText("Clean")).toBeInTheDocument(); 
})