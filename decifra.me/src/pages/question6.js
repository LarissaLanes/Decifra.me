import { Question} from "../styled/styled";
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import cesar from "../assets/cesar.jpeg"

const Question6 = () => {

    function Alert(){
        alert("local onde houve guerra");
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
                <p>GH EHOOR JDOOLFR</p>
            </div>
        </Question>

    )
}

export default Question6;