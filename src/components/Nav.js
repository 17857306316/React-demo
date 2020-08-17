import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className="shadow-sm p-3 mb-5 bg-white rounded" style={{ display: "flex", justifyContent: 'space-around', fontSize: 30 }}>
            <NavLink strict exact to="/">useState</NavLink>
            <NavLink strict exact to="/useeffect">useEffect</NavLink>
            <NavLink strict exact to="/usecontext" >useContext</NavLink>
            <NavLink strict exact to="/usememo" >useMemo</NavLink>
            <NavLink strict exact to="/purecomponents" >Memo/PureComponent</NavLink>
        </div>
    )
}
export default Nav;