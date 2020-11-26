const fizzBuzz = arr => {
  const result = [];
  const mappings = {
    3: 'Fizz',
    5: 'Buzz',
  };

  arr.forEach(val => {
    let ans = '';

    for (let key in mappings) {
      if (val % key === 0) {
        ans += mappings[key];
      }
    }

    if (!ans.length) {
      ans += val;
    }

    result.push(ans);
  });

  return result;
};

const tester1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(fizzBuzz(tester1));

// Basic one
// for(int i = 1; i<= n; i++){
//      if(i%15 == 0){
//          System.out.println("FizzBuzz");
//      } else if(i%3 == 0){
//          System.out.println("Fizz");
//      } else if(i%5 == 0){
//          System.out.println("Buzz");
//      } else {
//          System.out.println(i);
//      }
// }

// Cool one (java)
// public List<String> fizzBuzz(int n) {
//         List<String> ret = new ArrayList<String>(n);
//         for(int i=1,fizz=0,buzz=0;i<=n ;i++){
//             fizz++;
//             buzz++;
//             if(fizz==3 && buzz==5){
//                 ret.add("FizzBuzz");
//                 fizz=0;
//                 buzz=0;
//             }else if(fizz==3){
//                 ret.add("Fizz");
//                 fizz=0;
//             }else if(buzz==5){
//                 ret.add("Buzz");
//                 buzz=0;
//             }else{
//                 ret.add(String.valueOf(i));
//             }
//         }
//         return ret;
//     }
