import { list, create, detail, update, destroy } from './posts.controllers';
import * as Schemas from './posts.schemas';


module.exports = [
    {
        method: 'GET',
        path: '/posts',
        handler: list 
    },
    {
        method: 'POST',
        path: '/posts',
        handler: create,
        config:{
            validate:{
                payload: Schemas.payload
            }
        }
    },
    {
        method: 'GET',
        path: '/posts/{id}',
        handler: detail,
        config:{
            validate:{
                params: Schemas.pathParams
            }
        }
    },
    {
        method: 'PUT',
        path: '/posts/{id}',
        handler: update,
        config:{
            validate:  Schemas.update 
            
        }
    },
    {
        method: 'DELETE',
        path: '/posts/{id}',
        handler: destroy,
        config:{
            validate:{
                params: Schemas.pathParams
            }
        }
    }
];
