var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){

    projects["min"] = false;
    $.('#likeBtn').click(clickedLike);
    res.render('index', projects);

};

exports.viewMin = function(req, res){

    projects["min"] = true;
    $.('#likeCtr').click(clickedLike);
    res.render('index', projects);
};

function clickedLike (){
  ga("send", "event", 'like', 'click');
}