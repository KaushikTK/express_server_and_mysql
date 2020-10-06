var con = require('./db_connection');

module.exports.get_info = (req,res) => {
    const s = req.session;
    const mail = s.mail;

    //let code = '';

    const q = `select * from temp where mail = "${mail}"`;
    con.query(q,(err,rows,fields)=>{
        info = rows[0];
        const code = `<table class="table"><tr><th>Email:</th><td>${info.mail}</td></tr> <tr><th>Name:</th><td>${info.name}</td></tr> <tr><th>Contact:</th><td>${info.contact}</td></tr> <tr><th>Password:</th><td>${info.password}</td></tr>`;

        res.send(code);
    });

}