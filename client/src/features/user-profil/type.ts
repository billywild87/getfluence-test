type userProfileType = {
    email:string,
    pseudo:string,
    country:string,
    fonction:string
}

export default interface IProfil  {
    profil:userProfileType,
    list_country:[]
}




export type {userProfileType}
