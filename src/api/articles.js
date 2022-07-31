import {client} from "./index";


export const addArticles = async ({tags, title, content}) => {
    return await client.post('/articles/', {
        tags : tags,
        title : title,
        content : content,
    })
}