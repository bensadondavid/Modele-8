import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Mairie(){

    const { language } = useContext(Context)

    return(
            <div className="card-1">
                <p className='title'>La Mairie</p>
                <img src="boucle-m8.png" className='boucle' />
                   <p className='noms'>Léa <span className='and'>&</span> Shay</p>
                    <p className='text'>Ont l'honneur de vous convier à leur cérémonie civile qui aura lieu le</p>
                    <p className='date'><strong> Lundi 12 février 2025 <br /> à 12h00</strong></p>
                    <p className='endroit'>A la mairie de Montmagny<br />95360</p>
                    <p className='suite'>Un vin d'honneur suivra la céremonie</p>
                    <Waze name={'waze'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#6D6349' />
                    <SaveTheDate name={'save-the-date'} date={[2024, 6, 3, 12, 0]} iconColor='#6D6349' iconHeight='18px' iconWidth='21px'/>
            </div>
    )
}

export default Mairie