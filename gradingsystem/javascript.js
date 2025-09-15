function calculateAverageGrade(scoresArray){
    let total=0;
    for(let i=1; i<scoresArray.length; i++){
        total += scoresArray[i];
    }let average =total/scoresArray.length;
    return average;
}
function getGrade(average){
    if(average>=90){
        return "A+"
    } else if (average>=80){
        return"A";
    }else if (average>=70){
        return"B+";
    }else if (average>=60){Jjj
        return "B";
    }else if (average>=50){
        return"C";
    }else if (average>=40){
        return"D";
    }else{
        return"F";
    }
}
while(true){
    let name=prompt("Enter student name");
    let math=Number(prompt("Enter math score"));
    let english=Number(prompt("Enter english score"));
    let science=Number(prompt("Enter science score"));

    const scores=[math,english,science];
    let average=calculateAverageGrade(scores);
    let grade=getGrade(average);
    console.log(`student: ${name}`);
    console.log(`Grade: ${grade}`);
    
    let checkAgain = prompt("Do you want to check another student's grade? (yes/no)");
    if (checkAgain === "no") {
        break;
    }
}