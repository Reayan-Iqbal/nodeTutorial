const {readFile, writeFile} = require('fs')  

readFile('./content/first.txt','utf8', (err, result) => {   // here specifying encoding type is compulsary as there is no default value
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt','utf8', (err, result) => {   // here specifying encoding type is compulsary as there is no default value
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/fourth.txt', `Here is the result ${first}, ${second}\n`, {flag: 'a'}, (err,result) => {
            if(err){
                console.log(err)
                return;
            }
            console.log(result);
        })
    })
})