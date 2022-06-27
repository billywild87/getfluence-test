
import styles from './TimePicker.module.scss';
import { timePickerType } from './type';
import CellTime from './cell-time/CellTime';

export default function TimePicker({timeChoose,onChooseHour,dateChoose,currentDate}:timePickerType){
    return(
        <div className={styles["time-picker"]}>
        {Array.from({length: 24}, (v, i) => i).map((item,i)=>{
           return <CellTime dateChoose={dateChoose} currentDate={currentDate} timeChoose={timeChoose} onChooseHour={onChooseHour}  key={i.toString()} value={item}/>
        })}
        </div>
    )
}