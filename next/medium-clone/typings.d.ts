export interface Post {
    _id: string,
    publishedAt: string,
    title: string,
    description: string,
    author: {
        name:  string,
        image: string
    }
    mainImage: {
        asset: {
            url: string,
        };
    }
    slug: {
        current: string,
    }
    body: [object];
}