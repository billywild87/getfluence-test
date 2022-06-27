import dayjs from 'dayjs';
import { cardProgramType } from '../type';
import styles from './CardProgram.module.scss';
import "external-svg-loader";

export default function CardProgram({pseudo,date,avatar}:cardProgramType){
    return(
        <div className={styles["card-program-container"]}>
            <div className={styles["avatar-container"]}>
            <svg data-src={`/avatars/${avatar}.svg`}/>
            </div>
            <div>
                <div className={styles["pseudo-program"]}><span>{pseudo}</span> à un appel</div>
                <div className={styles["date-program"]}>{`Le ${dayjs(date).format('DD/MM/YYYY à HH:mm')}`}</div>
               
            </div>
        </div>
    )
}