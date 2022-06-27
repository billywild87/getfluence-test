import styles from './MonthSelector.module.scss';
import { monthSelectorType } from '../type';
import dayjs from 'dayjs';

import ButtonBoolean from '../../button/button-boolean/ButttonBoolean';
import ArrowLeftIcon from '../../../icons/ArrowLeftIcon';
import ArrowRightIcon from '../../../icons/ArrowRightIcon';
require('dayjs/locale/fr')


export default function MonthSelector({dateOnView,onChangeMonth}:monthSelectorType){
    

    return(
        <div className={styles["month-selector-container"]}>
           <div className={styles["dateView"]}>{dateOnView.locale('fr').format('MMMM YYYY')}</div>
           <div className={styles["action-month"]}>
           <ButtonBoolean handlerClick={onChangeMonth} customClassName={styles["button-back"]} content={<ArrowLeftIcon/>} value={false} />
           <ButtonBoolean handlerClick={onChangeMonth} customClassName={styles["button-back"]} content={<ArrowRightIcon/>} value={true} />
           </div>
        </div>
    )
}