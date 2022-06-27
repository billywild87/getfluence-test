export function controlColorButton(type,hover){

    if(type=== 'primary'){
            if(hover){
               return {background:'var(--primary-color)',
                       color:'var(--text-color)'
                      }
            }  
            else return {background:'var(--primary-darker)',
                          color:'var(--text-color)'
                        }
    }
    else if(type === "secondary"){
        if(hover) return  {
                           background:'var(--secondary-color)',
                           color:'white'
                         }
        else return{
                    background:'var(--secondary-lighter)',
                    color:'white'
                    }
    }
    else
    if(hover) return {background:'var(--primary-color)',
    color:'var(--text-color)'
   }
    else return {background:'var(--primary-darker)',
    color:'var(--text-color)'
  }
}



