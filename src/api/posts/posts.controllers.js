import PostDAO from './posts.dao';

import { CREATED, NO_CONTENT } from 'http-status';

const postDAO = new PostDAO();

export async function list (request,h) {
    return await postDAO.findAll();
}
export async function create (request,h) {
    const { payload } = request;
    const post = postDAO.create(payload);
    return h.response(post).code(CREATED);
}
export async function detail(request,h){
    const { id } = request.params;
    return postDAO.findByID(id);
}

export async function update(request,h){
    const {payload, params: {id}} = request;
    return postDAO.update(id,payload);
}

export async function destroy(request,h){
    const { id } = request.params;
    return await postDAO.destroy(id);
}