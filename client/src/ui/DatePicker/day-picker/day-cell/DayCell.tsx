import dayjs from 'dayjs';
import { CSSProperties } from 'react';
import { dayCellType } from '../../type';
import { isDayOfMonth,isSameDateWihtoutHour } from '../../utils';
import styles from './DayCell.module.scss';
export default function DayCell({date,dateOnView,onChooseDate,dateChoose,currentDate}:dayCellType){

    function handlerClick(){
        if(!date.isBefore(currentDate,'day')){
          return  onChooseDate(date);
        }
          return false;  
       
    }




    const styled = {
        container:{
            '--day-color':((isDayOfMonth(date,dateOnView) && !date.isBefore(currentDate,'day')) || date.isSame(dateChoose,'day') || isSameDateWihtoutHour(date,currentDate) ) ? 'var(--text-color)' :  'var(--inactif-color)',
            '--token-day': date.isSame(dateChoose,'day') ? 'var(--primary-color)' :isSameDateWihtoutHour(date,currentDate) ?  'var(--inactif-color)' : 'transparent',
            '--is-clickable':date.isBefore(currentDate,'day') ? 'none' : 'initial'
        } as CSSProperties
    }
    
    return(
    <div onClick={handlerClick} style={styled.container} className={styles["day-cell"]}>
        <div className={styles["special-day"]}/>
        <div className={styles["day-date"]}>{date.date()}</div>
        </div>
    )
}