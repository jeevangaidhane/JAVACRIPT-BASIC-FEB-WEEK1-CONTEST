/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    arr.map(printThroughMap); //each Element Store in "printThroughMap" Variable
  
    function printThroughMap(arrItem) {
      if(arrItem.marks > 50){
      console.log(arrItem)
      }
    }
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(printThroughforEach);//each element store in "printThroughforEach" variable
  
    function printThroughforEach(arrItem){
      if(arrItem.marks > 50){
        console.log(arrItem)
      }
    }
  }
  
  function addData() {
    //Write your code here, just console.log
   // New Arr store in "newObj" Variable
    let newObj = {id:4,name:"susan",age:"20",marks:45} 
    arr.push(newObj);
    console.log(arr);
  
  }
  
  function removeFailedStudent() {
      //Write your code here
      let filteredFailedStudent = arr.filter(function (value) {
        //callback function
        if (value.marks  > 50) {
          //filtering criteria
          return value;
        }
        
      });
      console.log(filteredFailedStudent);
      
    }
    
  
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
      { id: 5, name: "Jeevan", age: "29", marks: 85 },
      { id: 6, name: "Kalyani", age: "27", marks: 69 },
      { id: 7, name: "Pallavi", age: "25", marks: 45 },
  
    ]
    let resultArray = arr.concat(arr2);
    console.log(resultArray)
  }
  