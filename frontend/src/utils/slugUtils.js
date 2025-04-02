export const createSlugTitle = (title) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^a-z0-9-]+/g, '') // Remove special characters
        .replace(/--+/g, '-'); // Remove multiple hyphens
};
