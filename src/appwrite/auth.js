import conf from '../conf/conf'
import { Client , Account , ID } from 'appwrite'

export class AuthService {
    Client = new Client();
    account; 
    constructor(){
        this.Client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.Client);
    }

    async createAccount({email,password,name}){
        try{
           const userAccount = await this.account.create(ID.unique(),email,password,name);
        }catch(error){
            throw error ;
        }

        if(userAccount){
            return  this.login({email,password});
        } else {
            return userAccount ;
        }
    }

    async login({email,password}) {
        try{
         return await this.account.createEmailPasswordSession(email,password)
        }catch(error){
           throw error ;
        }
    }

    async getCurrentUser(){
        try{
           return await this.account.get();
        }catch(error){
          console.log("this is error in getCurrentUser :: ", error)
        }
         return null;
    }
     
     async logout() {
        try{
            return await this.account.deleteSessions()
        }catch(error){
            console.log("error in logout session :: ", error)
        }
     }

}

const authService  = new AuthService();
export default authService