import { render } from '@testing-library/react';

import ButtonReact from './button-react';

describe('ButtonReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonReact />);
    expect(baseElement).toBeTruthy();
  });
});
