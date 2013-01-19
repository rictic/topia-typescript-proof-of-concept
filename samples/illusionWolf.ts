// Wolf Illusion Spell

UsePower(function(power) {
    var target = Me; // 'Me' is the only valid target for illusion

    power.Invoke(target, "illusion", function(effect) { // Requires illusion skill

        if (Me.race != "wolf") {
            effect.duration = 10; // Requires 10 stamina, lasts 10 seconds
            target.race = "wolf"; // Requires 1 wolf figurine
        }

        effect.FX(function(fx) {
            fx.animation = "smoke";
            fx.x = target.x;
            fx.y = target.y;
        });
    });
});
