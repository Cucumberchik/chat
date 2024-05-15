import { create } from "zustand";
import { Auth } from "~/types/matial-components";
import { dencryptionUser, encryptionUser } from "./encryption";


interface AuthType {
    user: null | Auth.UserType,
    createUser:(obj:Auth.UserType) => void
}


export const useAuth = create<AuthType>((set)=>({
    user: null,
    createUser:(obj)=>{
        const postObj = encryptionUser(obj);
        console.log('Ecryption',postObj);
        const getObj = dencryptionUser(postObj);

        console.log('decryption',getObj);
        console.log('original',obj);


        
    }
}))