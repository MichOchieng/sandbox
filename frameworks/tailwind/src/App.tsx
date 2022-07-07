import SideBar from './components/sidebar';
import Content from './components/content';

export default function App() {
  return (
    <div className='flex'>
      <SideBar />
      <Content />
    </div>
  )
}