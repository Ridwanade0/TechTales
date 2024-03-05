import NavBar from "../NavBar/NavBar"
import BlogCard from "./BlogCard"

const Blog = () => {
  return (
    <div className="bg-slate-900 h-full min-h-[100vh]">
        <NavBar />
        <div className="w-4/5  mx-auto mt-2">
          <h1 className="text-5xl text-white mb-4">Discover the Best Stories for you</h1>
          <div>
           <BlogCard />
           <BlogCard />
          
          </div>
        </div>
    </div>
  )
}

export default Blog