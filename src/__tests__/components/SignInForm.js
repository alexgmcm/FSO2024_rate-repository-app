import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from '../../components/SignIn/SignInForm';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
        render(<SignInForm onSubmit={onSubmit}/>)
        const username = "testuser"
        const password = "hunter2"
        fireEvent.changeText(screen.getByPlaceholderText('username'), username);
        fireEvent.changeText(screen.getByPlaceholderText('password'), password);
        fireEvent.press(screen.getByText('Sign in'));
      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: username,
          password: password,
        });

      });
    });
  });
});