import { Auth } from "~/types/matial-components";
import { symbolEncryption } from "./code";

function encryption(str:string):string {
    const strArray:string[] = str.split('');
    const result:string[] = [];
    for(let i = 0; i < str.length; i++){
       let curr:string = strArray[i];
       const item:string = symbolEncryption[curr]
       result.push(item)
    }

    return result.join('');

}
function decryption(str:string):string {
    let symbolEncryptionValueArray:string[] = Object.values(symbolEncryption);
    let symbolEncryptionKeyArray:string[] = Object.keys(symbolEncryption)

    return str.replace(/_[a-zA-Z0-9]+=/g, (el)=>{
        let idx:number = symbolEncryptionValueArray.indexOf(el)
        return symbolEncryptionKeyArray[idx]
    });
}
export function encryptionUser(obj:Auth.UserType):Auth.UserType {
    return {
        name: encryption(obj.name),
        email:encryption(obj.email),
        identificator:encryption(obj.identificator),
        password:encryption(obj.password),
        date_creat:encryption(obj.date_creat),
    }
}
export function dencryptionUser(obj:Auth.UserType):Auth.UserType {
    return {
        name: decryption(obj.name),
        email: decryption(obj.email),
        identificator: decryption(obj.identificator),
        password: decryption(obj.password),
        date_creat: decryption(obj.date_creat),
    }
}