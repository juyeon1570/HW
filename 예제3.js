let q = [
        '9 * 9 = ', '8 * 5 = ', '4 * 2 = ', '5 * 3 = ', 
        '3 * 12 = ', '5 * 30 = ', '6 * 12 = ', '5 * 1 = ', 
        '9 * 4 = ', '8 * 8 = ', '98 * 87 = ', '5 * 9 = ', 
        '56 + 60 = ', '60 + 60 = ', '55 * 3 = ', '4 * 8 = ', 
        '7 * 6 = ', '66 / 33 = ', '9 / 3 = ', '81 / 9 = '
    ];
let a = [81, 40, 8, 15, 36, 150, 72, 5, 36, 64, 8526, 45, 116, 120, 165, 32, 42, 2, 3, 9];

let cnt = 0;
let corr = 0;

function quiz(){
    if(cnt%3==0 && corr>0) return;
    if(cnt>0 && cnt%3==0 && corr==0) console.log('---- 재시험입니다. ----');
    let index = Math.floor(Math.random()*20);
    let input = Number(prompt(q[index]));
    if(a[index]==input){
        corr++;
        cnt++;
        console.log('맞혔습니다!');
        console.log(`맞은 문제 개수: ${corr}개`);
    }else{
        cnt++;
        console.log('틀렸습니다!');
        console.log(`맞은 문제 개수: ${corr}개`);
    }
    setTimeout(quiz,3000);
}

quiz();
