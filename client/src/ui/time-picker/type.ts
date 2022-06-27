import { Dayjs } from "dayjs"

type timePickerType = {
    timeChoose:number,
    onChooseHour:(val:number)=>void,
    currentDate:Dayjs,
    dateChoose:Dayjs
}

type cellTimeType = {
    value :number,
    onChooseHour:(val:number)=>void,
    timeChoose:number,
    currentDate:Dayjs,
    dateChoose:Dayjs
}

export type {
    timePickerType,
    cellTimeType,
   

}