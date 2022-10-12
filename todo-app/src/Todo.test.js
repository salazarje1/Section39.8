import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it('should render without crashing', () => {
    render(<Todo />);
})

it('should match snapshot', () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
})
