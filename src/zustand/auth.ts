
import { Auth } from "source/types/matial-components";
import { decryption, dencryptionUser, encryptionUser } from "./encryption";
import {create}  from "zustand";
import axios from "axios";
import API from "source/components/api";
import { handleCheckName } from "./checkCreateUser";


interface AuthType {
    user: null | Auth.UserType,
    user_id:string,
    isLoadingCreateUser: boolean,
    isLoadingGetUser: boolean,
    isCheckName: boolean,
    isCheckEmail: boolean,
    checkName: (name:string) => void,
    createUser:(obj:Auth.UserType) => void,
    getUser:()=>void,
    checkEmail:(email:string)=>void
}
let isId:string = JSON.parse(localStorage.getItem('_isDefic') || 'false')

const useAuth = create<AuthType>((set)=>({
    user: null,
    user_id: isId,
    isLoadingCreateUser: false,
    isLoadingGetUser: true,
    isCheckName: false,
    isCheckEmail:false,
    checkName: async(name) => {
        
        const {data} =  await axios<string[]>(API.api + API.isJocarto);
        if(data.some((el:string)=>el== decryption(name))){
            set({isCheckName: true})
        }else{
            set({isCheckName: false})
        }
    },
    checkEmail: async(email) => {
        const {data} =  await axios<string[]>(API.api + API.isDefics);
        if(data.some((el:string)=>el== decryption(email))){
            set({isCheckEmail: true})
        }else{
            set({isCheckEmail: false})
        }
    },
    createUser: async (obj)=>{
        const postObj = encryptionUser(obj);
        set({isLoadingCreateUser: false});
        


            
        // try{
        //     const {data} =  await axios.post(API.api + API.users, postObj);
        //     set({isLoadingCreateUser: true});
        //     localStorage.setItem("isDefic", JSON.stringify(data._id))
        // }catch(e){
        //     console.log(e);
        // }
    },
    getUser:()=>{
        
        set({isLoadingGetUser: true});
        if(isId == "false"){
            set({isLoadingGetUser: false});
        }
    }
}))

export default useAuth