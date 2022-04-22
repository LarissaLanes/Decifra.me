import { Question} from "../styled/styled";
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';

const Question5 = () => {

    function Alert(){
        alert("olhe com atenção, o essencial é invisível aos olhos");
    }

    return(
        <Question>
            <div>
                <IconButton onClick={() => Alert()} color="error">
                        <HelpIcon/>
                </IconButton>
            </div>
            <div>
                <p>Uma dúzia de nobres reunidos, por dois bufões entretidos. 
                <br/>
                Cada rei dez servos tem, mas homem, comum, ninguém. 
                <br/>
                Enfrentando o servo menor, o rei leva sempre a pior.
                <br/>
                 Madeira impávida, metal brilhante, cálice sagrado, arma desafiante.
                 <br/>
                 Do que estamos falando?</p>
                 <h6>baralho de cartas.</h6>
            </div>
        </Question>

    )
}

export default Question5;