const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GOOGLE_ID,
        pass: process.env.GOOGLE_PASS
    }
});

exports.test = (req, res) => {
    let mailOption = {
        from: process.env.GOOGLE_ID,
        to: req.body.toMail,
        subject:'내친소 TEST 메일 제목',
        text:'내친소 TEST 메일 내용'
    };

    transport.sendMail(mailOption, (error, info) => {
        if(error){
            console.log(error);
            res.json({result : 'error'})
        }
        else{
            console.log('success');
            res.json({result : 'success'})
        }
    })
};

exports.sendInviteMail = (req, res) => {
    const {fromName, toMail} = req.body;

    const link = process.env.HOME_URL;
    const subject = `${fromName}님이 내친소로 초대합니다!`;
    const html = '<h1>내친소로 초대합니다!</h1>'
               + `<p>${fromName}님이 내친소로 초대하셨습니다.</p><br><br><br>`
               + `<p><a href="${link}">여기를 눌러 함께하세요.</a></p>`

    let mailOption = {
        from: process.env.GOOGLE_ID,
        to: toMail,
        subject,
        html
    };

    transport.sendMail(mailOption, (error, info) => {
        if(error){
            console.log(error);
            res.json({result : 'error'})
        }
        else{
            console.log('success');
            res.json({result : 'success'})
        }
    })
}