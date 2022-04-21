import {HomePage} from "../styled/styled"
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import ponto from "../assets/interrogacao.png"

const Home = () => {

    function alert1(){
        alert("escreva as respostas na url e se atente a usar letras minusculas, você esta pronto?");
    }

    return(
        <HomePage>
            <div>
                <IconButton onClick={() => alert1()} color="error">
                    <HelpIcon/>
                </IconButton>
                <h1>BEM-VINDO !</h1>
                <h3>FASE TESTE</h3>
            </div>
            <div>
                <img src={ponto}/>
            </div>
        </HomePage>
    )
}

export default Home;