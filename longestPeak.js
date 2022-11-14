const example1 = [1,2,3,3,4,0,10,6,5,-1,-3,2,3]
const example2 = [1,1,2]
const example3 = [1, 3, 1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5] 
const example4 = [1, 3, 1, 4, 3, 1]
const example5 = [1,2,2,0]
// function longestPeak(array){
//     let hasPeak = {
//         peak: false,
//         initial: 0
//     }
//     let currentPeak = 0;
//     let maxPeak = 0;
//     for(let i=0; i<array.length; i++){
//         console.log("CUR INDEX: ", i);
//         console.log("CUR VALUE: ", array[i]);
//         console.log("PEAK LENGTH: ", currentPeak);
//         console.log("PEAK VALUE: ", hasPeak.peak);
//         if(i === array.length-1){
//             console.log("LAST ARRAY");
//             if(i-1 === hasPeak.peak){
//                 console.log("HIT");
//                 currentPeak = 0;
//                 console.log(currentPeak);
//             }
//             if(currentPeak > maxPeak){
//                 maxPeak = currentPeak;
//                 console.log("THE MAX PEAK: ", maxPeak);
//             }
//         }
//         else if(!hasPeak.peak){
//             // console.log("NO PEAK");
//             if(array[i] < array[i+1]){
//                 // console.log("greater");
//                 currentPeak++;
//             } else if(array[i] == array[i+1]){
//                 currentPeak=0;
//             } else{
//                 hasPeak.peak = i;
//                 console.log("PEAK VALUE: ", hasPeak.peak);
//                 currentPeak++;
//             }
//         }
//         else if(hasPeak){
//             // console.log("HAS PEAK");
//             if(array[i] > array[i+1]){
//                 currentPeak++;
//             } else{
//                 if(currentPeak > maxPeak){
//                     maxPeak = currentPeak;
//                     console.log("MAX PEAK", maxPeak);
//                 }
//                 currentPeak = 0;
//                 hasPeak.initial = hasPeak.peak;
//                 // console.log("hasPeakinitial:",hasPeak.initial);
//                 i = hasPeak.peak-1;
//                 // console.log(hasPeak.peak);
//                 // console.log("NEW i:", i);
//                 hasPeak.peak = false;
//             }
//         }
//     }
//     return maxPeak;
// }


function longestPeak(array){
    let maxPeak = 0; 
    let currentPeak = 0;
    for(let i=1; i<array.length; i++){
        const current = array[i],prev = array[i-1],next = array[i+1];
        //if the current value is greater than the previous number and the current value is greater than the next number 
        if(current > prev && current > next){
            console.log("CURRENT PEAK: ", current);
            let leftIncr = i;
            let rightIncr = i;
            //LEFT CHECK:
            while(array[leftIncr] > array[leftIncr-1]){
                console.log("L DESCENDING:", array[leftIncr]);
                leftIncr--;
                console.log("L INCR", leftIncr);
            }

            //RIGHT CHECK:
            while(array[rightIncr] > array[rightIncr+1]){
                console.log("R DESCENDING:", array[i+rightIncr]);
                rightIncr++;
            }
            currentPeak = rightIncr-leftIncr+1;
            if(maxPeak < currentPeak){
                maxPeak = currentPeak;
                currentPeak = 0;
            }
            //starting from the peak: 
            //left check:
            //if [peak-1] < [peak-2]
            //right check:
            //if [peak+1] < [peak+2]
        }
    }
    return maxPeak;
}


console.log(longestPeak(example3));

