import { Dayjs } from "dayjs"

type scheduleResponseType ={
    date: string | null,
    onProgram:(date:Dayjs)=>void,
    onCancel:()=>void
}


export type {
    scheduleResponseType
}