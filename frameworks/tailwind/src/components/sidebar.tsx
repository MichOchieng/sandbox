import { FaAdn, FaAtlassian, FaBitcoin, FaCanadianMapleLeaf, FaFire, FaGripfire, FaPlus, FaPoo, FaUserFriends } from 'react-icons/fa';

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
        <div className='sidebar-search'>
            <input placeholder='Find or start the conversation' className='sidebar-searchDialog'>
                
            </input>
        </div>
    );

    const FriendsNav = () => (
        <div className='navbar-friends'>
            
        </div>
    );

    const SideNav = () => (
        <div className='sidebar-sidenav'>
            <button className='sidenav-button'>
                <FaUserFriends className='mr-3 text-2xl'/> Friends
            </button>

            <button className='sidenav-button'>
                <FaGripfire className='mr-3 text-2xl'/> Nitro
            </button>
        </div>
    );

    const DirectMessages = () => (
        <div className='sidebar-dms'>
            <span className='dms-title'>
                DIRECT MESSAGES <FaPlus className='mx-auto float-right'/>
            </span>
            <div className='dms-chats'>
                <ChatIcon icon={<FaBitcoin/>} user={"Bitboi"}/>
                <ChatIcon icon={<FaAtlassian/>} user={"Atlassian"}/>
                <ChatIcon icon={<FaAdn/>} user={"Adn"}/>
                <ChatIcon icon={<FaCanadianMapleLeaf/>} user={"Leafy"}/>
            </div>
        </div>
    );

    const ChatIcon = ({icon,user}:any) => (
        <div className='chaticon group'>
            <span>
                {icon}{user}
            </span>
            <span className='chaticon-x group-hover:scale-100'>X</span>
        </div>
    )

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
            h-screen w-3/4 flex flex-col overflow-hidden
            bg-gray-700 shadow-lg"
            >
                <SearchBar/>
                <SideNav/>
                <DirectMessages/>
            </div>
        </div>
    );
};