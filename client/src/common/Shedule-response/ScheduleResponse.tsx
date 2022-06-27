import styles from './ScheduleResponse.module.scss';
import {  useState } from 'react';
import dayjs,{ Dayjs } from 'dayjs';
import { scheduleResponseType } from './type';
import DatePicker from '../../ui/DatePicker/DatePicker';
import { isSameDateWihtoutHour } from '../../ui/DatePicker/utils';
import TimePicker from '../../ui/time-picker/TimePicker';
import ButtonSimple from '../../ui/button/buttton-simple/ButtonSimple';



export default function SheduleResponse({date,onProgram,onCancel}:scheduleResponseType){
    const [dateChoose,setDateChoose] = useState<Dayjs>(dayjs(date));
    const currentDate = dayjs();
 
    function onChooseDate(date:Dayjs){     
      if(isSameDateWihtoutHour(date,dateChoose)){
         return setDateChoose(dayjs(null))
      }
      if(isSameDateWihtoutHour(currentDate,date)){
        return setDateChoose(currentDate.add(1,'hour').set('minute',0).set('second',0)) 
      }
            setDateChoose(date)    
         
    }

    function onChooseHour(val:number){
          setDateChoose(dateChoose.set('hour',val).set('minute',0).set('second',0))
    }

    function onCreateProgram(){
      if(dateChoose.isValid()){
        onProgram(dateChoose)
        setDateChoose(dayjs(null))
      }
    
    }


    return(
        <div className={styles["schedule-response-container"]}>
          <h3>Progammer un appel</h3>
          <div className={styles["schedule-response-wrapper"]}>
            <div className={styles["left-side-schedule"]}>
            <div className={styles["date-choose-overview-mobile"]}><span>{dateChoose.isValid() ?dateChoose.format('DD/MM/YYYY à HH:00') : ''}</span>  </div>
            <div className={styles["date-overview"]}>
              <label className={styles["label-date"]}>Date</label>
              <input value={dateChoose.isValid() ?dateChoose.format('DD/MM/YYYY') : ''}  disabled className={styles["view-date"]}/>
          </div>
   
          <DatePicker
              currentDate={currentDate} 
              onChooseDate={onChooseDate}  
              dateChoose={dateChoose}/>
          </div>
            <div className={styles["time-selector"]}>
              <div className={styles["time-overview"]}>
              <label className={styles["label-date"]}>Heure</label>
              <input value={dateChoose.isValid() ? `${dateChoose.hour()}H00` : ''}  disabled className={styles["view-time"]}/>
            </div>
          <div className={styles["sentence-hour-mobile"]}>Selectionner un heure :</div>
          <TimePicker currentDate={currentDate} dateChoose={dateChoose} onChooseHour={onChooseHour} timeChoose={dateChoose.hour()}/>
       
          </div>
          </div>
          <div className={styles["action-schedule"]}>
            <ButtonSimple onClick={onCreateProgram} type="primary" text="Programmer" />
            <ButtonSimple onClick={onCancel} type="secondary" text="Annuler" />
          </div>

        </div>
    )
}