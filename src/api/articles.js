import {client} from "./index";

export const addArticles = async ({tags, title, content}) => {
    return await client.post('/articles/', {  
        tags : [{name:tags}], 
        title : title, 
        content : content, 
    })
}

export const getArticles = async() => {
    return await client.get('/articles/')
}

