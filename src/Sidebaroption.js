import React from 'react';
import './Sidebaroption.css';

function SidebarOption({title, Icon}) {
    return(
     <div className="SidebarOption">
        {Icon && <Icon className="SidebarOption-icon"></Icon>}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
       
     </div>
    );
}

export default SidebarOption;                                                                            