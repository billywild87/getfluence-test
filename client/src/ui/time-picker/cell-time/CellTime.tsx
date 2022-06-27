import { CSSProperties,useState } from 'react';
import { isSameDateWihtoutHour } from '../../DatePicker/utils';
import { cellTimeType } from '../type';
import styles from './CellTime.module.scss';

export default function CellTime({value,onChooseHour,timeChoose,dateChoose,currentDate}:cellTimeType){

    const [hover,setHover] = useState(false);

    var styled = {
        'cell-time':{
            '--cell-text-color':isSameDateWihtoutHour(currentDate,dateChoose) && currentDate.hour() >= value ? 'var(--inactif-color)' : 'var(--text-color)',  
            '--cell-color':timeChoose === value ? 'var(--primary-color)' : hover ? 'rgb(240,240,240)' : 'transparent',
            '--is-clickable':(isSameDateWihtoutHour(currentDate,dateChoose) && currentDate.hour() >= value) || !dateChoose.isValid() ? 'none' : 'initial'
        } as CSSProperties    
    }

    function handlerClick(){
           onChooseHour(value) 
    }

    function onHover(){
        setHover(true)
    }

    function onLeave(){
        setHover(false)
    }
    
    return(
        <div onMouseEnter={onHover} onMouseLeave={onLeave} style={styled['cell-time']} onClick={handlerClick} className={styles["cell-time"]} >{`${value}H00`}</div>
    )
}