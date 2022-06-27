import styles from './DatePicker.module.scss';
import MonthSelector from './mont-selector/MonthSelector';
import { datePickerType } from './type';
import { useEffect, useState } from 'react';
import { getDayPicker, newMonth } from './utils';
import DayPicker from './day-picker/DayPicker';
import dayjs from 'dayjs';
export default function DatePicker({dateChoose,onChooseDate,currentDate,customClassName}:datePickerType){


    //Date referente pour DayPicker qui sera controlé MonthSelector 
    const [dateOnView,setDateOnView] = useState(dateChoose.isValid() ? dateChoose.clone() : currentDate);


    function onChangeMonth(value:boolean){
        setDateOnView(newMonth(dateOnView,value))
    }

    
    return(
        <div className={`${styles["datepicker-container"]}`}>
            <MonthSelector onChangeMonth={onChangeMonth} dateOnView={dateOnView}/>
            <DayPicker currentDate={currentDate}  dateChoose={dateChoose} onChooseDate={onChooseDate} dateOnView={dateOnView}/>
        </div>
    )
}