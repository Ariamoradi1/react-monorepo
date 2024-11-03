import { render } from '@testing-library/react';

import ReactMonorepoHome from './react-monorepo-home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactMonorepoHome />);
    expect(baseElement).toBeTruthy();
  });
});
