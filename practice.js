// const { start } = require('init');
// const input = require('readline-sync')

// const { questionInt } = require("readline-sync");

// // metrix [1]
// let N = input.questionInt("enter the size of first array : ");
// let M = input.questionInt("enter the size of second array : ");
// let arr = [];
// for (let i = 0; i < N; i++){
//     arr[i] = [];
//     for (let j = 0; j < M; j++){
//         let a = input.questionInt(`enter the ${j+1} element : `);
//         arr[i][j] = a;
//     }
// }

// // metrix [2]
// // let O = input.questionInt("enter the size of third array : ");
// // let P = input.questionInt("enter the size of forth array : ");
// let arr1 = [];
// for (let i = 0; i < N; i++){
//     arr1[i] = [];
//     for (let j = 0; j < M; j++){
//         let a = input.questionInt(`enter the ${j+1} element : `);
//         arr1[i][j] = a;
//     }
// }
// //console.log(arr,arr1);
// let arr2 = [];
// for (let i = 0; i < N; i++){
//     arr2[i] = [];
//     for (let j = 0; j < M; j++){
//         arr2[i][j] = arr[i][j] + arr1[i][j];
//     }
// }console.log(arr2);

// let n = input.question("enter a number : ");
// let arr = [];
// for (let i = 0; i < n; i++){
//     arr[i] = [];
//     for (let j = 0; j < n; j++){
//         arr[i][j] = input.questionInt(`enter the ${j+1} element : `);
//         }
//         console.log("\n");
// }
// console.log(arr);

// let a = input.questionInt();
// let b = input.questionInt();

// let n = input.questionInt("enter a number : ");
// for (;;){
//     for (let i = 1; i <= n; i++){
//         let str = "";
//         for (let j = 1; j <= i; j++){
//             if (j == i){
//                 str += "*";
//             }else {
//                 str += " ";
//             }
//         }
//         console.log(str);
//     }
//     for (let i = n; i > 0; i--){
//         let str1 = "";
//         for (let j = 1; j <= i; j++){
//             if (j == i){
//                 str1 += "*";
//             }else {
//                 str1 += " ";
//             }
//         }
//         console.log(str1);
//     }
    
// }


// let n = input.questionInt("enter a number : ");
// let arr = [];
// for (let i = 0; i < n; i++){
//     let x = input.question("enter '1'[for array] or '0'[for element] : ");
//     if (x == 0){
//         arr[i] = input.questionInt(`enter the ${i+1} element : `);
//     }else {
//         let z = input.questionInt("enter the size of inner array : ");
//         arr[i] = [];
//         for (let j = 0; j < z; j++){
//             arr[i][j] = input.questionInt(`enter the ${j+1} element : `);
//         }
//     }
// }
// console.log(arr1);
// // let arr1 = [];
// // for (let i = 0; i < arr.length; i++){
//     //     if (Array.isArray(arr[i])){
//         //         for (let j = 0; j < arr[i].length; j++){
//             //             arr1.push(arr[i][j]);
//             //         }
//             //     }else {
//                 //         arr1.push(arr[i]);
//                 //     }
//                 // }
//                 let arr1 = arr.flat();
//                 // arr1.sort((a,b) => a-b);
// // console.log("final array : ",arr1);


let timerInterval;
let timerRunning = false;
let timerTime = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!timerRunning) {
        timerTime = getTimeFromInputs();
        if (timerTime > 0) {
            timerInterval = setInterval(updateTimer, 1000);
            timerRunning = true;
        } else {
            alert("Please set a valid timer duration.");
        }
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerTime = 0;
    updateTimerDisplay();
    timerRunning = false;
}

function updateTimer() {
    if (timerTime > 0) {
        timerTime--;
        updateTimerDisplay();
    } else {
        clearInterval(timerInterval);
        timerRunning = false;
        alert("Timer has ended.");
    }
}

function updateTimerDisplay() {
    const hours = Math.floor(timerTime / 3600);
    const minutes = Math.floor((timerTime % 3600) / 60);
    const seconds = timerTime % 60;
    timerDisplay.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time.toString().padStart(2, '0');
}

function getTimeFromInputs() {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    return hours * 3600 + minutes * 60 + seconds;
}

