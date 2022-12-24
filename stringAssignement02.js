var stringHandsOn=function(str){
                                console.log("Q1." ,str);
                                console.log("Q2. String length:",str.length);
                                console.log("Q3. Removing the leading and training extra spaces:", str.trim(), "Now length is:",str.trim().length);
                                console.log("Q4. Count of removed extra spaces:", str.length- str.trim().length);
                                console.log("Q5. First character after trim:", str.trim().charAt(0));
                                console.log("Q6. Last character after trim:", str.trim().charAt(str.trim().length));
                                console.log("Q7. Index of 'good':", str.indexOf("good"));
                                console.log("Q8. Substring and Slice from index 22:", str.slice(0,22));
                                console.log("Q9. string ends with 'up': ");
}
stringHandsOn(`      " Hey you are doing good, keep it up! "    `);