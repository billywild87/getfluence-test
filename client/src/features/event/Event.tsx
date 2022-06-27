import styles from './Event.module.scss';
import DatePicker from "../../ui/DatePicker/DatePicker";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs"; 
import ScheduleResponse from '../../common/Shedule-response/ScheduleResponse';
import { useCreateProgramMutation, useGetProgramsQuery } from '../../apps/services/programQuery';
import { useSpring,animated } from 'react-spring';
import ButtonSimple from '../../ui/button/buttton-simple/ButtonSimple';
import CardProgram from './card-program/CardProgram';
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
export default function Event(){



    const [showDatePicker,setShowDatePicker] = useState<boolean>(false)

    const [createProgram,{isSuccess}] = useCreateProgramMutation();
    const {isLoading,isError,data} = useGetProgramsQuery();
    
    const scheduleSpring = useSpring({
         transform :!showDatePicker ? 'translateX(-150%)' : 'translateX(0%)'    
    })


    function onProgram(date:Dayjs){
       
        createProgram({date:date.toString()})
    }

    function onCancel(){
        setShowDatePicker(false)
    }

    useEffect(()=>{
        setShowDatePicker(false)
    },[isSuccess])

    return(
        <div className={styles["program-page"]}>
        <ButtonSimple className={styles["button-appel"]} onClick={()=>setShowDatePicker(true)} text={'PROGRAMMER UN APPEL'} type="primary"/>

        {
         isLoading ? <div>...loading</div>
         :isError  ? <div>Une Erreur est survenue</div>
         :
         <div className={styles["program-flux"]}>
         {data.list_program.map(({pseudo,date_program,avatar}:any)=>{
            return <CardProgram pseudo={pseudo} avatar={avatar} date={date_program} />
         })}
         </div>
        }


        <animated.div className={styles['schedule-program']} style={scheduleSpring}>
            <ScheduleResponse onProgram={onProgram} onCancel={onCancel} date={null}/>
        </animated.div>
        </div>
    )
}