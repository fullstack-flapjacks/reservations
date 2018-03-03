import React from 'react';
import PartySelector from '../components/PartySelector';
import DatePicker from '../components/DatePicker';
import TimeSelector from '../components/TimeSelector';
import App from '../components/App';


describe('Core <App /> component tests', () => {
  test('renders <PartySelector /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PartySelector).length).toEqual(1);;
  });

  test('renders <DatePicker /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(DatePicker).length).toEqual(1);;
  });

  test('renders <TimeSelector /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(TimeSelector).length).toEqual(1);;
  });
});

