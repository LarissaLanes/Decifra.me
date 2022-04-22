import { Question} from "../styled/styled";
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import tratado from "../assets/frota-de-navios-perry-kanagawa_opt.jpg"

const Question3 = () => {

    function Alert(){
        alert("olhe com atenção");
    }

    return(
        <Question>
            <div>
                <IconButton onClick={() => Alert()} color="error">
                        <HelpIcon/>
                </IconButton>
            </div>
            <div>
                <img src={tratado} title="período"/>
                <p>35.43623612832127, 139.2658824187578</p>
            </div>
        </Question>

    )
}

export default Question3;