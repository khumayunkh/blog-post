import {client} from "./index";

export const addArticles = async ({tags, title, content}) => {
    return await client.post('/articles/', {  
        tags : tags.map(item => item), 
        title : title, 
        content : content, 
    })
}

export const getArticles = async() => {
    return await client.get('/articles/')
}
