/**
 * Created by Ricardo on 09/02/2017.
 */


var fs = require("fs");
var async = require("async");

var paths = require('./../paths');
var general_operations = require('./general_operations');

var cron = require('cron');

const opn = require('opn');

const base_url = 'https://www.youtube.com/watch?v=';

//var cronJob = cron.job("*/2 * * * * *", function () {
var cronJob = cron.job("* * * * * *", function () {

    var seconds = new Date() / 1000;

    if (seconds > paths.startTime + paths.duration) {
        var filesPath = [paths.contests_path];

        async.map(filesPath, function (filePath, cb) { //reading files or dir
            fs.readFile(filePath, 'utf8', cb);
        }, function (err, results) {

            var contests = JSON.parse(results[0]);
            var current_contest = contests[contests.length - 1];

            if (current_contest.songs.length > 0) {

                console.log("cronner: contest finished");

                var maxScore = 0;
                var topScorer = 0;

                for (var i = 0; i < current_contest.songs.length; i++) {
                    if (maxScore < current_contest.songs[i].score.length) {
                        topScorer = i;
                        maxScore = current_contest.songs[i].score.length;
                    }
                }

                console.log("cronner: chosen song -> " + current_contest.songs[topScorer].videoId);

                paths.last_winner = current_contest.songs[topScorer];

                contests.push({
                    id: current_contest.id + 1,
                    songs: []
                });

                fs.writeFile(paths.contests_path, JSON.stringify(contests), function (err) {
                    if (err != null) {
                        console.error(err)
                    }
                });

                opn(base_url + current_contest.songs[topScorer].videoId);

                paths.startTime = new Date() / 1000;
                paths.duration = current_contest.songs[topScorer].duration + 5;

            }

        });
    }


    // perform operation e.g. GET request http.get() etc.
    //console.info('cron job completed');
});


//one of - running at start
cronJob.start();
//startRefresh();



