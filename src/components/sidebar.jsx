import React, { useState } from 'react';

import '../css/sidebar.css';

// icons
import { DashboardOutlined, UserOutlined, ProjectOutlined } from '@ant-design/icons';

const Sidebar = (props) => {
    const [ showProfileMenu, setShowProfilemenu ] = useState(false);
    const { showFull } = props;
    debugger
    return (
        <div className={`sidebar ${showFull ? 'open' : ''}`}>
            <div className={'title'}>
                Deep Minds
            </div>
            <div>
                <div className={'user'} onClick={() => {setShowProfilemenu(!showProfileMenu)}}>
                    <div className={'pic'}>

                    </div>
                    <span className={'user__name'}>
                        Deeksha Goel
                    </span>
                    <span className={`${showProfileMenu ? 'arrow-up' : 'arrow-down'}`} />
                </div>
                <div className={`profile__menu`}>
                    <ul className={`${showProfileMenu ? 'visible' : ''}`}>
                        <li>My Profile</li>
                        <li>Edit Profile</li>
                        <li>Settings</li>
                    </ul>
                </div>
            </div>
            <div className={'side-menu'}>
                <ul>
                    <li className={'active'}><DashboardOutlined /> Dashboard</li>
                    <li><UserOutlined /> Clients</li>
                    <li><ProjectOutlined /> Projects</li>
                    <li><UserOutlined /> Employees</li>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar;