// Import javascript; static assets
import 'animate.css';
import './toolkit.js';
import Elm from './app.js';


function init (mnt, brains) {
// export default function (mnt, brains) {

  // Instantiate RiveScript interpreter and load the bot brain
  var bot = new RiveScript();
  bot.loadFile(brains, function (batch_num) {
    console.log("Bot brain #" + batch_num + " has finished loading");
    // Now replies must be sorted; this is a rivescript-js requirement
    bot.sortReplies();

    // Wire up the Elm app
    var app = Elm.Main.embed(mnt);
    // app.ports.to.subscribe(function(data) {
    //   console.log("We're asking the bot brain: (" + data[0] + ") " + data[1]);
    //   var reply = bot.reply(data[0], data[1]);
    //   console.log("  and the bot brain replied (" + data[0] + ") " + reply);
    //   app.ports.with.send([data[0], reply]);
    // });

    return {
      bot: bot,
      app: app
    };
  }, function (error) {
    console.log("Error when loading bot brain: " + error);

    return {
      bot: bot,
      app: undefined
    };
  });

}


(function(){
  var mnt = document.getElementById('app');
  init(mnt, ["rivescript/example.rive"]);
})();
