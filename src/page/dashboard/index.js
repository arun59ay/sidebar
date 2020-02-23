import React, { Component } from 'react';
import SideBar from '../../components/sidebar';
import Sidebar2 from '../../components/sidebar2';
import NavBar from '../../components/navbar';
import InfoCard from '../../components/infoCard';
import BarChart from '../../components/barChart';
import Calender from '../../components/calender';
import './style.scss';
import styled from 'styled-components';
import { data } from '../../data';
import { withRouter } from 'react-router';

const GirdCard = styled.div`
display: none;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 20px;
margin: 20px 0px;
@media screen and (max-width: 767px) and (min-width: 320px){
    grid-template-columns: repeat(1, 1fr);
}
@media screen and (max-width: 1024px) and (min-width: 768px){
    grid-template-columns: repeat(1, 1fr);
}
`;
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarCss: true,
            data: []
        }
    }
    componentDidMount() {
        this.setState({ data });
        console.log(localStorage.getItem('email'), ".....email")
        if (localStorage.getItem('email') === "") {
            this.props.history.push('/landing-page')
        } else {
            console.log("correct")
        }

    }
    sideBarCollapse = (value) => {
        console.log(value, "..see alag")
        this.setState({ navBarCss: !this.state.navBarCss })
    }

    render() {
        console.log(this.state.data, "......data");
        return (
            <React.Fragment>
                <div className="side-main" >
                    {/* <SideBar handleNavBar={this.sideBarCollapse} navBarCss={this.state.navBarCss ? "sidebar closeNav" : "sidebar openNav"} /> */}
                    <Sidebar2/>
                    <div className={this.state.navBarCss ? "container-main" : "container-main-width"}  >
                        <div>
                            <NavBar forClassCss={this.state.navBarCss} handleNavBar={this.sideBarCollapse} />
                        </div>
                        <div className="main-container">
                            <div>
                                <InfoCard dataGet={this.state.data}></InfoCard>
                            </div>
                            <GirdCard>
                                <div>
                                    <BarChart></BarChart>
                                </div>
                                <div>
                                    <Calender></Calender>
                                </div>
                            </GirdCard>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Dashboard);