import axios from 'axios';

export async function getAllCountryByName(){
   try{
    const country =  await axios.get('https://restcountries.com/v3.1/all')
    if(country){
       return country.data.map((item,key)=>{
            return { text:item["translations"]["fra"]["common"],
                     id:item["cca2"]
                     }
    })
    }
    }catch(error){
    
   }
}