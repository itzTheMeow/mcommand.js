import { Command } from "./Command";
import Biomes from "./extras/Biomes";

export default class LocatebiomeCommand extends Command {
  constructor(biome: Biomes) {
    super("locatebiome", [biome]);
  }
}
