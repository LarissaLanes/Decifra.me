import { Question} from "../styled/styled";
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import cesar from "../assets/cesar.jpeg"

const Question7 = () => {

    function Alert(){
        alert("cores primarias");
    }

    return(
        <Question>
            <div>
                <IconButton onClick={() => Alert()} color="error">
                        <HelpIcon/>
                </IconButton>
            </div>
            <div>
                <img src={cesar} title="rotação de três posições para a direita"/>
                <p></p>
            </div>
        </Question>

    )
}

export default Question7;