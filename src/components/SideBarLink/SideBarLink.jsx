import './SideBarLink.css'
import ToggleBtn from '../ToggleBtn/ToggleBtn'


const SideBarLink = ({link}) => {
  return (
    <div className='sidebar-link'>
        <div className="link-icon">{link.icon}</div>
        <div className="link-name">{link.name}</div>
        {
            link.button &&
            <div className="toggle-btn">
                <ToggleBtn/>
            </div>
        }
    </div>
  )
}

export default SideBarLink