import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import Admin from '../pages/admin'
import SignIn from '../pages'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/admin' element={<Admin />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes