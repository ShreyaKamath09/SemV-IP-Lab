function addNumbers(){
    let n=0;
    return{
    next: function(){
        n += 10;
        return {value:n,  done:false};
    }
};
}
const nIterators = addNumbers();
for(let i=0; i<5; i++){
    const answer =nIterators.next();
    console.log(answer.value);
}
