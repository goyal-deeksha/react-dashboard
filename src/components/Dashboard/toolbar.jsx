import React, { useState } from 'react';

import '../../css/toolbar.css';

// icons
import { SearchOutlined, BellFilled, BarsOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Toolbar = (props) => {
    const { toggleSidebar } = props;

    const [ showProfileMenu, setShowProfileMenu ] = useState(false);

    const menuHandler = () => {
        setShowProfileMenu(!showProfileMenu);
    }

    return(
        <div className={'toolbar'}>
            <div className={'drawer-toggler'}><BarsOutlined onClick={toggleSidebar} /></div>
            <div className={'breadcrumbs'}>Dashboard</div>
            <div className={'searchbar'}>
                <input type={'text'} placeholder={'Search'} />
                <div className={'search__icon'}>
                    <SearchOutlined />
                </div>
            </div>
            <div className={'notification'}>
                <BellFilled />
            </div>
            <div className={'profile'}>
                <FontAwesomeIcon icon={faUser} onClick={menuHandler} />
                <div className={`profile-menu ${showProfileMenu ? 'show' : ''}`}>
                    <ul>
                        <li>Profile</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Toolbar;