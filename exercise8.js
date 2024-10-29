//Exercise 1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
delay(2000)  

//Exercise 2
function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        resolve(randomNum);
      }, 2000);
    });
    
  }

//Exercise 3
function processData(data) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Processing data:", data);
        resolve(data * 2);
      }, 1000);
    });
  }

  fetchData()
  .then(data => {
    console.log("Fetched data:", data);
    return processData(data);
  })
  .then(result => console.log("Final result:", result))

  
