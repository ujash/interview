import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPostsByUser(userId: number): Promise<void> {
    try {
        const { data } = await axios.get<Post[]>(API_URL);
        const filteredPosts = data.filter(post => post.userId === userId);

        filteredPosts.forEach(({ id, title, body }) => {
            console.log(`ID: ${id}\nTitle: ${title}\nBody: ${body}\n`);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchPostsByUser(2);
