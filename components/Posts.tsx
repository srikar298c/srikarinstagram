import {fetchPosts} from "@/lib/data"
 
 async function Posts() {
  
       const post = await fetchPosts();
 
   return <>{/*post*/}</>
 }
 export default Posts;