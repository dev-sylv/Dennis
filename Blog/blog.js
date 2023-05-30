const express = require("express");

const path = require("path")

const fs = require("fs");

const port = 2040;

// Create your server extantiating from express/ create an express application:
const app = express();
app.use(express.json());



// Read your data in the database that is, the blog post users are posting, to read them, code is:
const ReadAllBlog = (req, res) =>{
  const filePath = path.join(__dirname, './', 'blog.json');
    const blogData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(blogData);
}
// console.log(ReadAllBlog())

// General Get:
app.get("/", (req, res) =>{
  res.json({
      message: "Blog API up and running"
  })
})

// The blogs the user is adding up to, they come to the blog.json file:
const UsersBlog = (data) => {
    fs.writeFileSync(path.join(__dirname, './', 'blog.json'), JSON.stringify(data, null, 2), 'utf8');
}


// Users add a blog post that is create a blog post:
app.post('/add-blog', (req, res) => {
    const { name, tittle, Content } = req.body;
    const blogDB = ReadAllBlog();
    
    const newBlog = {
      id:   1,
      name,
      tittle,
      Content
    };
    
    blogDB?.UsersBlog?.push(newBlog)
    UsersBlog(blogDB);
  
    res.status(200).json({
      success: true,
      data: newBlog
    });
  });

// Users edit(update) a blog post:
app.put("/blog/:id", (req, res) => {
  const { name, title, content } = req.body;
    const blogDB = ReadAllBlog();

    // Check if the request contains an "id" parameter
    if (req.body.id) {
        const postId = req.body.id;
        const existingPostIndex = blogDB.UsersBlog.findIndex(post => post.id === postId);

        if (existingPostIndex !== -1) {
            // If the blog post with the given ID exists, update its content
            blogDB.UsersBlog[existingPostIndex] = { ...blogDB.UsersBlog[existingPostIndex], name, title, content };
            UsersBlog(blogDB);
            res.status(200).json({
                success: true,
                data: blogDB.UsersBlog[existingPostIndex]
            });
        } else {
            res.status(404).json({
                error: 'Blog post not found'
            });
        }
}});


// Users delete a blog post:
app.delete('/blog/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blogDB = ReadAllBlog();

  const existingPostIndex = blogDB.UsersBlog.findIndex(post => post.id === blogId);

  if (existingPostIndex !== -1) {
      // If the blog post with the given ID exists, remove it from the array
      blogDB.UsersBlog.splice(existingPostIndex, 1);
      UsersBlog(blogDB);

      res.status(200).json({
          success: true,
          message: 'Blog post deleted successfully'
      });
  } else {
      res.status(404).json({
          error: 'Blog post not found'
      });
  }
});


// Listening to the server on the port:
app.listen(port, () =>{
    console.log("")
    console.log("Listening to server on port", port)
})