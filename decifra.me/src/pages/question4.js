import { Question} from "../styled/styled";
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import black from "../assets/black.jpg"

const Question4 = () => {

    function Alert(){
        alert("a sexta cor");
    }

    return(
        <Question>
            <div>
                <IconButton onClick={() => Alert()} color="error">
                        <HelpIcon/>
                </IconButton>
            </div>
            <div>
                <p>1 2 3 4 5 6 7 </p>
                <img src={black} title="aliança"/>
                <p>V L A V A A V</p>
            </div>
        </Question>

    )
}

export default Question4;