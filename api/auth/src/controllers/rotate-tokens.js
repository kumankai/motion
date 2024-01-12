const schedule = require('node-schedule');

const rotate = (cron) => {
    schedule.scheduleJob(cron, () =>{
        // Write function to rewrite refreshTokens for every logged in user
    })
}

module.exports = rotate;