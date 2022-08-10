import './Newc.scss'
import React from 'react';
import './Overseas.css';
import { Link } from "react-router-dom";
import usa from "../assets/usa.png";
import can from "../assets/can.png";
import ger from "../assets/ger.png";
import uk from "../assets/uk.png";
import fra from "../assets/fra.png";
import bel from "../assets/bel.png";
import aus from "../assets/aus.png";
import newz from "../assets/newz.png";
import austria from "../assets/austria.png";
import ire from "../assets/ire.png";
import swe from "../assets/swe.png";
import sin from "../assets/sin.png";

const Newc =()=> {
  return (
    <>
      <div className="wrapper">
        <Card
          img={aus}
          title="Australia"
          description="Many international students are choosing to study in Australia because of its friendly, laid-back nature, excellent education system, and high standard of living .."
          link="/overseas/australia"
        />

        <Card
          img={austria}
          title="Austria"
          description=" Almost all students reviewing their experience of studying in Austria agree that the country provides great cultural richness and diversity for foreign students .."
          link="/overseas/austria"
        />

        <Card
          img={bel}
          title="Belgium"
          description=" Most student reviews of studying in Belgium focus on the topic of city life and culture in the country, which is seen as very positive .."
          link="/overseas/belgium"
        />

        <Card
          img={can}
          title="Canada"
          description="Canadians and international students in Canada enjoy a high standard of living. It's a great place to live and work. In fact, they rank #1 in the world when it comes to quality of life .."
          link="/overseas/canada"
        />

        <Card
          img={fra}
          title="France"
          description="Attractive tuition rates in France. Quality higher education adapted to students' needs. Outstanding research and development opportunities. France is a world-class economic power .."
          link="/overseas/france"
        />

        <Card
          img={ger}
          title="Germany"
          description="German universities are famous for delivering high-quality education - a lot of these universities even rank among the best in the world .."
          link="/overseas/germany"
        />

        <Card
          img={ire}
          title="Ireland"
          description="Ireland is such a good place to study abroad for such a wide number of reasons, including the standard of teaching and education, the career opportunities and the enjoyable lifestyle .."
          link="/overseas/ireland"
        />

        <Card
          img={newz}
          title="New Zealand"
          description="With an excellent education system, internationally accredited qualifications, ample research opportunities and a matchless quality of life, New Zealand has a lot to offer .."
          link="/overseas/newzealand"
        />

        <Card
          img={sin}
          title="Singapore"
          description="Efficient city planning, a developed economy, a sound legal system, convenient transportation, a warm climate, make Singapore a study destination suitable for people from all walks of life .."
          link="/overseas/singapore"
        />

        <Card
          img={swe}
          title="Sweden"
          description="Degree programs in Sweden offer students the opportunity to mix study and practical work, so that they have first-hand experience in their field when they graduate and enter the job market .."
          link="/overseas/sweden"
        />

        <Card
          img={uk}
          title="United Kingdom"
          description="Receiving a degree from a UK university will provide you with a solid foundation for the real world and will help you get your dream job .."
          link="/overseas/united_kingdom"
        />

        <Card
          img={usa}
          title="USA"
          description="The US boasts of some of the finest universities, a lot of which consistently rank in the world university rankings .."
          link="/overseas/united_states_of_america"
        />
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <Link to={props.link} target="_blank">
        <button className="card__btn">Learn More</button>
      </Link>
    </div>
  );
};

export default Newc;
