import { Question} from "../styled/styled";
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import nemo from "../assets/Nemo.webp"

const Question1 = () => {

    function Alert(){
        alert("o google é seu melhor amigo");
    }

    return(
        <Question>
            <div>
                <IconButton onClick={() => Alert()} color="error">
                        <HelpIcon/>
                </IconButton>
            </div>
            <div>
                <img src={nemo} title="lugar solitário"/>
                <p>cthulhu</p>
            </div>
        </Question>

    )
}

export default Question1;