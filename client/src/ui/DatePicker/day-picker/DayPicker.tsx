import styles from './DayPicker.module.scss';
import { getDayPicker,daysOfWeek } from '../utils';
import { dayPickerType } from '../type';
import { Dayjs } from 'dayjs';
import DayCell from './day-cell/DayCell';
export default function DayPicker({dateOnView,onChooseDate,dateChoose,currentDate}:dayPickerType){


    return(
        <div className={styles["dayPicker-wrapper"]}>
        <div className={styles["dayPicker-days"]}>
            {daysOfWeek.map((day:string,i)=>{
                return <div key={`${day}-${i}`} 
                            className={styles["dayPicker-day"]}>
                            {day}
                        </div>
            })}
        </div>
        <div className={styles["dayPicker-container"]}>
            {getDayPicker(dateOnView).map((dateOfDay:Dayjs,i:number)=>{
                return <DayCell 
                        currentDate={currentDate}  
                        dateChoose={dateChoose} 
                        onChooseDate={onChooseDate} 
                        dateOnView={dateOnView} 
                        key={`${i.toString()}-${dateOfDay.date()}`} 
                        date={dateOfDay}/>
            })
        }    
        </div>
        </div>
    )
}