function superbowlWin(records){
    let found = records.find(function(record){
        return record.result === 'W'
    })
    console.log(found)
    if(found){
        return found.year
    }
}
    // for(let record of records){
    //     if(record.result === 'W'){  
    //         return record.year     
    //         console.log('record', record.result)}
    // }