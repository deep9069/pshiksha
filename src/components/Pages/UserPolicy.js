import React from 'react'
import './UserPolicy.css'
import { HiUserGroup } from "react-icons/hi";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserPolicy = () => {
  return (
    <>
      <div className="upol">
        <Container className="elem0up">
          <div data-testid="richTextElement">
            <div className="d-flex align-items-center flex-column">
              <h1 style={{ fontSize: "50px" }}>
                <b>
                  User<span style={{ color: "#29e6a7" }}> Policy</span>
                </b>
              </h1>
            </div>
          </div>
        </Container>
        <br />
        <br />
        <div>
          <p>
            Premi Ji's Shiksha 4.0 provides a platform to prepare for exams
            online. To keep Premi Ji's Shiksha 4.0 running smoothly for all of
            our Users, you agree that you will use the Service only in a manner
            consistent with the following Acceptable Use Policy.
          </p>
        </div>
        <br />
        <br />
        <div>
          <h2>
            <HiUserGroup /> You Agree Not To Post User Content That:
          </h2>
        </div>
        <br />
        <div>
          <p>
            ~ Is sexually explicit or pornographic <br />
            <br />~ Creates a risk of harm, loss, physical or mental injury,
            emotional distress, death, disability, disfigurement, or physical or
            mental illness to yourself, to any other person, or to any animal{" "}
            <br />
            <br />~ May create a risk of any other loss or damage to any person
            or property <br />
            <br />
            ~ Seeks to harm or exploit children by exposing them to
            inappropriate content, asking for personally identifiable details or
            otherwise <br />
            <br />~ Violates, or encourages any conduct that violates laws or
            regulations <br />
            <br />~ Contains any information or content we deem to be hateful,
            violent, harmful, abusive, racially or ethnically offensive,
            defamatory, infringing, invasive of personal privacy or publicity
            rights, harassing, humiliating to other people (publicly or
            otherwise), libellous, threatening, profane, or otherwise
            objectionable <br />
            <br />~ Contains any information or content that is illegal
            (including, without limitation, the disclosure of insider
            information under securities law or of another party's trade
            secrets) <br />
            <br />~ Infringes any third party's Intellectual Property Rights,
            privacy rights, publicity rights, or other personal or proprietary
            rights <br />
            <br />~ Contains any information or content that you do not have a
            right to make available under any law or under contractual or
            fiduciary relationships, or <br />
            <br />~ Is fraudulent, false, misleading, or deceptive
          </p>
        </div>
        <br />
        <br />
        <div>
          <h2>
            <HiUserGroup /> You Agree Not To Engage In Any Of The Following
            Prohibited Activities:
          </h2>
        </div>
        <br />
        <div>
          <p>
            ~ Use, display, mirror or frame the Service, any individual element
            within the Service, the Premi Ji's Shiksha 4.0 name, trademark, logo
            or other proprietary information, or the layout and design of any
            page, without our express written consent <br />
            <br />~ Access, tamper with, or use non-public areas of the Service,
            our computer systems, or the technical delivery systems of our
            providers <br />
            <br />~ Attempt to probe, scan, or test the vulnerability of any
            Premi Ji's Shiksha 4.0 system or network or breach any security or
            authentication measures <br />
            <br />~ Avoid, bypass, remove, deactivate, impair, descramble or
            otherwise circumvent any technological measure implemented by Premi
            Ji's Shiksha 4.0 or any of our providers or any other third party
            (including another user) to protect the Services or Premi Ji's
            Shiksha 4.0 Content <br />
            <br />~ Attempt to access or search the Services, User Content or
            Premi Ji's Shiksha 4.0 Content or scrape or download User Content or
            Premi Ji's Shiksha 4.0 Content from the Services, or otherwise use,
            upload content to, or create new links, re-posts, or referrals in
            the Service through the use of any engine, software, tool, agent,
            device or mechanism (including automated scripts, spiders, robots,
            crawlers, data mining tools or the like) other than the software
            and/or search agents provided by Premi Ji's Shiksha 4.0 or other
            generally available third party web browsers <br />
            <br />~ Send any unsolicited or unauthorized spam and spam comments
            on posts, advertising messages, promotional materials, email, junk
            mail, chain letters or other form of solicitation <br />
            <br />~ Use any meta tags or other hidden text or metadata utilizing
            a Premi Ji's Shiksha 4.0 or Premi Ji's Shiksha 4.0 trademark, logo,
            URL, or product name without Premi Ji's Shiksha 4.0's express
            written consent <br />
            <br /> ~ Use the Service for any commercial purpose or the benefit
            of any third party, except as otherwise explicitly permitted for you
            by Premi ji's Shiksha 4.0 or in any manner not permitted by the
            Terms <br />
            <br /> ~ Use Premi Ji's Shiksha 4.0 user information to forge any
            TCP/IP packet header or any part of the header information in any
            email or newsgroup posting, or in any way use the Services to send
            altered, deceptive or false source-identifying information <br />
            <br />~ Attempt to decipher, decompile, disassemble or reverse
            engineer any of the software used to provide the Services <br />
            <br />~ Interfere with, or attempt to interfere with, the access of
            any user, host or network, including, without limitation, sending a
            virus, overloading, flooding, spamming, or mail-bombing the Services{" "}
            <br />
            <br /> ~ Collect or store any personally identifiable information
            from the Services from other users of the Services without their
            express permission <br />
            <br />~ Impersonate or misrepresent your affiliation with any person
            or entity
            <br />
            <br /> ~ Violate any applicable law or regulation
            <br />
            <br /> ~ Request, collect or store username, password, token or any
            other account authentication information from other users, or <br />
            <br /> ~ Encourage or enable any other individual to do any of the
            activities prohibited in this Acceptable Use Policy.
          </p>
        </div>
        <br />
        <br />
        <div>
          <p>
            Premi Ji's Shiksha 4.0 reserves the right, but is not obligated, to
            remove any User Content for any reason or for no reason, including
            User Content that Premi ji's Shiksha 4.0 believes violates this
            Acceptable Use Policy or its{" "}
            <Link to="/terms_of_service" target="_blank" className="link-here">
              Terms and Conditions
            </Link>
            . Premi ji's Shiksha 4.0 may also permanently or temporarily
            terminate or suspend a User account without notice and liability for
            any reason, including if, in Premi Ji's Shiksha 4.0's sole
            determination, a User violates any provision of this Acceptable Use
            Policy, our{" "}
            <Link to="/terms_of_service" target="_blank" className="link-here">
              Terms and Conditions
            </Link>
            , or for no reason.
          </p>
        </div>
        <br />
        <h5>Last revised on September 1, 2021.</h5>
        <br />
      </div>
    </>
  );
}

export default UserPolicy