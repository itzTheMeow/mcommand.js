export default class CommandPosition {
  constructor(
    public x: number = 0,
    public y: number | null = null,
    public z: number = 0,
    public relative: [boolean, boolean, boolean] = [false, false, false]
  ) {}

  toString() {
    let x = this.relative[0] ? (this.x == 0 ? "~" : `~${this.x}`) : this.x;
    let y = this.relative[1] ? (this.y == 0 ? "~" : `~${this.y}`) : this.y;
    let z = this.relative[2] ? (this.z == 0 ? "~" : `~${this.z}`) : this.z;
    return `${x}${this.y == null ? " " : ` ${y} `}${z}`;
  }
}
