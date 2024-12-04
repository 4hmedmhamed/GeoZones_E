import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='Team_6' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About Team 6' subtitle='Check out our company story and work process' />

<p>قسيم المهام: توزيع الأدوار بين اعضاء الفريق العشرة، و تحديد مسؤولية كل عضو لتحقيق التساوي والتكامل 
  <br></br>
  في جميع جوانب المشروع حيث يتم تقسيم الطلبة المنفذين للمشروع الي ثلاث مساحين و ثلاث مساعدين يساعدون
  <br></br>
  
   في العمل الميداني وتسجيل البيانات و (4) من أعضاء فريق المكتب الفني ,وجزء منهم سيعمل علي برنامج Sokkia link,Auto CAD) ) لإعداد الرسوم والجزء الأخر سيعمل علي برنامج (ArcGis ) لتحليل البيانات وإنشاء النماذج ثلاثية الأبعاد .</p>
<p></p>
<p></p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./team.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
