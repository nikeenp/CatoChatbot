// Options the user could type in
const prompts = [
  //greeting
  ["Hi", "How are you?", "Hello", "Hello there", "Good day", "Good morning", "Good afternoon", "Good evening"],
  //goodbye
  ["Bye", "See you later", "Goodbye", "Have a great day!", "It has been a pleasure talking to you!"],
  //name
  ["What's your name?", "What is your name?", "What should I call you?"],
  //catostatus
  ["How are you Cato?", "How are you?", "How are things?"],
  //whoiscato
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  //mentalhealthinfo
  ["Tell me more about mental health", "What is mental health", "Explain mental health"],
  //mentalhealthimportance
  ["Is mental health important?", "Does mental health matter?", "Why is mental health important?", "Tell me why mental health is important"],
  //userfeelingdown
  ["I am feeling down", "I feel sad", "I am upset", "I am stressed", "I need a break", "I have got so much going on", "This is too much"],
  //userfeelinghappy
  ["I am feeling good", "I feel good", "I am happy", "I am well", "I feel great", "Everything is good"],
  //depressionoverview
  ["What is depression?", "Tell me about depression", "What do you know about depression?"],
  //depressionsymptoms
  ["What are the symptoms of depression?", "What are signs of depression?", "How can I tell if I have depression?"],
  //depressioncauses
  ["What causes depression?", "Why do we get depression?", "Why am I depressed?", "Why do people get depression?", "Why do people get depressed?"],
  //depressiontreatment
  [["How is depression treated?", "Can depression be treated?", "How do you treat depression?", "What is the treatment for depression?"],
  //depressiondiagnosis
  ["How is depression diagnosed?", "Can you diagnose depression?"],
  //anxietyoverview
  ["What is anxiety?", "Tell me about anxiety", "What do you know about anxiety?"],
  //anxietysymptoms
  ["What are the symptoms of anxiety?", "What are signs of anxiety?", "How can I tell if I have anxiety?"],
  //anxietycauses
  ["What causes anxiety?", "Why do we get anxiety?", "Why am I anxious?", "Why do people get anxious?", "Why do people get anxiety?"],
  //anxietytreatment
  ["How is anxiety treated?", "Can anxiety be treated?", "How do you treat anxiety?", "What is the treatment for anxiety?"],
  //anxietydiagnosis
  ["How is anxiety diagnosed?", "Can you diagnose anxiety?"],
  //eatingoverview
  ["What are eating disorders?", "Tell me about eating disorders", "What do you know about eating disorders?"],
  //eatingsymptoms
  ["What are the symptoms of eating disorders?", "What are signs of eating disorders?", "How can I tell if I have an eating disorder?"],
  //eatingcauses
  ["What causes eating disorders?", "Why do we get eating disorders?", "Why do I have an eating disorder?", "Why do people get eating disorders?"],
  //eatingtreatment
  ["How are eating disorders treated?", "Can eating disorders be treated?", "How do you treat eating disorders?", "What is the treatment for eating disorders?"],
  //eatingdiagnosis
  ["How are eating disorders diagnosed?", "Can you diagnose eating disorders?"],
  //suicideoverview
  ["What is suicide?", "Tell me about suicide", "What do you know about suicide?"],
  //suicidesymptoms
  ["What are the symptoms of suicidal tendencies?", "What are signs of suicidal tendencies?", "How can I tell if I have suicidal tendencies?"],
  //suicidecauses
  ["What causes suicide?", "Why do people commit suicide?", "Why do I have suicidal thoughts?", "Why do people get suicidal thoughts"],
  //suicidetreatment
  ["How are suicidal thoughts stopped?", "How are suicidal thoughts treated?", "Can suicidal thoughts be stopped?", "How do you stop suicidal thoughts?", "How do you treat suicidal thoughts?", "What is the advice for suicidal thoughts?"],
  //suicidediagnosis
  ["How are suicidal thoughts diagnosed?", "Can you diagnose suicidal thoughts?", "How are suicidal thoughts spotted?", "Can you spot suicidal thoughts?"],
  //addictionoverview
  ["What is addiction?", "Tell me about addiction", "What do you know about addiction?"],
  //addictionsymptoms
  ["What are the symptoms of addiction?", "What are signs of addiction?", "How can I tell if I have an addiction?"],
  //addictioncauses
  ["What causes addiction?", "Why do we get addicted?", "Why do I have an addiction?", "Why do people get addictedd?"],
  //addictiontreatment
  ["How is addiction treated?", "How are addictions treated?", "Can addiction be treated?", "How do you treat addiction?", "What is the treatment for addiction?"],
  //addictiondiagnosis
  ["How are addictions diagnosed?", "Can you diagnose addictions?", "How is addiction diagnosed?", "Can you diagnose addiction?"],
  //thanks
  ["Thanks", "okay","Thank you","thankyou", "That's helpful", "Awesome, thanks", "Thanks for helping me", "wow", "great"],
  //date
  ["Coffee?", "Can I take you out on a date?"],
  //lang
  ["What language are you written in? "],
  //cbt
  ["What is CBT?", "Tell me about CBT", "What's CBT?"],
  //othersources
  ["Where can I find more information?", "Are there other websites for information on mental health?", "Where else can I get information on mental health?", "Does the NHS have a website for mental health?", "Does mind have a website?", "Other sources of mental health information", "Mental Health information"]
]

// Possible responses, in corresponding order

const replies = [
  //greeting
  ["Hello!", "Good to see you!", "Hi there, how can I help?"],
  //goodbye
  ["Have a great day!", "Speak to you soon!", "Talk to you another time", "Goodbye!"],
  //name
  ["You can call me Cato. Fun fact, Cato means all-knowing in Latin.", "My name is Cato, it means all-knowing in Latin"],
  //catostatus
  ["I'm very well thank you", "Everything is good for me at the moment", "I'm good, even better now I'm talking to you!"],
  //whoiscato
  ["I am just a bot", "I am a bot."],
  //mentalhealthinfo
  ["Mental health is defined as being a broader term for our emotional, psychological and social wellbeing. It's directly related to how we think, feel and act."],
  //mentalhealthimportance
  ["It is a very important topic which has become increasingly prominent in our society and affects everyone from childhood through to adulthood."],
  //userfeelingdown
  ["Don't worry! I know sometimes everything can be overwhelming. May I suggest following the breathing exercise at https://www.calm.com/breathe"],
  //userfeelinghappy 
  ["That's fantastic! I'm so glad to hear it!"],
  //depressionoverview
  ["Clinical depression is a persistent feeling of sadness for weeks or months at a time. It is not feeling down for a few days. People with depression sometimes also display symptoms of Anxiety. Often depression gets played down as if it not a real mental health condition. This is completely false, depression is a genuine problem and has symptoms. Depression is treatable and, coupled with support, most people can make a full recovery from depression."],
  //depressionsymptoms
  ["Symptoms of depression can vary, from feelings of lasting unhappiness to suicudal thoughts but there are many ranges in between these two. For more information, visit https://www.nhs.uk/mental-health/conditions/clinical-depression/overview/"],
  //depressioncauses
  ["Depression can be triggered by something like a life-changing event but you can also become depressed for no apparent reason"],
  //depressiontreatment
  ["Treatment for depression can include one of or a combination of lifestyle changes, therapy and medicines. Consult your GP for more advice"],
  //depressiondiagnosis
  ["You should seek help from your GP if you experience symptoms for more than 2 weeks. Your GP will ask you questions about your general health and how the way you feel is affecting you in daily life."],
  //anxietyoverview
  ["Anxiety in adults is feeling of worry, fear or unease. For some people it is harder to control their worries, they have these feelings of worry constantly and it can affect their lives to a greater degree. This is known as generalised anxiety disorder (GAD). Anxiety can be the main symptom of another condition"],
  //anxietysymptoms
  ["A person with generalised anxiety disorder (GAD) will feel anxious about many issues all at once, as a pose to one specific issue. When anxiety about one issue is resolved, anxiety about another will usually arise immediately. You might be restless or have trouble concentrating"],
  //anxietycauses
  ["Causes of generalised anxiety disorder (GAD) have not yet been fully understood. It is likely multiple factors contribute to GAD. Many people develop GAD for no discernable reason."],
  //anxietytreatment
  ["Generalised anxiety disorder (GAD) symptoms can be eased through multiple treatments. Most of this this is self-help treatment, psychological therapy and medicines"],
  //anxietydiagnosis
  ["Generalised anxiety disorder (GAD) can be difficult to diagnose partially because it is hard to distinguish from other mental health conditions. It is worth talking to your GP if you think you may have GAD"],
  //eatingoverview
  ["Eating disorders are mental health conditions where the control of food is used to cope with feelings and other situations. They can involve consumption of too much or too little food, in some cases to respond to weight or body shape. The three main eating disorders are anorexia, bulimia and binge eating disorder."],
  //eatingsymptoms
  ["Symptoms of eating disrrders may include spending a lot of time worrying about weight or body shape and actively removing excess food through by making yourself vomit"],
  //eatingcauses
  ["Exact causes are unknown, but you could develop an eating disorder if you have family history of eating disorders, have experienced body-shaming or have low-self esteem"],
  //eatingtreatment
  ["Recovery from an eating disorder is completely achievable but it can take time and varies from person to person. Often you'll be referred to a eating disorder specialist, they will talk to you to decide the best course of treatment. Most courses of treatment will involve talking therapy and may include regular health checks"],
  //eatingdiagnosis
  ["If you think you may have an eating disorder, contact your GP as soon as possible. The GP will question you about your eating habits, feelings and perform an overall health evaluation. You could then be referred to a specialist"],
  //suicideoverview
  ["Suicide is intentionally causing one's death. People choose to commit suicide for multiple reasons but sucide can be prevented. If you want to talk about anything or feel you have no one you can talk to call Samaritans UK on 116 123."],
  //suicidecauses
  ["All sorts of emotional pain can lead to suicidal feelings. The reasons for these feelings are unique to each person"],
  //suicidetreatment
  ["Common treatments for suicidality are psychotherapy, medication, detoxification and support from family and friends"],
  //suicidediagnosis
  ["Once you alert your GP to your suicidal thoughts, they will likely complete a physical examination and ask you some questions to help determine what is causing them"],
  //addictionoverview
  ["Students in higher education often use alcohol, nicotine and recreational drugs. When not controlled, this can become problematic. Addiction is a discernable pattern of physical or physiological dependency on one or mulitple substances. This can manifest as strong cravings and use of a substance despite knowing the associated risks with it"],
  //addictionsymptoms
  ["It can be difficult to recognise an addiction. Someone who has an addiction will crave a substance of behavioral habit. Often they will neglect or ignore other areas of their life to fulfil their desires. The intensity of this neglect often increases as the duration of the addiction increases. A person without an addiction can usually identify bad habits and get rid of them, those with an addiction find this much harder. They will likely make excuses to continue to justify the habit or negative behaviour"],
  //addictioncauses
  ["Addiction can have various causes but often for substance addiction it is due to the change in mood and feeling they cause during a high. They have both mental and physical affects. Gambling addiction works in much the same way providing a 'high' after a win which a person can crave to feel again. Chasing these highs can become a very difficult habit to break. Being addicted to something indicates that being without it results in withdrawal symptoms or a 'come down'. Usually this is unpleasant so an addict will continue to have or do what they crave"],
  //addictiontreatment
  ["Treatment of addiction changes depending on what the addiction is. For substance addictions treatments usually involve medicines, detoxification, self-help, and therapy. For physical addictions such as gambling, treatment is similar but with a larger focus on techniques such as cognitive behavioural therapy (CBT)."],
  //addictiondiagnosis
  ["The person with an addiction should approach their GP. They will most likely refer them to an addiction or rehabilitation specialist. The next step is determining frequency of use and by extention the degree of addiction. This is through questioning and a physical examination."],
  //thanks
  ["Happy to help!", "Any time!","you're welcome", "My pleasure"],
  //coffee
  ["Aaw, that's so sweet of you. Too bad am a Bot."],
  //lang
  ["JavaScript.", "I am written in JavaScript."],
  //cbt
  ["Cognitive behavioural therapy is a form of talking therapy used to help change thinking or behavioural patterns. This is to help manage emotions and problems a patient might have."],
  //othersources
  ["Here are some other sources of information on mental health that I love: https://www.nhs.uk/mental-health/,https://www.studentminds.org.uk/, https://www.mind.org.uk/"]
]
// Random for any other user input

const alternative = [
  "Sorry, I don't understand :/"
]

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]