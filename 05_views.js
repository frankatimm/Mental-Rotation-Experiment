// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome to my experiment.
  Thank you for taking your time and contributing to my research.
  Before we start, please make sure that you do not get distracted by anything (e.g. your phone, internet browser,...).
  Make your self comfortable and get yourself mentally into a working space.
  If you feel ready to start the experiment klick on "begin the experiment"-button down below.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const practice_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In this experiment you will see pairs of geometrical figures. You task is going to be to decide whether the two shown figures are the same or not.
  At first this might sound easy but the geometrical figures are rotated. In order to find you if both figures are the same you have to conduct a mental rotation.

            <br />
            <br />
            We will start with some pratice trails so you know what you have to expect at the main experiment.
            If you feel ready to start the experiment klick on "go to practice trials"-button down below.`,
  buttonText: 'go to practice trials'
});

const main_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `So far so good!
  Please get ready for the main experiment.
  If you feel ready to start the experiment klick on "go to main trials"-button down below.`,
  buttonText: 'go to main trials'
});
// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// Here, we initialize a keyPress task
const practice = custom_views.keypress_rotation_practice({
    trials: 12,
    // trials: 2,
    name: 'practice',
    trial_type: 'practice',
    pause: 250,
    data: _.shuffle(practice_trial_info.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});

const main = custom_views.keypress_rotation_main({
    trials: 48,
    // trials: 8,
    name: 'main',
    trial_type: 'main',
    pause: 250,
    data: _.shuffle(main_trial_info.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});
