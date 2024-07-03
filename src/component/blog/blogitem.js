
function Blogitem({blogtitle,blogdes,blogauthor,blogtime,blogimg,href}){
    return(
        <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <a href={href}><img src={blogimg} className="img-fluid" /></a>
              </div>
              <div dir="RTL" className="blog-content">
                <h3 className="blog-title">{blogtitle}</h3>
                <p dir="RTL" className="blog-desc">
                    {blogdes}
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">{blogauthor}</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> {blogtime}
                </div>
              </div>
            </div>
          </div>
    )
}

export default Blogitem