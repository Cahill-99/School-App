import React from 'react';

function Navmenu(){


    return(
        <div className='navmenu-background'>

            <div className='welcome-block'>

            </div>
            <div className='task-button'>
                <img src= "/Icons/check-mark-svgrepo-com.svg" className = "navicon"></img>
                <h4>Tasks</h4>
            </div>
            <div className='inbox-button'>
                <img src= "/Icons/mail-svgrepo-com.svg" className = "navicon"></img>
                <h4>Inbox</h4>
            </div>
            <div className='notif-button'>
                <img src= "/Icons/bell-svgrepo-com.svg" className = "navicon"></img>
                <h4>Notifications</h4>
            </div>
            <div className='marks-button'>
                <img src= "/Icons/diploma-svgrepo-com.svg" className = "navicon"></img>
                <h4>Marks</h4>
            </div>
            <div className='settings-button'>
                <img src= "/Icons/gear-svgrepo-com.svg" className = "navicon"></img>
                <h4>Settings</h4>
            </div>
        </div>
    )
}

export default Navmenu;