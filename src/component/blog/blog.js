import "./blog.css"
import Blogitem from "./blogitem"

import { blog } from "./blogdata"
function Blog(){

    return(
        <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">فعالیت ها</h2>
          <p className="section-desc">
            در اینجا اشاره میکنم به چندی از پروژه های انجام شده
          </p>
        </div>
        <div className="row">
            <Blogitem {...blog[0]}></Blogitem>
            <Blogitem {...blog[1]}></Blogitem>
            <Blogitem {...blog[2]}></Blogitem>
        </div>
      </div>
    </section>
    )
}

export default Blog