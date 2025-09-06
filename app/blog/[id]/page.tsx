const getPost = async(id:string) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}
const GetDataById = async({params}:{params:{id:string}}) =>{
const item = await getPost(params?.id);
return(
    <div>
        <h1>Blog Post by Id</h1>
        {/* {
            post?.map((item:any)=>( */}
             <>
                <h2>{item?.title}</h2>
                <p>{item?.body}</p>
             </>
            {/* ))
        } */}
    </div>
)
}
export default GetDataById;