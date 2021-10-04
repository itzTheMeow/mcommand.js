// https://minecraft.fandom.com/wiki/Attribute
type Attributes =
  | "generic.max_health"
  | "generic.follow_range"
  | "generic.knockback_resistance"
  | "generic.movement_speed"
  | "generic.attack_damage"
  | "generic.armor"
  | "generic.armor_toughness"
  | "generic.attack_knockback"
  // Players
  | "generic.attack_speed"
  | "generic.luck"
  // Horses
  | "horse.jump_strength"
  // Bees & Parrots
  | "generic.flying_speed"
  // Zombies
  | "zombie.spawn_reinforcements";
export default Attributes;
