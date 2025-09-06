const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const BlogPage = async () => {
  const posts = await getPost();

  return (
    <>
      <h1>Bogs Posts</h1>
      {posts?.slice(0,5)?.map((item: any) => (
        <div key={item?.id}>
          <h2>{item?.title}</h2>
          <p>{item?.body}</p>
        </div>
    ))}
    </>
  );
};

export default BlogPage;
