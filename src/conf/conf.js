// VITE_APPWRITE_URL= "https://cloud.appwrite.io/v1" ;
// VITE_APPWRITE_PROJECT_ID="66ab6df6001983c6d206" 
// VITE_APPWRITE_DATABASE_ID="66ab70760017515e6744  "
// VITE_APPWRITE_COLLECTION_ID="66ab70b6001e056fc4bc" 
// VITE_APPWRITE_BUCKET_ID="66ab750e0000bb66a3bf"



const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDateBaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default conf