import { Command } from "./Command";
import CommandOptional from "./CommandOptional";

type WArg1 = "clear" | "rain" | "thunder";

export default class WeatherCommand extends Command {
  constructor(action: WArg1, time?: number) {
    super("weather", [action, ...CommandOptional(time)]);
  }
}
