module.exports = {
  index (request, response) {
    const posts = [{
      title: "Example title",
      author: "Edvaldo Junior",
      description: "Awesome description here :)"
    }, {
      title: "Example title",
      author: "Edvaldo Junior",
      description: "Awesome description here :)"
    }];
    
    return response.json(posts);
  },

  create (request, response) {
    return response.json(request.body)
  }
}