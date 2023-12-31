
import { IconSearch, IconNews } from '@tabler/icons-react';
import { Link } from 'react-router-dom'

function NavBar(){
    return (
        <div className="navbar--container">
            <Link to={"/"}>
                <div className="NewsLogo" >
                    <IconNews className={'ti'} size={45}/>
                    <h1 className="news--title"  style={{ color: 'white' }}>news</h1>
                </div>
            </Link>

            <ul className="navitems--container">

                <Link to={"/search"}>
                    <li className="nav-item">
                            <IconSearch className={'ti'} size={35}/>
                    </li>
                </Link>

            </ul>


        </div>
    )

}

export default NavBar;