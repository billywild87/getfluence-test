import styles from './ButtonBoolean.module.scss';
import { buttonBoolean } from './type';
export default function ButtonBoolean({content,type,value,handlerClick,className,customClassName}:buttonBoolean){
    
    function handlerAction(){
        handlerClick(value)
    }
    
    return(
        <button className={`${customClassName?customClassName:styles["button-boolean"]} ${className??''}`} onClick={handlerAction}>
            {content}
        </button>
    )
}