import React from "react";
import useCollapse from "react-collapsed";
import './Internship.css'
import "./Ielts.css";
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPointDown } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa";

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <br />
        <h3>
          {isExpanded ? (
            <div className="btn-intern-this">
              INTERNSHIP BROCHURE <FaHandPointUp />
            </div>
          ) : (
            <div className="btn-intern-this">
              INTERNSHIP BROCHURE <FaHandPointDown />
            </div>
          )}
        </h3>
      </div>
      <br />
      <br />
      <div {...getCollapseProps()}>
        <div className="content">
          <p>
            <div>
              We are offering unique programme which gives
              internship-cum-training in different departments. This internship
              will help you to understand and enhance your skills while working
              with us. This program is fully online by keeping in mind the norms
              of COVID-19. This program will help you to gain work experience or
              satisfy requirements for a qualification.
              <br />
              <br />
              This program is framed by keeping in mind the All India Council of
              Technical Education (AICTE) norms and guidelines. Apart from
              technical knowledge and skills, to be successful as professionals,
              students should have excellent soft skills, leadership qualities
              and team spirit. They should have entrepreneurial capabilities and
              societal commitment. In order to match these multifarious
              requirements, AICTE has created a unique mechanism of awarding
              minimum 100 Activity Points over and above the academic grades.
              <br />
              <br />
              Every regular student, who is admitted to the 4 years Degree
              program, is required to earn 100 Activity Points in addition to
              the required academic grades, for getting 4 Years degree program.
              Students entering 4 years Degree program through lateral entry are
              required to earn 75 Activity Points, in addition to the academic
              grades, for getting 4 years&rsquo; degree program. Similarly,
              Diploma students are required to earn 75 Activity Points during 3
              years of their diploma program. AICTE recommends 300-400 hours
              Activity Program for each degree student for Community service and
              allied activities. Similarly, 200-250 hours should be devoted by
              Diploma student for Community service and allied activities as an
              additional requirement or non-credit program.
              <br />
              <br />
              Interns shall view an internship as a bridge between college and
              the workplace. The intern must demonstrate honesty, punctuality
              and a willingness to learn during the internship program. The
              intern should obey the policies, rules and regulations of the
              Company and comply with the Company&rsquo;s business practices and
              procedures.
              <br />
              <br />
              Project work/industrial training/International Internships or
              advanced engineering courses are considered for meeting internship
              credit requirements.
              <br />
              <br />
              This internship includes 5 departments and 42 positions for
              internship/ training and we are looking for suitable candidates/
              students for the same.
              <br />
              <br />
              We are a startup, which is growing quickly. It is an educational
              consultancy as well as coaching institute. It was founded in 2020
              at New Delhi, India. It currently serves free educational content
              and live online coaching to students preparing for IIT JEE exam,
              state boards, CBSE boards, and school exams. We are planning to
              start with e-coaching of NEET Exam, SSC Exams, UPSC exams and CAT
              as well. We are searching out new employees with strong management
              potential. If you get a chance to work with us, then we&rsquo;ll
              provide you an interesting and rewarding experience.
              <br />
              <br />
            </div>
            <br />
            <h2>
              <FaHandPointRight /> Why Is This Internship Unique?
            </h2>
            <br />
            <div className="para2">
              It will allow you to work solely in a particular department.
              You&rsquo;ll learn about the field, make industry connections,
              work on relevant projects, and develop your overall skills. It is
              a confidence booster internship-cum-training program for UG/PG
              students.
            </div>
            <br />
            <br />
            <h2>
              <FaHandPointRight /> How Will It Benefit You?
            </h2>
            <br />
            <div className="para2">
              Chance to get a Full time job opportunity.
              <br />
              <br />
              It will give you educational and career development opportunities
              by providing practical experience in a field or discipline.
              <br />
              <br />
              It will expose Technical students to the industrial environment,
              which cannot be simulated in the classroom and hence creating
              competent professionals for the industry.
              <br />
              <br />
              It will provide possible opportunities to learn, understand and
              sharpen the real time managerial skills required at the job.
              <br />
              <br />
              It will provide you exposure to the current technological
              developments relevant to the subject area of training.
              <br />
              <br />
              It will create conditions conducive to quest for knowledge and its
              applicability on the job.
              <br />
              <br />
              It will familiarize you with various materials, processes,
              products and their applications along with relevant aspects of
              quality control.
              <br />
              <br />
              It will promote your academic, professional and/or personal
              development.
              <br />
              <br />
              It will help you to understand the social, economic &amp;
              administrative considerations that influence the working
              environment of industrial organizations.
              <br />
              <br />
              You may get an opportunity to get hired by the
              Industry/Organization.
              <br />
              <br />
              You will get practical experience in an organizational setting.
              <br />
              <br />
              Excellent opportunity to see how the theoretical aspects learned
              in classes are integrated into the practical world. On-floor
              experience provides much more professional experience which is
              often worth more than classroom teaching.
              <br />
              <br />
              It will help you to decide if the industry and the profession is
              the best career option to pursue.
              <br />
              <br />
              Opportunity to learn new skills and supplement knowledge.
              <br />
              <br />
              Opportunity to practice communication and teamwork skills.
              <br />
              <br />
              Opportunity to learn strategies like time management,
              multi-tasking etc. in an industrial setup.
              <br />
              <br />
              Opportunity to meet new people and learn networking skills.
              <br />
              <br />
              It will make a valuable addition to your resume.
              <br />
              <br />
              It will enhance your candidacy for higher education.
              <br />
              <br />
              Get chance to create network and social circle and develop
              relationship with industry people.
              <br />
              <br />
              It will provide opportunity to evaluate the organization before
              committing to a full time position.
              <br />
              <br />
            </div>
            <br />
            <h2>
              <FaHandPointRight /> General Skills Required
            </h2>
            <br />
            <div className="para2">
              Strong will to learn
              <br />
              Student&rsquo;s ability to identify and to address their own
              educational needs in a changing world in ways sufficient to
              maintain their competence and to allow them to contribute to the
              advancement of knowledge will be enhanced.
              <br />
              <br />
            </div>
            <br />
            <div className="para2">
              <h3>
                <FaHandPointRight /> Kindly Note
              </h3>
              <br />
              1) The student should be regular and punctual during the complete
              internship period.
              <br />
              2) The student should show good general behavior and sound
              character.
              <br />
              3) Students are requested to maintain internship diary/daily
              log/report of which one copy has to be submitted to the
              organization/company.
              <br />
              <br />
              <div className="verticalLine1"></div>
              <br />
              For any queries, feel free to write us at&nbsp;
              <a
                href="mailto:pshiksha4.0@gmail.com?subject=Query%20regarding%20internship"
                target="_self"
                className="link-here"
              >
                pshiksha4.0@gmail.com
              </a>
              <br />
              <br />
              <div className="verticalLine1"></div>
            </div>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Collapsible;