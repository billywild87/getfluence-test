import {useEffect, useState} from 'react';

export function useErrorFirebase(codeError,action){
    const [error,setError] = useState('');

    useEffect(()=>{
        console.log(codeError)
        codeError === ''?
        setError('')
        :codeError === 'auth/missing-email'
        ?setError('Veuillez renseigner votre email.')
        :codeError === "auth/missing-pseudo"
        ?setError('Veuillez renseignez un pseudo')
        :codeError === "auth/missing-password"
        ?setError('Veuillez renseignez un pseudo')
        :codeError === "auth/exist-email"
        ?setError("Cette email existe déjà")
        :codeError === "auth/exist-pseudo"
        ?setError("Ce pseudo existe déjà")
        :codeError === 'auth/confirmpassword/not-egal'
        ?setError('Votre mot de passe et sa confirmation ne correspondent pas.')
        :codeError === 'auth/weak-password'?
        setError('Votre mot de passe néccesite au moins 6 caractères.')
        :codeError === "auth/create-failed" 
        ?setError("Un erreur est survenue lors du processus d'inscription")
        :codeError === 'auth/invalid-email'?
        setError(`Votre email n'est pas valide.`)
        :codeError === 'auth/wrong-password'?
        setError('Votre mot de passe est incorrect.')
        :codeError === 'auth/user-not-found'  ? 
        setError('Vos identifiants sont incorrects.')
        :(codeError === 'auth/email-already-in-use' || codeError ===  'auth/email-already-exists')
        ?setError('Compte déjà existant.')
        :codeError === 'auth/email-not-verif'
        ?setError(`Votre compte est en attente d'activation.`)
        :setError(`Erreur d'identification.`)
    },[codeError])

    return error
}