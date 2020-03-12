import {configure, shallow} from 'enzyme';
import React from "react";
import AppComponent from "./AppComponent";
import CommentBox from "../commentBox/CommentBox";
import CommentList from "../commentList/CommentList";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

let wrapper;

beforeEach(() => {
    wrapper = shallow(<AppComponent/>)
});


it('shows a comment box', () => {
    expect(wrapper.find(CommentBox)).toHaveLength(1)
});


it('shows a commentList component', () => {
    expect(wrapper.find(CommentList)).toHaveLength(1)
});
