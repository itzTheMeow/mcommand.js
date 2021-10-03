import { Command } from "./Command";
import Biomes from "./extras/Biomes";

export default class LocateBiomeCommand extends Command {
  constructor(biome: Biomes) {
    super("locatebiome", [biome]);
  }
}
