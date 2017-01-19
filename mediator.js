function Player(name) {
    this.points = 0;
    this.name = name;
}

Player.prototype.play = function() {
    this.points++;
    mediator.played();
};

var scoreboard = {
    element: document.getElementById('results'),

    update: function(score) {
        var i, msg = '';

        for (i in score) {
            console.log(i);

            if (score.hasOwnProperty(i)) {
                msg += '<p><strong>' + i + '</strong>: ';
                msg += score[i];
                msg += '</p>';
            }
        }

        this.element.innerHTML = msg;
    }
};

var mediator = {
    players: {},

    setup: function() {
        this.players.home = new Player('Home');
        this.players.guest = new Player('Guest');
    },

    played: function() {
        var score = {
            'Home': this.players.home.points,
            'Guest': this.players.guest.points,
        }

        scoreboard.update(score);
    },

    keypress: function(e) {
        console.log(1);
        e = e || window.event;

        if (e.which === 49) {
            mediator.players.home.play();
            return;
        }

        if (e.which === 48) {
            mediator.players.guest.play();
            return;
        }

    }
};

mediator.setup();
window.onkeypress = mediator.keypress;

setTimeout(function() {
    window.onkeypress = null;
    alert('Game Over')
}, 30000);








