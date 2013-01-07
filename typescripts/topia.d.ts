
declare function Repeat():void;
declare function Stop():void;

declare function Include(library_name:string);

// Say
declare function UseAction(action:string, said:string):void;
// Build
declare function UseAction(action:string, what:ToBuild):void;
// Chop
declare function UseAction(action:string, tree:Entity):void;
// Craft
declare function UseAction(action:string, craftCommand:CraftCommand):void;
// Drop
declare function UseAction(action:string,
                           dropCommand: {
                              slot:number;
                              destination:Location;
                           }):void;
// Get
declare function UseAction(action:string, what:Entity);
// Move
declare function UseAction(action:string, where:number);

interface CraftCommand {
  name: string;
  components: CraftComponent[];
}

interface CraftComponent {
  slot: number;
  name: string; // The name of the part of the final item
                // that this is contributing towards.
}

interface Location {
  x: number;
  y: number;
}

interface ToBuild {
  name:string;
  destination: Location;
}

interface Entity extends Location {
  name: string;
  id: string;
  isactor?: bool;
  isobject?: bool; // can be picked up?
  tree?: bool; // tree resource?
  obstacle?: bool; // impassible?
  durability?: number; // current health
  maxdurability?: number; // max health
}

interface Actor extends Entity {
  race: string;
}

interface Self extends Actor {
  inventoryslots: number;
  inventory: Item[];
  influence: number;
  property: any[];
  recipes: Recipe[];
}

interface Recipe {
  name: string;
  type: string;
  components: {
    name: string;
    allows: string[];
  }[];
}

interface EntityQuery {
  name?: string;
  isobject?: bool;
  tree?: bool;
}

interface Item {
  name: string;
  itemtype : string;
  slot: number;
  isobject: bool;
  equip?: number;
}

interface Parameters extends Location {
  startX: number;
  startY: number;
  targetId: string;
}

interface Power {
  Invoke(target:Entity, name:string, causeEffect:(effect:Effect)=>void):void;
}

interface Effect {
  FX(causeFX:(fx:FX)=>void):void;
  duration: number;
}

interface FX extends Location {
  animation:string;
  sound: string;
}

declare function Find(obj:EntityQuery):Entity[];
declare function FindOne(obj:EntityQuery):Entity;
declare function FindClosest(obj:EntityQuery):Entity;
declare function IsAdjacent(obj:Entity, to:Entity):bool;

declare function GetHeldItem(holder:Entity):Item;
declare function GetItemByName(holder:Entity, name:string):Item;

declare function GetDirection(target1:Location, target2:Location):String;
declare function Distance(target1:Location, target2:Location):number;

declare function WithinProperty(owner:Entity, object:Location):bool;

declare function UsePower(powerFunc:(power:Power)=>void):void;

declare var Me : Self;
declare var parameters : Parameters;

// Doesn't work well with objects, so I'm not defining this with :any
declare function Log(msg:string);
declare function Log(msg:number);
