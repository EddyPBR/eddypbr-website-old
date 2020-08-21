import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./styles.css";

const Blog = () => {
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
          </div>

          <button className="button">Carregar mais posts</button>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Blog;