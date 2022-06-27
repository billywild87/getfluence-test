import dayjs, { Dayjs } from "dayjs";

export function newMonth(date:Dayjs,incrementation:boolean){
    //Ici on incremente les mois, si incremenation true alors on va au mois suivant sinon sa sera le moi précedent
    if(incrementation) return  date.add(1,'month')
    else return  date.add(-1,'month')
}

export function getDayPicker(date:Dayjs){
    //On calcule ici combien on a de jour pendant ce mois
    const numberOfDayThisMonth = date.daysInMonth();
    //On Cherche le dernier jour du mois precedent en date dayjs;
    const lastDayOfLastMonth = date.add(-1,'month').endOf('month');
    //On cherche le jour de la semaine du premier du mois
    const firstDayOfMonth = date.startOf("month").day();
    //On Cherche la date du premier jour du moi
    const firstDayDateOfMonth = date.startOf('month')
    //On calcul les x nombre du dernier mois que l'on verra sur le calendrier n'appertenant pas au mois courant
    let lenghtDaysOfLastMonth;
    let listDays = [];
    lenghtDaysOfLastMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth-1;
    //Tableau de date dayjs des derniers jours du mois précedent êtant au début du calendar
    for(let i=0;i<lenghtDaysOfLastMonth;i++){
        listDays.unshift(lastDayOfLastMonth.add(-i,'day'))
    }
    //On push dans le tableau les jours du mois courant
    for(let i=0;i<numberOfDayThisMonth;i++){
        listDays.push(firstDayDateOfMonth.add(i,'day'))
    }
    
    return listDays;


    
}

export function isDayOfMonth(date:Dayjs,dateOnView:Dayjs){
    if(date.month() === dateOnView.month()){
        return true
    }
    return false
}

export function isSameDateWihtoutHour(date:Dayjs,secondDate:Dayjs){
    if(date.month() === secondDate.month() && date.date() === secondDate.date() && date.year() === secondDate.year()){
        return true
    }
    else return false
}

export const daysOfWeek = ["lu",'ma',"me","je","ve","sa","di"]