// __tests__/components/Page1.js
import React from 'react';
import Page1 from '../../../components/Page1';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Page1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
