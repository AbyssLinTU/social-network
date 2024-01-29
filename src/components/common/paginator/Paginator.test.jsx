import React, { useState } from "react";
import c from './Paginator.module.css';
import Paginator from "./Paginator";
import { create } from "react-test-renderer";

describe("Paginator component tests",()=>{
    test("page count is 11 but should be showed only 10",async()=>{
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root;
        let spans = await root.findAllByType('span')
        expect(spans.length).toBe(10)
    })
    test("If pages count is more then 10 button Next should be present",async()=>{
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root;
        let button = await root.findAllByType('button')
        expect(button).not.toBeNaN()
    })
})