import React from 'react';
import * as Form from '@radix-ui/react-form';

function LoginForm() {
  return (
    <Form.Root>
      <Form.Field name="email">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Form.Label>Email</Form.Label>
          <Form.Message match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input type="email" required />
        </Form.Control>
      </Form.Field>
      <Form.Field name="password">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Form.Label>Password</Form.Label>
          <Form.Message match="valueMissing">Please enter your password</Form.Message>
        </div>
        <Form.Control asChild>
          <input type="password" required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button style={{ marginTop: 10 }}>
          Login
        </button>
      </Form.Submit>
    </Form.Root>
  );
}

export default LoginForm;

/**
 * Unstyled Radix Components in use... (for reference)
 * https://www.radix-ui.com/primitives/docs/components/form#form
 */
