import * as Joi from '@hapi/Joi';

export const pathParams = Joi.object({
    id: Joi.number().required(),
    postID: Joi.number().required()
});

export const payload = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    postID: Joi.number().required()
});

export const update = { 
    params: pathParams, payload}