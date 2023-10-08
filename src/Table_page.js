import React from 'react';
import { responsive_mock } from "./responsive.js";
import { Heading } from "./heading.js";
import { Mocktest_list } from "./mocktest_list.js";
import { Footer } from './footer.js';
export class Table_page extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return <div >
            <Heading/>
            <Mocktest_list topic={this.props.topic}/>
        </div>
    }
}