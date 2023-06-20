import React,{useState} from 'react';
import logo from '../assets/logo.png';
import './Sidebar.css';
import { UilSignOutAlt} from '@iconscout/react-unicons'
import { SidebarData } from './data/data';

const Sidebar = () => {
    const [selected, setSelected] = useState(0)
  return (
    <div className='sidebar'>
        {/* logo */}
        <div className='logo'>
          <img src={logo} alt=''/>
          <span>
            Sh<span>O</span>ps
          </span>
        </div>
        {/* menu */}
        <div className='menu'>
               { SidebarData.map((item, index)=>{
                   console.log(item)
                  return(
                    <div className={ selected=== index ? ` menuItems active`: 'menuItems'}
                     key={index}  
                      onClick={()=> setSelected(index )}>
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>

                  )
               })}
               <div className='menuitems'>
                <UilSignOutAlt/>
                  
               </div>
               
            
            </div>

        
    </div>
  )
}

export default Sidebar