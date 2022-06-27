import {errorMessageType} from './type'
import {useState} from 'react';
import styles from './ErrorMessage.module.scss';
import { useSpring,animated,config } from 'react-spring';
import { useErrorFirebase } from '../../hooks/useErrorFirebase';
export default function ErrorMessage({codeError}:errorMessageType){

    const error =  useErrorFirebase(codeError);

    const styled = useSpring({
       opacity:  error!=='' ? 1 : 0,
       config:config.molasses,
       
    })
      return(
        <animated.div className={styles["error-message-container"]} style={styled}>{error}</animated.div>
      )
}