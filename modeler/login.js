var con = require('./db_connection');

module.exports.login = (req,res)=>{

    const data = req.body; // data has the credentials

    const q = `select * from temp where mail = "${data.mail}" && password = "${data.password}"`;
    con.query(q, (err,rows,fields)=>{
        if(err) throw err;

        if(rows.length == 1) 
        {
            const sess = req.session;
            sess.mail = req.body.mail;
            console.log(sess.mail);
    
            res.send('valid');

        }
        else if(rows.length == 0)
        {
            res.send('invalid');

        }

    });

}