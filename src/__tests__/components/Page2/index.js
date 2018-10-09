// __tests__/components/Page1.js
import React from 'react';
import Page2 from '../../../components/Page2';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Page2 />).toJSON();
  expect(tree).toMatchSnapshot();
});
