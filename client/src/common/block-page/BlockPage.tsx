import styles from './BlockPage.module.scss';
import { blockPageType } from './type';


export default function BlockPage({isError,isLoading,children}:blockPageType){

 


    return(
        <div className={styles["block-page-container"]}>
            {
            isError
             ?<div>UNE ERREUR EST SURVENU</div>
            :isLoading
             ?<div>LOADING ...</div>
            :children
            }           
        </div>
    )
}