import "./about.css"
import Aboutimg from "../../assest/img/aboutme.jpg"
function About(){
    return(
        <section id="about">
      <div class="about">
        <h2 class="title">درباره من</h2>
        <img class="about-img" src={Aboutimg} alt="milad" />
        <p dir="rtl" class="info">
         سلام متین نوری هستم 23 ساله و دانشجوی ترم آخر رشته پرستاری <br />
          خیلی خوشحالم که الان اینجا هستین و افتخار اینو دارم که خودمو بیشتر بهتون معرفی کنم <br />
          زمینه فعالیت بنده در زمینه زبان برنامه نویسی جاوا اسکریپت هستش که الان که دارم این مطلب رو براتون مینویسم حدود 8 ماهی میشه که این حرفه رو شروع کردم <br />
          ابتدا سعی در یادگیری زباه های html , css  و تونستم تسلط خوبی در این حوزه پیدا کنم
          بعد سراغ یادگیری زبان شیرین جاوااسکریپت رفتم و طی یک دوره سه ماهه تونستم این زبانو تا جای خوبی پیش ببرم
          رفته رفته علاقه من توی این زمینه بیشتر شد و باعث شد که به سمت استفاده از کتابخونه معروف ری اکت سوق پیدا کنم <br />
          تونستم توی این حوزه خودمو بسنجم و با زدن چنتا پروژه کوچیک به علم و تجربه خودم افزودم <br />
          الان هم امیدوارم که بتونم توی راه درست قرار بگیرم و از این حرفه درامد زایی داشته باشم
        </p>
      </div>
    </section>
    )
}

export default About