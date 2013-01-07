Repeat();
UseAction("Say", "My name is " + Me.name);

Stop();

// Returns an array of all items that can be picked up.
var items = Find({ isobject: true });

// Returns the first matching object.
var branch = FindOne({ name: "Branch" });

// Returns the closest object matching the criteria.
var tree = FindClosest({ tree: true });

UseAction("Build", { name: "Dirt Road", destination: { x: Me.x + 32, y: Me.y } });

UseAction("Build", { name: "Delete", destination: { x: Me.x, y: Me.y } });

var x = parameters.x;
var y = parameters.y;
UseAction("Build", { name: "Wood Wall", destination: { x: x, y: y } });


Include("Functions");

var item = GetHeldItem(Me);

if( !item || item.itemtype != "axe" ) {
  UseAction("Say", "I don't have an axe!");
}

Repeat();

tree = FindClosest({ tree: true });

// Did we find a tree next to us?
if( tree && IsAdjacent(Me, tree)) {
  UseAction("Chop", tree);
}

var stone = GetItemByName(Me, "Stone");
var branchItem = GetItemByName(Me, "Branch");

if( stone && branch ) {
  UseAction("Craft", { name: "Axe", components: [{slot: stone.slot, name: "Head"}, {slot: branchItem.slot, name: "Haft"}] });
}


var rune = GetItemByName(Me, "Teleport Rune");

if( rune ) {
  UseAction("Drop", { slot: rune.slot, destination: { x: Me.x, y: Me.y } });
}

var closestItem = FindClosest({ isobject: true });

if( closestItem && IsAdjacent(Me, closestItem)) {
  UseAction("Get", closestItem);
}

Include("Physics");

var target1 = branch;
var target2 = tree;

// Returns the direction that 'target2' is from 'target1' as a string "North", "East", "South", or "West"
var direction = GetDirection(target1, target2);

// Returns true if target1 is next to target2. Diagonals do not count.
var isAdjacent = IsAdjacent(target1, target2);

// Gets the distance between two entities (number of pixels/coordinates).
var distance = Distance(target1, target2);

Include("PropertyFunctions");

// Returns true if target2 is on property owned by target1.
var isOnProperty = WithinProperty(target1, target2);

