import { FaFire, FaPoo } from 'react-icons/fa';

export default function SideBar () {

    const SidebarIcon = ({ icon }:any) => (
        <div className="sidebar-icon">
            {icon}
        </div>
    );

    return(
        <div
            className="
            fixed top-0 h-screen w-16 m-0 flex flex-col 
            bg-primary text-white shadow-lg"
        >
            <SidebarIcon icon={<FaFire size='28'/>}/>
            <SidebarIcon icon={<FaPoo  size='28'/>}/>
            <SidebarIcon icon={<FaFire size='28'/>}/>
            <SidebarIcon icon={<FaPoo  size='28'/>}/>
        </div>
    );
};