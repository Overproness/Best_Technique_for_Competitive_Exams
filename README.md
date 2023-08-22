# Best_Technique_for_Competitive_Exams
Best Technique to answer in a Competivie Exam if you don't know answers and why. 

As Competitive Exams have negative marking so students are always in a dilemma, when to trust their gut feeling and when to not. So, here we will see which technique is the best to use to get the best score if you do not know the answer to a Multiple Choice Question. We will prove which one is the best technique and how to imitate it in Real Life. 



Okay so here is the scenario. There are two children A and B. Both are attempting a competitive exam named ECAT. ECAT has 400 marks in total, with 100 questions. Each question is a multiple choice question, with a total of 4 choices, out of which 1 is correct. If marked correctly, each question gets you four marks, leaving it will cost you nothing extra, while marking it incorrectly costs you 1 mark in negative. For example you attempted 74 questions out of which 2 are wrong. So, your marks are        72*4 - 2*1 = 286. (BTW, This is my actual result. ). The student didn't attempt 26 questions because of doubt.
We will be testing if it is better to leave the doubtful questions or to select a random option. 
Our approach to test this would be to generate a random number between the range 1-4 twice, and if they match we will consider that the student who selected randomly got the answer right. 
We will consider that both the students A and B know the first 72 questions correctly and are doubtful in the rest. This is where their approaches differ, and this is what we're gonna calculate. A uses the safe approach while B uses the random approach. 





 # **Results:**

  When we run the tests 10,000 times, we obtain the following results

                              { A: 2241, B: 7759 }
                              Guess is the best.
We can speculate that when we choose to leave the question unanswered, zero marks are being added in our score. But, if we choose to select randomly there is a chance that the marks we got from correct answers from the group of ambigious questions will outweigh the marks obtained from questions answered incorrectly from within the same group. 

#Problems: 

**1. Algorithm of Random function & Human Bias**
  The computer uses a select algorithm to determine random, [it is not pure random]([url](https://slate.com/technology/2022/06/bridle-ways-of-being-excerpt-computer-randomness.html)https://slate.com/technology/2022/06/bridle-ways-of-being-excerpt-computer-randomness.html). But since we are using the "Computer's Random" to generate both the "Question" and the "Answer" here, so in this scenario it can be considered as random. Because if nobody is random then everybody is random. 
  In real life we will encouter the problem of human bias. Let me explain, So for example we will be hesitant to select 3 or 4 "A's" in a row. And let's not forget the bias of the examiner, because he will also not be creating such a scenario where the answers are in a sequence of continuous "A, B, C, D". Whereas such situations can occur freely in a computer enviroment. 

**2. Chance of getting better grades:**
  From the above result we can see that there is a 77.5% chance to get better marks if you guess, but we should not forget about the 22.5% chance of getting a bad score. 


#Contemplation: 
  Now if we take the 288 marks we get from only attempting the 72 questions as the base line and then calculate from that then the possible range of marks that we can get is: 395 - 260. If talking in terms of percentages, then the percentage increase/decease has a range of: 37.1% - 9.7%
  Secondly let's try to take it as close to real life as we can. We can achieve this by using two different algorithms to calculate random numbers. And we will also implement a system which may randomly change the random calculated value to compansate for the human bias we talked about earlier. This code will be available in UsingTwoAlgorithms.js. 
  We used the JS 'crypto' module's random number generator, which is very different from JS's generic random number generator. 
  After running the code here are the results:
  Using Crypto Module`s random function
  
                                                                             { A: 2223, B: 7777 }
                                                                              Guess is the best. 

 As we can see the difference is not that great.

 **#How to generate these results in real life: **
  N.B. The chance of getting higher marks than the base line are 78% and the range of marks in the positive is greater than that in the negative that is why we are considering to do this in real life exams. 

  Take a pencil, make sure its not round meaning it has distinct edges preferably like [this]([url](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2xczUICj_CK0zL8ftMlPgOFmZj8B4fU9Cg&usqp=CAU)https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2xczUICj_CK0zL8ftMlPgOFmZj8B4fU9Cg&usqp=CAU), and one with four sides. Mark a number like 1, 2, 3, 4 on each of these sides. Roll the pencil and hope your random algorithm matches, with the examiners.
