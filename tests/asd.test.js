import React from 'react';
import renderer from 'react-test-renderer';

import asd from '..\src\component\asd.js';

describe('<asd />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<asd />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });