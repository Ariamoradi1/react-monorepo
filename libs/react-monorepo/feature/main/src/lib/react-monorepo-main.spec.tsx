import { render } from '@testing-library/react';

import ReactMonorepoMain from './react-monorepo-main';

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactMonorepoMain />);
    expect(baseElement).toBeTruthy();
  });
});
