const testVar = {}

function testFunc() {
  return "hi"
};


function superbowlWin(record){
let obj=record.find(record => record.result === "W");

if(obj === undefined)
{
  return obj
}

else{return obj.year}

}

