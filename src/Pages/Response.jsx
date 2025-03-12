import { useContext } from 'react'
import { Context } from '../Context'
import Form from '../Components/Form'

function Response(){

    const { language } = useContext(Context)

    return(
            <>
            <div className="card-2">
                    <h1 className='title'>Réponse</h1>
                    <img src="boucle-m8.png" className='boucle' />
                <Form />
            </div>    
            </>
    )
}

export default Response