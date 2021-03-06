import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBarRenderer from './search-bar-renderer';

configure({ adapter: new Adapter() });

test('SearchBarRenderer should be a function', () => {
  expect(typeof SearchBarRenderer)
    .toBe('function');
});

test('SearchBarRenderer should render correct structure', () => {
  const wrapper = shallow(
    <SearchBarRenderer
      iconType='refresh'
      placeholder='hello world'
      isFocused={true}
      onBlur={() => {}}
      onChange={() => {}}
      onClear={() => {}}
      onFocus={() => {}}
      showClearButton={true}
      theme='dark'
      value='hello world' />
  );

  expect(wrapper.find('Icon'))
    .toHaveLength(2);
});
