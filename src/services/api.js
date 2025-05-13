import axios from "axios"

//Configuración base
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:3600/',
        timeout: 3000
    }
)

export const getPostRequest = async()=>{
    try{
        return await apiClient.get('Post/')
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

//crear
export const addCommentaryRequest = async(post)=>{
    try {
        return await apiClient.post('Commentary/', post)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}