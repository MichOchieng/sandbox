import { FaFire, FaPoo } from 'react-icons/fa';

export default function SideBar () {

    const SidebarIcon = ({ icon, text="Tooltip"}:any) => (
        <div className="sidebar-icon group">
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    );

    return(
        <>
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
            <div
            className="
            h-screen w-32 flex-col 
            bg-secondary text-white shadow-lg"
            >
                
            </div>
        </>
    );
};