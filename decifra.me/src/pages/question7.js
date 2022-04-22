import { Question} from "../styled/styled";
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import black from "../assets/black.jpg"

const Question7 = () => {

    function Alert(){
        alert("");
    }

    return(
        <Question>
            <div>
                {/* <IconButton onClick={() => Alert()} color="error">
                        <HelpIcon/>
                </IconButton> */}
            </div>
            <div>
                <p>Você decifrou todos os 6 enigmas,Obrigada por jogar até aqui</p>
                <img src={black} />
                <p>essa é uma versão inicial e simplificada inspirado em outros enigmas</p>
            </div>
        </Question>

    )
}

export default Question7;