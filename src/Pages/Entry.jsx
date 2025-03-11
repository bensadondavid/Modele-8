import CountDown from '../Components/CountDown'
import { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function Entry(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="entry">
            <div className="entry-container">
                <p className="bsd">בס"ד</p>
                <div className="logo-date">
                    <img src="logo-m8.png" className='logo-entry' />
                    <p className='entry-date'>14. 02. 2026</p>
                </div>
                <CountDown />
                <div className="entry-link">
                    <Link to='/home' className='invit-link'>Voir l'invitation</Link>
                    <img src="boucle-m8.png" className='boucle' />
                </div>
            </div>
        </div>

    )
}

export default Entry