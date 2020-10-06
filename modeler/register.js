var con = require('./db_connection');

module.exports.register = (req,res) => {
    let data = req.body;
    const q = "select name from temp where mail='" + data.mail + "'";
    con.query(q,(err,rows,fields)=>{
        if(err) throw err;
    
        // check if mail already present
        if(rows.length == 0)
        {
            // insert into the table
            let command = `insert into temp values ('${data.mail}','${data.name}','${data.phno}','${data.password}')`;
            // console.log(command);
            con.query(command,(err,result)=>{
                if(err) throw err;
                if(result) res.send('registered');
            });
        }
        else{
            res.send('already_present');
        }

    });
}


