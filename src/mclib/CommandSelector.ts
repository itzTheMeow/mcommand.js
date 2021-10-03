import Blocks from "./extras/Blocks";
import Entities from "./extras/Entities";
import Gamemodes from "./extras/Gamemodes";

// https://minecraft.fandom.com/wiki/Target_selectors
type EntitySelectors = "a" | "r" | "p" | "s" | "e";
type EntityDetectors = {
  x?: number;
  y?: number;
  z?: number;
  distance?: number | string;
  dx?: number;
  dy?: number;
  dz?: number;
  scores?: any;
  tag?: any;
  team?: string;
  limit?: number;
  sort?: "nearest" | "furthest" | "random" | "arbitrary";
  level?: number | string;
  gamemode?: Gamemodes;
  name?: string;
  x_rotation?: number | string;
  y_rotation?: number | string;
  type?: Entities | "player";
  typeNot?: (Entities | "player")[];
  nbt?: any;
  advancements?: any;
  predicate?: any;
};

export class CommandEntitySelector {
  constructor(public select: EntitySelectors, public detectors?: EntityDetectors) {}

  toString() {
    if (!this.detectors) return `@${this.select}`;
    else {
      let dets: string[] = [];
      let detectors = this.detectors;
      if (detectors.typeNot) {
        //@ts-ignore
        if (!detectors.type) detectors.type = "";
        detectors.type += (detectors.type ? ",type=!" : "!") + detectors.typeNot.join(",type=!");
        delete detectors.typeNot;
      }
      Object.keys(this.detectors).forEach((k, ki) => {
        dets.push(`${k}=${Object.values(detectors)[ki]}`); // weird workaround
      });
      return `@${this.select}[${dets.join(",")}]`;
    }
  }
}

// look them up yourself im not converting them to types
// https://minecraft.fandom.com/wiki/Block_states
export class CommandBlockState {
  constructor(public states: { [key: string]: string }) {}

  toString() {
    let sts: string[] = [];
    Object.keys(this.states).forEach((k, ki) => {
      sts.push(`${k}=${Object.values(this.states)[ki]}`); // weird workaround
    });
    return `[${sts.join(",")}]`;
  }
}

export class CommandUserSelector {
  constructor(public users: string[] | string) {}

  toString() {
    if (typeof this.users == "string") return this.users;
    else return this.users.join(" ");
  }
}
