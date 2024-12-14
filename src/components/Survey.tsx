function Survey() {
  return (
    <div className="contentContainer">
      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">The Survey</h2>
          <div className="sectionDescription">
            <p>
              The second dataset of this project is Macalester community
              members' reported experience with Public Safety. The below survey
              was not sent to the community due to campus policies that would
              require more time than we had. However, we carefully crafted the
              survey such that it could be sent to the community. Below the
              questions, you can find the research and reasoning that went into
              the creation of the survey.
            </p>
          </div>
        </div>
        <div className="sectionContent surveyContainer">
          <ul className="surveyQuestion">
            <div className="surveyQuestionText">
              What is your role at Macalester?
            </div>
            <ul className="surveyAnswerList">
              <li className="surveyAnswer">Student</li>
              <li className="surveyAnswer">Faculty</li>
              <li className="surveyAnswer">Staff</li>
              <li className="surveyAnswer">Other</li>
            </ul>
          </ul>

          <ul className="surveyQuestion">
            <div className="surveyQuestionText">Gender (optional)</div>
            <ul className="surveyAnswerList">
              <li className="surveyAnswer">Male</li>
              <li className="surveyAnswer">Female</li>
              <li className="surveyAnswer">Non-Binary</li>
              <li className="surveyAnswer">Other</li>
            </ul>
          </ul>

          <ul className="surveyQuestion">
            <div className="surveyQuestionText">Race/ethnicity (optional, select all that apply)</div>
            <ul className="surveyAnswerList">
            <li className="surveyAnswer">White</li>
            <li className="surveyAnswer">Black or African American</li>
            <li className="surveyAnswer">Native American</li>
            <li className="surveyAnswer">Asian</li>
            <li className="surveyAnswer">Native Hawaiian or Pacific Islander</li>
            <li className="surveyAnswer">Hispanic</li>
            <li className="surveyAnswer">Other</li>
            </ul>
          </ul>

          <ul className="surveyQuestion">
            <div className="surveyQuestionText">
              Is there anything else about your identity or presentation you
              would like to share, as it may influence interactions with Public
              Safety?
            </div>
            <ul className="surveyAnswerList">
              <li className="surveyAnswer">Open ended answer...</li>
            </ul>
          </ul>

          <ul className="surveyQuestion">
            <div className="surveyQuestionText">
              How many times have you called Public Safety in your time at
              Macalester?
            </div>
            <ul className="surveyAnswerList surveyAnswerList--grid">
              {[...Array(9)].map((_, i) => (
                <li key={i + 1} className="surveyAnswer">
                  {i + 1}
                </li>
              ))}
              <li className="surveyAnswer">10+</li>
            </ul>
          </ul>

          <ul className="surveyQuestion">
            <div className="surveyQuestionText">
              If you have called Public Safety in the past, what are all of the
              reasons you did so? (select all that apply.)
            </div>
            <ul className="surveyAnswerList">
              <li className="surveyAnswer">Report a crime</li>
              <li className="surveyAnswer">Report a policy violation</li>
              <li className="surveyAnswer">Medical emergency</li>
              <li className="surveyAnswer">Escort</li>
              <li className="surveyAnswer">Fire</li>
              <li className="surveyAnswer">Access to a building or room</li>
              <li className="surveyAnswer">Parking or vehicle concern</li>
              <li className="surveyAnswer">Other</li>
              <li className="surveyAnswer">I've never called Public Safety</li>
            </ul>
          </ul>

          <ul className="surveyQuestion">
            <div className="surveyQuestionText">
              Which of the following statements do you agree with?
            </div>
            <ul className="surveyAnswerList">
              <li className="surveyAnswer">
                I feel safer knowing that Public Safety is looking out for us.
              </li>
              <li className="surveyAnswer">
                I feel like public safety doesn't do much.
              </li>
              <li className="surveyAnswer">
                I feel less safe around Public safety.
              </li>
            </ul>
          </ul>

          <ul className="surveyQuestion">
            <div className="surveyQuestionText">
              How many times has Public Safety approached you while on campus?
            </div>
            <ul className="surveyAnswerList surveyAnswerList--grid">
              {[...Array(4)].map((_, i) => (
                <li key={i + 1} className="surveyAnswer">
                  {i + 1}
                </li>
              ))}
              <li className="surveyAnswer">5+</li>
            </ul>
          </ul>

          <ul className="surveyQuestion">
            <div className="surveyQuestionText">
              Is there anything else relating to your experiences with Public
              Safety and how they have helped you to feel safe and/or unsafe on
              campus?
            </div>
            <ul className="surveyAnswerList">
              <li className="surveyAnswer">Open ended answer...</li>
            </ul>
          </ul>

          <ul className="surveyQuestion">
            <div className="surveyQuestionText">
              If you answered the previous question, can we anonymously quote it
              on our website?
            </div>
            <ul className="surveyAnswerList">
              <li className="surveyAnswer">Yes</li>
              <li className="surveyAnswer">No</li>
              <li className="surveyAnswer">Other</li>
            </ul>
          </ul>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="surveyReasoningHeader">Research and Reasoning</h2>
        </div>
        <div className="sectionContent">
          <p>
            <strong>
              Creating a survey can actually be much harder than one might
              think.
            </strong>{" "}
            Every single aspect of it can affect the results. This includes the
            types of questions, how the questions are worded, the order of the
            questions, and even the order of the answer choices. The results of
            the survey depend on all of these things, so surveys are almost like
            a fine art. <br />
            <br />
            With that in mind, I, <i>Allen</i>, was tasked with doing research
            on how to craft high quality surveys. I took our survey rough draft/outline
            and improved upon it. Although the three different sources I found were 
            all from different industries (travel research, healthcare, and 
            Pew Research), they all said similar things, so I concluded the principles 
            outlined in them are universal. I used these sources to update the survey, 
            so here are the main takeaways I had that I used to make the survey more
            objective. <br />
            <br />
          </p>
          <p>
            <strong>First of all:</strong> make the survey as simple as
            possible. Use plain, everyday language, and make sure there aren’t
            too many redundant answer choices. If the respondent can’t
            understand the questions, then they can’t give a good answer. My
            applications of this principle mostly equated to small wording
            choices, so I would say the best example of this is how I changed
            the number of choices in “how many times have you been approached by
            Public Safety” question from 10 to 5. I felt like individuals don’t
            from 10 to 5. I felt like individuals don’t get approached very
            often, so almost no one was going to say 10. Having the extra
            choices there could just add to confusion. <br />
            <br />
          </p>
          <p>
            Something that stood out to me from reading my sources was that they
            seemed to agree the all-too-common “agree vs disagree” question
            format was unusable. There’s a phenomenon called “Acquiescence bias”
            where survey respondents are more likely to check “agree” on these
            statements, even if they disagree or think there’s a better
            alternative. With this in mind, I completely redesigned the last
            (and arguably most important) question of the survey. This question
            used to ask how public safety impacts their feeling of safety on
            campus. There were options for positively or negatively affecting
            feeling of safety, with additional “extremely” modifiers for each.
            Fearing this could cause acquiescence bias, I changed the question
            to a “which of the following statements do you agree with” question.
            Respondents now get the choice between three statements that portray
            the meaning of the previous binary while making it easier to
            understand. I removed the “extreme” modifiers because it makes the
            question harder to answer, and I split the “more unsafe” answer into
            two different ones. One for if the respondent thinks public safety
            isn’t doing enough, and one for if they are actively having a negative impact. 
            This allows us to collect more useful data while
            also making the question easier to answer. <br></br><br></br>
          </p>
          <p>
            The last edit I made, despite not being in the sources I found, was
            put in more privacy protection. I added a section to ask participants for
            consent to use their quotes anonymously on the site.<br></br><br></br>
          </p>
          <p
            style={{
              marginBottom: "4rem",
              borderBottom: "1px solid var(--text-color)",
              paddingBottom: "4rem",
            }}
          >
            If we were to get approval to send out this survey, we would both embed it into the site,
            and create visual representations of the results. However, because we were not able to send out this
            survey, we hope that reading the questions can prompt you to consider how you have experiened Public Safety,
            and how that may relate to others' experiences as well as the other data set displayed on this site.
          </p>
         
          <p>
            <a
              href="https://doi.org/10.1177/0047287513479842"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dolnicar, S. (2013). Asking Good Survey Questions. Journal of
              Travel Research, 52(5), 551-574.
            </a>
          </p>
          <p>
            <a
              href="https://onlinelibrary.wiley.com/doi/abs/10.1111/trf.15861"
              rel="noopener noreferrer"
              target="_blank"
            >
              Pagano, Monica B., et al. "How do we design and report a
              high‐quality survey?." Transfusion 60.10 (2020): 2178-2184.
            </a>
          </p>
          <p>
            <a
              href="https://www.pewresearch.org/writing-survey-questions/"
              rel="noopener noreferrer"
              target="_blank"
            >
              “Writing Survey Questions.” Pew Research Center, 26 May 2021,
              www.pewresearch.org/writing-survey-questions/.
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Survey;
