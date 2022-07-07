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

    const SearchBar = () => (
        <div>

        </div>
    );

    const FriendsNav = () => (
        <div>
            
        </div>
    );

    const SideNav = () => (
        <div>
            
        </div>
    );

    const DirectMessages = () => (
        <div>
            
        </div>
    );

    return(
        <div
            className='
            overflow-hidden w-1/2
            '
        >
            <div
                className="
                float-left h-screen w-1/4 m-0 flex flex-col 
                bg-primary text-white shadow-lg"
            >
                <SidebarIcon icon={<FaFire size='28'/>}/>
                <SidebarIcon icon={<FaPoo  size='28'/>}/>
                <SidebarIcon icon={<FaFire size='28'/>}/>
                <SidebarIcon icon={<FaPoo  size='28'/>}/>
            </div>
            <div
            className="
            h-screen w-3/4 flex-col overflow-hidden
            bg-secondary text-white shadow-lg"
            >
                
            </div>
        </div>
    );
};