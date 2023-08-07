const { useRouter } = require("next/router");

function BlogPostsPage(){

    const router = useRouter();

    console.log(router.query);
    
    return(
        <div>
            <h2>The Blog Post </h2>
        </div>
    );
}

export default BlogPostsPage;