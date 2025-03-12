import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Chabat(){

    const { language } = useContext(Context)

    return(
           <div className="card-1">
                <p className='title'>Le Chabat</p>
                <img src="boucle-m8.png" className='boucle' />
                <p className='noms'>Léa <span className='and'>&</span> Shay</p>
                <p className='text'>Ont l’honeur de vous convier à leur Chabat hatan qui aura lieu</p>
                <p className='date'>Vendredi 16<br />et samedi 17 février 2025</p>
                <p className='endroit'>A la synagogue Shaare Elyahou <br /> 13 guideon haozner<br />Jérusalem</p>
                <Waze name={'waze'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#6D6349' />
                <SaveTheDate name={'save-the-date'} date={[2024, 6, 3, 12, 0]} iconColor='#6D6349' iconHeight='18px' iconWidth='21px'/>
            </div>

    )
}

export default Chabat