
exports.test = (req, res) => {
    //
    res.send('Hello World')
}


exports.createtestdata = (req, res) =>{
    //Энэ хэсэгт шинээр нэмэх үйлдэл хийгдэнэ 
    res.send('Success');
}

exports.update = (req, res) =>{
    //Энэ хэсэгт засах үйлдэл хийгдэнэ 
    res.send('Success');
}



exports.delete = (req, res) =>{
    //Энэ хэсэгт устгах үйлдэл хийгдэнэ 
    res.send('Success');
}
