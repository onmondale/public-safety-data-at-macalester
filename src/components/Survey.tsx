function Survey() {
  return (
    <div className="contentContainer">
      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">The Survey</h2>
          <div className="sectionDescription">
            <p>
              The second dataset of this project is Macalester community members' reported experience with Public Safety.
              The below survey was not sent to the community due to campus policies that would require more time than we had. However, 
              we carefully crafted the survey such that it could be sent to the community. Below the questions, you can find the 
              research and reasoning that went into the creation of the survey.
            </p>
          </div>
        </div>
        <div className="sectionContent surveyContainer">
          <ul className="surveyQuestion">
          What is your role at Macalester?
            <li className="surveyAnswer">Student</li>
            <li className="surveyAnswer">Faculty</li>
            <li className="surveyAnswer">Staff</li>
            <li className="surveyAnswer">Other</li>
          </ul>
          <ul className="surveyQuestion">
          Gender (optional)
            <li className="surveyAnswer">Male</li>
            <li className="surveyAnswer">Female</li>
            <li className="surveyAnswer">Non-Binary</li>
            <li className="surveyAnswer">Other</li>
          </ul>
          <ul className="surveyQuestion">
          Is there anything else about your identity or presentation you would like to share, 
          as it may influence interactions with Public Safety?
            <li className="surveyAnswer">Open ended answer</li>
          </ul>
          <ul className="surveyQuestion">
          How many times have you called Public Safety in your time at Macalester?
            <li className="surveyAnswer">1</li>
            <li className="surveyAnswer">2</li>
            <li className="surveyAnswer">3</li>
            <li className="surveyAnswer">4</li>
            <li className="surveyAnswer">5</li>
            <li className="surveyAnswer">6</li>
            <li className="surveyAnswer">7</li>
            <li className="surveyAnswer">8</li>
            <li className="surveyAnswer">9</li>
            <li className="surveyAnswer">10 or more</li>
          </ul>
          <ul className="surveyQuestion">
          If you have called Public Safety in the past, what are all of the reasons you did so? (select all that apply.)
            <li className="surveyAnswer">Report a crime</li>
            <li className="surveyAnswer">Medical emergency</li>
            <li className="surveyAnswer">Escort</li>
            <li className="surveyAnswer">Fire</li>
            <li className="surveyAnswer">Access to a building or room</li>
            <li className="surveyAnswer">Parking or vehicle concern</li>
            <li className="surveyAnswer">Other</li>
            <li className="surveyAnswer">I've never called Public Safety</li>
          </ul>
          <ul className="surveyQuestion">
          Which of the following statements do you agree with?
            <li className="surveyAnswer">I feel safer knowing that Public Safety is looking out for us.</li>
            <li className="surveyAnswer">I feel like public safety doesn't do much.</li>
            <li className="surveyAnswer">I feel less safe around Public safety due to how intimidating they can be.</li>
          </ul>
          <ul className="surveyQuestion">
          How many times has Public Safety approached you while on campus?
            <li className="surveyAnswer">1</li>
            <li className="surveyAnswer">2</li>
            <li className="surveyAnswer">3</li>
            <li className="surveyAnswer">4</li>
            <li className="surveyAnswer">5 or more</li>
          </ul>
          <ul className="surveyQuestion">
          Is there anything else relating to your experiences with Public Safety and how they have helped you to feel safe and/or unsafe on campus?
            <li className="surveyAnswer">Open ended answer</li>
          </ul>
          <ul className="surveyQuestion">
          If you answered the previous question, can we anonymously quote it on our website?
            <li className="surveyAnswer">Yes</li>
            <li className="surveyAnswer">No</li>
            <li className="surveyAnswer">Other</li>
          </ul>
          
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">Research and Reasoning</h2>
        </div>
        <div className="sectionContent surveyReasoning">
          <p>
          Creating a survey can actually be much harder than one might think. Every single aspect of it can affect the results. 
          This includes the types of questions, how the questions are worded, the order of the questions, 
          and even the order of the answer choices. The results of the survey depend on all of these things, 
          so surveys are almost like a fine art.
          </p>
          <p>
          With that in mind, I, Allen, was tasked with doing research on how to craft high quality surveys.
          I took the rough draft my groupmate had created and improved upon it. Although the three different sources 
          I found were all from different industries (travel research, healthcare, and Pew Research), they all 
          said similar things, so I concluded the principles outlined in them are universal. 
          I used these sources to update the survey, so here are the main takeaways I had that I used to make 
          the survey more objective.
          </p>
          <p>
          First of all: make the survey as simple as possible. Use plain, everyday language, and make sure there 
          aren’t too many redundant answer choices. If the respondent can’t understand the questions, then they can’t 
          give a good answer. My applications of this principle mostly equated to small wording choices, so I would say 
          the best example of this is how I changed the number of choices in “how many times have you been approached 
          by Public Safety” question from 10 to 5. I felt like individuals don’t get approached very often, 
          so almost no one was going to say 10. Having the extra choices there could just add to confusion.
          </p>
          <p>
          Something that stood out to me from reading my sources was that they seemed to agree the all-too-common 
          “agree vs disagree” question format was unusable. There’s a phenomenon called “Acquiescence bias” where 
          survey respondents are more likely to check “agree” on these statements, even if they disagree or think 
          there’s a better alternative. With this in mind, I completely redesigned the last (and arguably most important) 
          question of the survey. This question used to ask how public safety impacts their feeling of safety on campus. 
          There were options for positively or negatively affecting feeling of safety, with additional “extremely” modifiers 
          for each. Fearing this could cause acquiescence bias, I changed the question to a “which of the following 
          statements do you agree with” question. Respondents now get the choice between three statements that portray 
          the meaning of the previous binary while making it easier to understand. I removed the “extreme” modifiers because
          it makes the question harder to answer, and I split the “more unsafe” answer into two different ones. One for if 
          the respondent thinks public safety isn’t doing enough, and one for if they are actively intimidated by their presence. 
          This allows us to collect more useful data while also making the question easier to answer.
          </p>
          <p>
          The last edit I made, despite not being in the sources I found, was put in more privacy protection. 
          I removed the question asking about race and replaced it with an open ended “anything else you want to share about your 
          identity” question, and allowed participants to consent to their quotes being used anonymously. In a survey going out to 
          all of campus, asking about race would be an important factor because of the biases police-like figures often show. 
          However, since this was only going out to this class(??), I figured it could compromise people’s anonymity, and is an 
          unnecessary thing to ask for such a low amount of people.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Survey;
