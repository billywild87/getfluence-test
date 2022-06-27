import {Dayjs} from 'dayjs'


type  datePickerType ={
    dateChoose:Dayjs,
    onChooseDate:(val:Dayjs)=>void,
    currentDate:Dayjs,
    customClassName?:string
}

type monthSelectorType = {
  
    dateOnView:Dayjs,
    onChangeMonth:(val:boolean)=>void
}

type dayPickerType = {
    dateChoose:Dayjs,
    dateOnView:Dayjs,
    onChooseDate:(val:Dayjs)=>void,
    currentDate:Dayjs
    
}

type dayCellType = {
    dateChoose:Dayjs,
    date:Dayjs,
    dateOnView:Dayjs,
    onChooseDate:(val:Dayjs)=>void,
    currentDate:Dayjs
}

export type {
    datePickerType,
    monthSelectorType,
    dayPickerType,
    dayCellType
}