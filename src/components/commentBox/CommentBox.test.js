import React from "react";
import CommentBox from "./CommentBox";
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure ({adapter:new Adapter()});
let wrapper;
beforeEach(()=>{
     wrapper=mount(<CommentBox/>)
});

afterEach(()=>{
wrapper.unmount();
});

it('has a textarea and a button',()=>{

    expect(wrapper.find('textarea').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
});


it('has a text area that users can type in',()=>{
    wrapper.find('textarea').simulate('change',{
        target:{value:'new comment'}
    });
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
});

it('has clear after send commend',()=>{
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('')


});
