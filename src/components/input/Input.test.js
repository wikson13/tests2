import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from "./Input";
import Text from "../text/Text";
import React from "react";

configure ({adapter:new Adapter()});

describe('<Input/>',() => {
it('should render text',()=>{
    const wrapper=shallow(<Input/>)
    expect(wrapper.find(Text)).toHaveLength(1)
})
});
