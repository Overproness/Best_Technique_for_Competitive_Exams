# Best Techniques for Competitive Exams

## Introduction

Competitive exams often present students with a dilemma: when to trust their gut feeling and when to hold back, given the negative marking system. This guide explores the optimal technique for answering multiple-choice questions when you're uncertain about the answers.

## The Challenge

Competitive exams employ negative marking, where incorrect answers lead to deductions. To navigate this, we examine when to rely on intuition and when to abstain. We'll analyze two contrasting strategies and determine which one is more effective for obtaining the highest score when facing uncertainty.

## Scenario

Consider two students, A and B, both taking the ECAT exam. ECAT is a 400-mark exam with 100 multiple-choice questions, each with four choices. Correct answers gain four marks, while incorrect answers result in a one-mark deduction. 

In an example where a student attempts 74 questions, with 2 incorrect, the score would be calculated as 72 * 4 - 2 * 1 = 286. Here, the student left 26 questions unanswered due to doubt.

## Techniques Comparison

We'll investigate whether it's better to leave doubtful questions unanswered or to make random selections. To compare, we'll generate random numbers within the 1-4 range. If both randomly selected answers match, we consider it correct. Students A and B are both assumed to know the first 72 questions but differ in their approach to ambiguous ones.

## Results

After conducting 10,000 trials, the results are as follows:

- Student A: 2241 correct answers
- Student B: 7759 correct answers

Guessing emerges as the superior technique, statistically. Leaving questions unanswered doesn't contribute to the score, while random selection can result in correct answers for ambiguous questions.

## Considerations

### 1. Algorithm and Human Bias

The randomness in computer-generated numbers is governed by an algorithm, making it non-purely random. However, for our scenario, computer-generated randomness is considered acceptable. In real life, human bias might influence decisions, causing reluctance to select consecutive options or specific patterns. For example, we might hesitate to choose 'A' repeatedly and consider the potential biases of both students and examiners.

### 2. Chance of Success

Our results indicate a 77.5% chance of achieving better scores with the guessing technique. However, a 22.5% chance of poorer outcomes also exists.

## Contemplation

Considering the baseline score achieved from answering only the 72 known questions (288 marks), the potential range of marks lies between 395 and 260. In terms of percentages, the increase/decrease range is 37.1% - 9.7%.

To mimic real-life scenarios more closely, we implemented a system using two different algorithms to generate random numbers. Additionally, we introduced a mechanism to occasionally alter the calculated random value to counteract human bias, as discussed earlier. This code is available in the `UsingTwoAlgorithms.js` file.

We utilized the 'crypto' module's random number generator, distinct from the generic random number generator in JS. After running the code, we observed the following results:

Using Crypto Module's Random Function:
- Student A: 2223 correct answers
- Student B: 7777 correct answers

The difference between the two techniques is not significant, suggesting that the effectiveness of the techniques is comparable.

## Real-World Application

To translate these findings into real exams, take these steps:

1. Choose a non-rounded pencil with distinct edges.
2. Label each edge with numbers 1 through 4.
3. Roll the pencil and match the randomly selected number with your answer.

Given the 78% chance of scoring higher than the baseline, this strategy becomes a valuable tool for real exams.

## Conclusion

By leveraging a combination of statistical analysis and real-world implementation, you can optimize your performance in competitive exams, even when you're uncertain about the answers. Remember to consider human biases and tailor your approach accordingly.
