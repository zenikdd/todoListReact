import LogoutIcon from '@mui/icons-material/Logout';
import './header.component.scss'

export const HeaderComponent = () => {
    const logout = () => {
        localStorage.removeItem('token')
        window.location.href = '/login';
    }


    return <div className="header">
        <div>
            <LogoutIcon onClick={logout}/>
        </div>
    </div>
}
