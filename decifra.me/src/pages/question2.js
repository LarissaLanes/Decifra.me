import { Question} from "../styled/styled";
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';

const Question2 = () => {

    function Alert(){
        alert("base2");
    }

    return(
        <Question>
            <div>
                <IconButton onClick={() => Alert()} color="error">
                        <HelpIcon/>
                </IconButton>
            </div>
            <div>
                <p>11001110 + 11001</p>
            </div>
        </Question>

    )
}

export default Question2;