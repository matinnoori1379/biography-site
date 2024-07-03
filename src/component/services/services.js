import "./services.css"
import Servicesitem from "./servicesitem"
import { servic } from "./service"

function Services(){

    return(
        
        <section id="services">
        <div className="container">
          <div className="section-info">
            <h2 className="section-title">مهارت ها</h2>
            <p className="section-desc">
              در قسمت میخوام بیشتر در مورد زمینه هایی که فعالیت داشتم براتون بگم
            </p>
          </div>
          <div className="row">
            
            {servic.map((item)=><Servicesitem key={item.id} {...item}/>)}
            
          </div>
        </div>
      </section>
    )
}

export default Services