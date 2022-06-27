interface IResult{
    [key: string]: any
}

/*Comparaison de deux objet et retour d'un objet avec simplement les information modifié.
 Pratique pour comparer local state et redux state
*/
export function ObjectIsEqual(object1:any,object2:any){
  
    var result :IResult = {}

    if(Object.keys(object1).length !== Object.keys(object2).length){
        return false
    }
    for(let key of Object.keys(object1)){
       
        if(object1[key] !== object2[key]){
          
            result[key] = object1[key]
        }
    }

    if( Object.keys(result).length > 0){
        return result
    }

    return false
}