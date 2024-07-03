function add(a : number,b : number) : number {
  let result : number = a + b;
  return result;
}

type job = ["미남", "꽃미남"];

interface Truth {
  name : string;
  age : number;
  job : job[0]
}

function minam() : Truth {
  let obj : Truth = {
    name : "김정수",
    age : 29,
    job : "미남"
  };
  return obj;
}
