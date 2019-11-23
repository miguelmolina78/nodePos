import TagDAO from './tags.dao';

import { CREATED, NO_CONTENT } from 'http-status';

const tagDAO = new TagDAO();

export async function list (request,h) {
    const { postid } = request.params;
    return await tagDAO.findAll(postid);
}


export async function create (request,h) {
    const { payload } = request;
    const post = tagDAO.create(payload);
    return h.response(post).code(CREATED);
}

export async function detail(request,h){
    const { postid, id } = request.params;
    return tagDAO.findByID(postid, id);
}
/*
export async function update(request,h){
    const {payload, params: {id}} = request;
    return tagDAO.update(id,payload);
}

export async function destroy(request,h){
    const { id } = request.params;
    return await tagDAO.destroy(id);
}
*/