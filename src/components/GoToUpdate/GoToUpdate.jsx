import { Link } from 'react-router-dom'


const GotoUpdate = () => {
    return (
        <div >
            <ul>
                <Link to='/productToUpdate' style={{ textDecoration: 'none' }}><li>GoToUpdate</li></Link>
               
            </ul>
        </div>
    )
}

export default GotoUpdate