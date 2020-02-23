import React, { Component } from 'react';
import '../style-2.scss';

export default class Sidebar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }



    render() {
        console.log(this.props,"................props");

        return (
            <React.Fragment>
                <div className={this.props.open === true ? "sidebar-bg" : ""} onClick={this.props.handle}></div>
                <div className={this.props.open === true ? "sidebar-open" : "sidebar-close"}>
                    <div className="sidebar-inner-header" onClick={()=>this.props.handle()}>x</div>
                    <div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
