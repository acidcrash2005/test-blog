// Instruments
import { MAIN_URL } from '../config';

export class Posts {
    async get (data) {
        const response = await fetch(`${MAIN_URL}/posts?_page=${data.page}&_sort=${data.sort}&_order=${data.order}`, {
            method: 'GET',
        });

        const posts = await response.json();

        if (response.status !== 200) {
            throw new Error(response.status);
        }

        return posts;
    }

    async createPost (data) {
        const response = await fetch(`${MAIN_URL}/posts`, {
            method:  'POST',
            body:    JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const post = await response.json();

        if (response.status !== 201) {
            throw new Error(response.status);
        }

        return post;
    }

    async removePost (id) {
        const response = await fetch(`${MAIN_URL}/posts/${id}`, {
            method: 'DELETE',
        });

        await response.json();

        if (response.status !== 200) {
            throw new Error(response.status);
        }
    }
}
