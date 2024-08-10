import conf from '../conf/conf'
import { Client, ID, Databases,Storage } from 'appwrite'


export class Service {
    Client = new Client();
    databases;
    bucket;
    constructor() {
        this.Client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDateBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("error in create post method in appwrite service error is :: ", error);
        }
    }

    async updatePost(slug, { title, content, featureImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDateBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            );
        } catch (error) {
            console.log("appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDateBaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("error occurs while delete document in appwrite :: ", error);
            return false ; 
        }

    }

    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDateBaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
              console.log("error occur white get post in appwrite :: ",error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
          return await  this.databases.listDocuments(
            conf.appwriteDateBaseId,
            conf.appwriteCollectionId,
            queries
          )
        }catch(error){
         console.log("error in getAll posts is :: ",this.error);
         return false;
        }
    }

    //file upload services 

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
           console.log("error occurs in appwrite while uploaading file",error);
            return false ;
        }
    }

     async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true ;
        }catch(error){
            console.log("error occurs white deleting file in appwrite service ::",error);
        }
     }

     async filePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        }catch(error){
            console.log("error occurs in appwrite while preview file error is :: ",error);
        }
     }

     async fileDownload(fileId){
        try{
            return this.bucket.getFileDownload(
            conf.appwriteBucketId,
                fileId
           )
        }catch(error){
            console.log("error occurs in appwrite  while downloading file error is :: ",error);
            return false ;
        }
     }


 


}



const service = new Service();
export default service