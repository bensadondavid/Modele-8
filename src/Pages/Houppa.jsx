import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Houppa(){

    const { language } = useContext(Context)

    return(
            <>
            <div className="card-2">
                <img src="kol-sasson-m8.png" className='kol-sasson' />
                <p className="title">La Houppa</p>
                <img src="boucle-m8.png" className='boucle' />
                <div className="parents">
                    <div className="parents-fille">
                        <p>Mr et Mme John Doe</p>
                        <p>Mr et Mme John Doe</p>
                    </div>
                    <div className="parents-garcon">
                        <p>Mr et Mme John Doe</p>
                        <p>Mr et Mme John Doe</p>
                    </div>
                </div>
                <p className='houppa-text1'>Ont la joie de vous faire part du mariage de leurs petits enfants et enfants</p>
                <p className='noms'>Léa <span className='and'>&</span> Shay</p>
                <p className='houppa-text2'>et vous prient de bien vouloir assister a la houppa ainsi qu’a la soiree  qui aura lieu le</p>
                <p className='date'>Mercredi 14 février 2025 <br />כו’באייר תשפה <br />A 19h00 precise</p>
                <p className='endroit'>A la salle Emeralde Garden <br /> Park Taassit Shourak, Beth Shemesh </p>
                <p className="pensee">"“Une douce pensée pour nos proches dans nos cœurs”"</p>
                <Waze name={'waze'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#292B2D' />
                <SaveTheDate name={'save-the-date'} date={[2024, 6, 3, 12, 0]} iconColor='#292B2D' iconHeight='18px' iconWidth='21px'/>
            </div>
        </>
    )
}

export default Houppa