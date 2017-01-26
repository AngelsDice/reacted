import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
const Loader = require('../Loader').default;

describe('Loader', function() {
    
    it('should exists', function() {
        let component = shallow(<Loader />);
        expect(component.length).toBeTruthy();
    });

    it('should display default text if not value is passed', function() {
        let component = shallow(<Loader />);
        expect(component.length).toBeTruthy();
        expect(component.find('div.text-center').length).toBe(1);
        expect(component.find('span.sr-only').text()).toEqual('Loading');
    });

    it('should display correct displayText and position', function() {
        let component = shallow(<Loader displayText="Updating" position="left" />);
        expect(component.length).toBeTruthy();
        expect(component.find('div.text-left').length).toBe(1);
        expect(component.find('span.sr-only').text()).toEqual('Updating');
    });
});