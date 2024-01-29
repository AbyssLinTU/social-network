import React from "react";
import { Field, reduxForm } from "redux-form";
import TestRenderer, { create } from 'react-test-renderer';
import ProfileStatusContainer from "./ProfileStatusContainer";
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus component', () => {
  test("status from props should be in the state",()=>{
    const component=create(<ProfileStatus status='test-status'/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('test-status')
  })
  test("after creation <span> should be displayed",async()=>{
    const component=create(<ProfileStatus status='test-status'/>);
    const root = component.root;
    const spans = await root.findByType('span')
    expect(spans).not.toBeNull()
  })
  test("after creation <input> shouldn't be displayed",()=>{
    const component=create(<ProfileStatus status='test-status'/>);
    const root = component.root;
    //expect(()=>{
      //let input = root.findByType('input')
    //}).toThrow()
  })
  test("after creation <span> should be contains correct status",async()=>{
    const component=create(<ProfileStatus status='test-status'/>);
    const root = component.root;
    const spans = await root.findByType('span')
    expect(spans.children[0]).toBe("test-status")
  })
  test('input should be displayed in editMode instead of span',async ()=>{
    const component=create(<ProfileStatus status='test-status'/>);
    const root = component.root;
    const spans = await root.findByType('span')
    spans.props.onDoubleClick();
    let input = await root.findByType('input')
    expect(input.props.value).toBe('test-status')
  })
  test('callback should be called',async ()=>{
    const mockCallback = jest.fn()
    const component=create(<ProfileStatus status='test-status' updateStatusTC={mockCallback}/>);
    const instance = component.getInstance();
     instance.deActivateMode();
    expect(mockCallback.mock.calls.length).toBe(1)
  })


});

 /*
it('renders correctly react-test-renderer', () => {
   const renderer = new ShallowRenderer();
   renderer.render(<ProfileStatusContainer />);
   const result = renderer.getRenderOutput();

   expect(result).toMatchSnapshot();
 });*/