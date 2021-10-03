import Blocks from "./extras/Blocks";
import Colors from "./extras/Colors";
import EffectList from "./extras/EffectList";
import Entities from "./extras/Entities";
import Items from "./extras/Items";

// https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags

type ByteBoolean = "0b" | "1b";
type NumberBoolean = 0 | 1;

export interface EffectNBT {
  Id: EffectList;
  Duration: number;
  Amplifier: number;
  Ambient?: boolean;
  ShowParticles?: boolean;
  ShowIcon?: boolean;
}

export interface BlockNBT {
  CustomName?: string;
  Lock?: string;
  // Command Block
  Command?: string;
  // Beacon
  Primary?: EffectList;
  Secondary?: EffectList;
  Levels?: number;
  // Spawner
  SpawnData?: EntityNBT;
  SpawnCount?: number;
  SpawnRange?: number;
  RequiredPlayerRange?: number;
  Delay?: number;
  MinSpawnDelay?: number;
  MaxSpawnDelay?: number;
  MaxNearbyEntities?: number;
  SpawnPotentials?: { Type: Entities; Weight: number; Properties: EntityNBT }[];
  Weight?: number;
  // Light Block
  level?: number;
  waterlogged?: boolean;
  // Lightning Rod
  powered?: boolean;
  facing?: "east" | "south" | "north" | "west";
}

export interface EntityNBT {
  TileEntityData?: any;
  Motion?: [number, number, number];
  direction?: [number, number, number];
  power?: [number, number, number];
  ActiveEffects?: EffectNBT[];
  rewardExp?: boolean;
  Passengers?: EntityNBT[];
  ArmorItems?: { Count: number; id: Items }[];
  HandItems?: { Count: number; id: Items }[];
  HandDropChances?: [string, string];
  ArmorDropChances?: [string, string];
  NoAi?: ByteBoolean;
  NoGravity?: ByteBoolean;
  Silent?: ByteBoolean;
  Fire?: number;
  Invulnerable?: 1;
  Attributes?: any[];
  Health?: number;
  Anger?: number;
  CustomName?: TextNBT;
  CustomNameVisible?: ByteBoolean;
  PersistenceRequired?: boolean | NumberBoolean;
  Type?: number;
  Saddle?: NumberBoolean | boolean;
  Tame?: NumberBoolean | boolean;
  Variant?: number;
  Size?: number;
  BlockState?: { Name: Blocks };
  Time?: number;
  DropItem?: NumberBoolean;
  id?: Entities;
  Fuse?: number;
  ExplosionPower?: number;
  ExplosionRadius?: number;
  powered?: NumberBoolean;
  AttachFace?: "0b" | "1b" | "2b" | "3b" | "4b" | "5b";
  Peek?: number;
  APX?: any;
  APY?: any;
  APZ?: any;
  Profession?: 0 | 1 | 2 | 3 | 4 | 5;
  Facing?: 0 | 1 | 2 | 3 | 4 | 5;
  ItemRotation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  Item?: { id: Items; Count: number };
  Invisible?: ByteBoolean;
  Fixed?: ByteBoolean;
  ShowArms?: ByteBoolean;
  NoBasePlate?: ByteBoolean;
  Small?: ByteBoolean;
  Rotation?: ByteBoolean;
  Marker?: ByteBoolean;
  Pose?: {
    Head?: [string, string, string];
    Body?: [string, string, string];
    LeftArm?: [string, string, string];
    RightArm?: [string, string, string];
    LeftLeg?: [string, string, string];
    RightLeg?: [string, string, string];
  };
  HomePosX?: number;
  HomePosY?: number;
  HomePosZ?: number;
  TravelPosX?: number;
  TravelPosY?: number;
  TravelPosZ?: number;
  HasEgg?: ByteBoolean;
}

// https://minecraft.fandom.com/wiki/Raw_JSON_text_format
export interface TextNBT {
  text: string;
  extra?: any;
  color?: Colors;
  bold?: boolean;
  italic?: boolean;
  underlined?: boolean;
  strikethrough?: boolean;
  obfuscated?: boolean;
  insertion?: string;
  clickEvent?: {
    action:
      | "open_url"
      | "open_file"
      | "run_command"
      | "suggest_command"
      | "change_page"
      | "copy_to_clipboard";
    value: string;
  };
  hoverEvent?: {
    action: "show_text" | "show_item" | "show_entity";
    contents:
      | TextNBT
      | { id: Items; count?: number; tag?: any }
      | { name?: TextNBT; type: Entities; id: string };
  };
}

type NBT = EffectNBT | BlockNBT | EntityNBT | TextNBT;

export class NBTBuilder {
  constructor(public NBT: NBT) {}

  toString(useQuotes: boolean = false) {
    function strgfy(obj: any) {
      let newNBT: string[] = [];
      Object.keys(obj).forEach((k, ki) => {
        let val = Object.values(obj)[ki];
        if (Array.isArray(val))
          val = `[${val
            .map((v) => {
              if (typeof v == "object") v = strgfy(v);
              return v;
            })
            .join(",")}]`;
        else if (val as TextNBT)
          val =
            (typeof val == "number" ? "" : useQuotes ? '"' : "'") +
            (typeof val == "object" ? JSON.stringify(val) : String(val)).replace(/'/g, "\\'") +
            (typeof val == "number" ? "" : useQuotes ? '"' : "'");
        else if (typeof val == "object") val = strgfy(val);
        if (useQuotes) newNBT.push(`"${k}":${val}`);
        else newNBT.push(`${k}:${val}`);
      });
      return `{${newNBT.join(",")}}`;
    }

    return strgfy(this.NBT);
  }
}
