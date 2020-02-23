import React, { Component, useState } from 'react';
import '../style.scss';
import '../../assets/styles/variable.scss';



export default function SideBar(props) {

    const [getToggle, setToggle] = useState(false);


    function onClickHand() {
        if (getToggle === true) return setToggle(false);
        else if (getToggle === false) return setToggle(true);
        else return console.log("some error occured");
    }

    const { navBarCss } = props;
    return (
        <React.Fragment>
            <div href="#" className={navBarCss}>
                <div className="nav-content">Nice Admin Panel</div>
                <div>
                    <ul className="item-container">
                        <li>
                            <div className="d-flex align-items-center cursor-pointer menu-container justify-content-between" role="link" onClick={() => onClickHand()}>
                                <div className="d-flex align-items-center">
                                <img src={require('../../assets/images/home-run.png')} width="16" height="16" alt="" />
                                <div className="p-2 font-size" >Dashboard</div>
                                </div> 
                        {getToggle ?  <i class="fas fa-circle pr-5 pt-2"></i>:null}
                               
                            </div>
                        </li>
                        {getToggle ? (<ul className="sub-items">
                            <li>
                                <div className="d-flex align-items-center sub-list cursor-pointer" role="link">
                                    <i class="fas fa-headphones-alt"></i>
                                    <div className="p-2 font-size-sub">Sub Menu 1</div>
                                </div>
                                <div className="d-flex align-items-center sub-list cursor-pointer" role="link">
                                    <i class="fas fa-headphones-alt"></i>
                                    <div className="p-2 font-size-sub">Sub Menu</div>
                                </div>
                            </li>
                        </ul>) : null}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )

}
