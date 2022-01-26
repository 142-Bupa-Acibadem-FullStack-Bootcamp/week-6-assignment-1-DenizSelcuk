// - **Test 1:**
// Input: nums = [2,7,11,15], target = 9\
// Output: [0,1]\
// Output: Çünkü nums[0] + nums[1] == 9,  return [0, 1].
// - **Test 2:**
// Input: nums = [3,2,4], target = 6\
// Output: [1,2]
// - **Test 3:**
// Input: nums = [3,3], target = 6\
// Output: [0,1]

console.log("Toplamı, hedefe eşit olan ikililer. ")

const myArray= [2,7,11,15,3,6];
const myTarget=9;

function write(nums,targets){
    const couple= [];
    //var couple = [{key:"key", value:"value"}];
    for(let i=0; i<=nums.length-1;i++){
        for(let a=i; a<=nums.length-1;a++){
            if(i!==a){
                if(nums[a]+nums[i]===targets){
                    //couple.push(i); 
                    //couple.push(a);
                    couple.push({
                        first_index:   i,
                        second_index: a
                    })//birden fazla ikili olması ihtimaline karşılık ikililer dictionary olarak yazdırıyorum.
                }
            }
        }
        //nums.shift();
    }
    console.log(couple);
}

write(myArray,myTarget);

