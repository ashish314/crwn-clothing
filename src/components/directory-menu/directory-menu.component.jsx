import './directory-menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';

const DirectoryMenu = ({directoryMenuItems}) => {
  return(
    <div className='directory-menu'>
        {
            directoryMenuItems.map(({id, ...otherSectionValues}) => {
                return <MenuItem key={id} {...otherSectionValues}></MenuItem>
            })
        }
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    directoryMenuItems: state.directoryMenu.menuItems
  }
);

export default connect(mapStateToProps)(DirectoryMenu);