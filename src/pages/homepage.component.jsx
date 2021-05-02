import './homepage.styles.scss';

import DirectoryMenu from '../components/directory-menu/directory-menu.component';

const Homepage = ({History}) => {
    return (
        <div className='homepage'>
            <DirectoryMenu></DirectoryMenu>
        </div>
    )
}

export default Homepage