import { create } from "zustand";
import { Auth } from "~/types/matial-components";
import { dencryptionUser, encryptionUser } from "./encryption";


interface AuthType {
    user: null | Auth.UserType,
    isLoadingGetUser: boolean,
    user_id:string,
    createUser:(obj:Auth.UserType) => void,
    getUser:()=>void
}
let isId:string = JSON.parse(localStorage.getItem('_isDefic') || 'false')

export const useAuth = create<AuthType>((set)=>({
    user: null,
    user_id: isId,
    isLoadingGetUser: true,
    createUser:(obj)=>{
        const postObj = encryptionUser(obj);
        const getObj = dencryptionUser(postObj);
    },
    getUser:()=>{
        set({isLoadingGetUser: true});
        if(isId == "false"){
            set({isLoadingGetUser: false});
        }
    }
}))