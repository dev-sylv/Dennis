const express = require("express");

const path = require("path")

const fs = require("fs");

const port = 2040;

// Create your server extantiating from express/ create an express application:
const app = express();
app.use(express.json());



// Read your data in the database that is, the contacts users are adding, to read them, code is:
const ReadAllContact = (req, res) =>{
  const filePath = path.join(__dirname, './', 'contact.json');
    const blogData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(blogData);
}

// General Get:
app.get("/", (req, res) =>{
  res.json({
      message: "Contact API up and running"
  })
})

// The contact the user is adding up to, they come to the contact.json file:
const UsersContact = (data) => {
    fs.writeFileSync(path.join(__dirname, './', 'contact.json'), JSON.stringify(data, null, 2), 'utf8');
}


// Users add a contact
app.post('/add-contact', (req, res) => {
    const { name, phoneNo } = req.body;
    const contactDB = ReadAllContact();
    
    const newContact = {
      id:   1,
      name,
      phoneNo
    };
    
    contactDB?.UsersContact?.push(newContact)
    UsersContact(contactDB);
  
    res.status(200).json({
      success: true,
      data: newContact
  });
})

// Users edit(update) a contact post:
app.put("/contact/:id", (req, res) => {
  const { name, phoneNo } = req.body;
    const contactDB = ReadAllContact();

    // Check if the request contains an "id" parameter
    if (req.body.id) {
        const contactId = req.body.id;
        const existingPostIndex = contactDB.UsersContact.findIndex(post => post.id === contactId);

        if (existingPostIndex !== -1) {
            // If the contact post with the given ID exists, update its content
            blogDB.UsersBlog[existingPostIndex] = { ...blogDB.UsersContact[existingPostIndex], name, phoneNo };
            UsersContact(contactDB);
            res.status(200).json({
                success: true,
                data: contactDB.UsersContact[existingPostIndex]
            });
        } else {
            res.status(404).json({
                error: 'Contact not found'
            });
        }
}});


// Users delete a contact:
app.delete('/delete-contact/:id', (req, res) => {
  const contactId = parseInt(req.params.id);
  const contactDB = ReadAllContact();

  const existingPostIndex = contactDB.UsersContact.findIndex(post => post.id === contactId);

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