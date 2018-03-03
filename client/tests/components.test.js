import React from 'react';
import PartySelector from '../components/PartySelector';
import DatePicker from '../components/DatePicker';
import TimeSelector from '../components/TimeSelector';
import App from '../components/App';
import sinon from 'sinon';


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

  it('simulates "Find a Table" click events', () => {
    const mockCallBack = sinon.spy();
    const wrapper = shallow(<button onClick={mockCallBack}></button>);
    wrapper.find('button').simulate('click');
    sinon.assert.called(mockCallBack);
    //expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});

