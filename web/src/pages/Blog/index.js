import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";

import "./styles.css";

import api from "../../services/api";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("posts").then((response) => setPosts(response.data));
  }, [setPosts]);

  return(
    <>
      <Navbar />

      <main id="blog">
        <header>
          <div>
            <h1>Conheça meu blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, odio eget varius mollis, mi lorem maximus lacus, quis congue sapien nisi id odio. </p>
          </div>
        </header>

        <section>
          <div>
            {posts.map( (post) => (
              <PostCard 
                key={post._id}
                title={post.title}
                author={post.author}
                description={post.description}
                img_url={post.img_url}
                post_url={post.post_url}
                createdAt={post.createdAt}
              />
            ))}
          </div>

          <button className="button">Carregar mais posts</button>
        </section>

        <div className="line yellow" />
      </main>

      <Footer />
    </>
  );
}

export default Blog;