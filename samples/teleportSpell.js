var x = parameters.x;
var y = parameters.y;
var startX = parameters.startX;
var startY = parameters.startY;
var targetId = parameters.targetId;
UsePower(function (power) {
    var target = FindOne({
        id: targetId,
        structure: {
            $exists: false
        }
    });
    power.Invoke(target, "Teleport", function (effect) {
        target.x = x;
        target.y = y;
        effect.FX(function (fx) {
            fx.animation = "sparkle";
            fx.x = x;
            fx.y = y;
        });
        effect.FX(function (fx) {
            fx.animation = "sparkle";
            fx.x = startX;
            fx.y = startY;
        });
        effect.FX(function (fx) {
            fx.sound = "teleport";
            fx.x = x;
            fx.y = y;
            if(Me.id == targetId) {
                fx.x = startX;
                fx.y = startY;
            }
        });
    });
});
