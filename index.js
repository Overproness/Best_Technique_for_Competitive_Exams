// Okay so here is the scenario. There are two children A and B. Both are attempting a competitive exam named ECAT. ECAT has 400 marks in total, with 100 questions. Each question is a multiple choice question, with a total of 4 choices, out of which 1 is correct. If marked correctly, each question gets you four marks, leaving it will cost you nothing extra, while marking it incorrectly costs you 1 marks in negative. For example you attempted 74 questions out of which 2 are wrong. So, your marks are        72*4 - 2*1 = 286. (Which is btw what happened with me.). The student didn't attempt 26 questions because of doubt.
// We will be testing if it is better to leave the doubtful questions or to select a random option. 
// Our approach to test this would be to generate a random number between the range 1-4 twice, and if they match we will consider that the student who selected randomly got the answer right. 
// We will consider that both the students A and B know the first 72 questions correctly and are doubtful in the rest. This is where their approaches differ, and this is what we're gonna calculate. A uses the save approach while B uses the random approach. 

const correctlyKnownQuestions = 72


const saveApproach = () => {
    const correct = 0
    const wrong = 0
    return{
        correct,
        wrong
    }
}
const RandomPicked = () => {
    let rand1
    let rand2
    let correct = 0
    for (let index = 0; index < 20; index++) {
        rand1 = Math.floor(Math.random() * 4)
        rand2 = Math.floor(Math.random() * 4)
        if(rand1===rand2){
            correct = correct + 1
        }
    }
    const wrong = 20 -correct
    return{
        wrong,
        correct
    }
}

const result = (obj) => {
    const totalMarks = correctlyKnownQuestions * 4 + obj.correct *4 - obj.wrong*1
    return totalMarks
}

const testing = () => {


let A =0
    let B =0
    let resultOfA 
    let resultOfB

for (let index = 0; index < 10000; index++) {
    resultOfA = result(saveApproach())
    resultOfB = result(RandomPicked())
    
    if(resultOfA>resultOfB){
        A = A+1
    }
    else{
        B = B+1
    }
}
console.log({A, B});
if(A>B){
    console.log('Doubtful Questions should be left. ');
}
else{
    console.log('Tukka is the best. ');
}
}
testing()
