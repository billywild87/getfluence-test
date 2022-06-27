import styles from './Logo.module.scss';
import logoCompany from '../../media/image/Getfluence_logo_noir-2.webp'
import {logoType} from './type';
export default function Logo({className}:logoType){
    return(
        <picture className={`${styles['img-logo']} ${className}`}>
            <img src={logoCompany}/>
        </picture>
    )
}