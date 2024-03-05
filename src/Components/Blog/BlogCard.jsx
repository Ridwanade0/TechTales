import blogimage from "../../assets/Image/image.png";

const BlogCard = () => {
    const WriterName = "Tasha A"
  return (
    <div className="flex gap-3 items-center px-3 mt-2 pb-2 cursor-pointer">
        <div className="h-32 w-48 rounded-lg">
            <img src={blogimage} alt="" className="h-full w-full object-cover rounded-lg" />
        </div>
        <div>
            <h1 className="text-3xl font-bold text-white">How to Choose the Right Technology Stack for your Project</h1>

           <p className="text-white"> 
            <span>By {WriterName}</span>
            <span>.{"2 min read"}</span>
            </p>
        </div>
    </div>
  )
}

export default BlogCard