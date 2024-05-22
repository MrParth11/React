// api.js
export const fetchBlog = async (id) => {
    // Replace with your API call
    const response = await fetch(`/api/blogs/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch blog data');
    }
    return response.json();
};

export const updateBlog = async (id, blogData) => {
    // Replace with your API call
    const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
    });
    if (!response.ok) {
        throw new Error('Failed to update blog data');
    }
    return response.json();
};
