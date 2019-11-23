//import { list, create, detail, update, destroy } from './tags.controllers';
import { list, create, detail } from './tags.controllers';
import * as Schemas from './tags.schemas';


module.exports = [
    {
        method: 'GET',
        path: '/posts/{postid}/tags',
        handler: list 
    },
    {
        method: 'POST',
        path: '/posts/{postid}/tags',
        handler: create,
        config:{
            validate:{
                payload: Schemas.payload
            }
        }
    },
    {
        method: 'GET',
        path: '/posts/{postID}/tags/{id}',
        handler: detail,
        config:{
            validate:{
                params: Schemas.pathParams
            }
        }
    }/*,
    {
        method: 'PUT',
        path: '/posts/{postid}/tags/{id}',
        handler: update,
        config:{
            validate:  Schemas.update 
            
        }
    },
    {
        method: 'DELETE',
        path: '/posts/{postid}/tags/{id}',
        handler: destroy,
        config:{
            validate:{
                params: Schemas.pathParams
            }
        }
    }
    */
];
