import React, { Component } from 'react';
// import '../style.scss';
// import '../../assets/styles/variable.scss';
import Sidebar2 from '../sidebar2';


export default class Navbar extends Component {

constructor(props){
    super(props);
    this.state={
        open:false
    }
}


closeAdd=()=>{
    this.setState({ open: false })

    document.body.style.overflow= "scroll"
}
    openAdd = () => {
        // console.log("hello");

        this.setState({ open: true })
        document.body.style.overflow= "hidden"
    }
    render() {
        return (
            <React.Fragment>
                        <div onClick={this.openAdd}>start</div>
                        <Sidebar2 open={this.state.open} handle={this.closeAdd}></Sidebar2>
            </React.Fragment>
        )
    }
}
