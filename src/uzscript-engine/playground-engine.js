import paperFull from "paper";
import { Item, Point, Raster } from "paper/dist/paper-core";
// import { Point, Raster } from "paper/dist/paper-core";

class Narsa extends Item {
  qadamTashlaXY() {
    console.log("this.position", this);
    // this.self.position = [0, 0];
    // if (Array.isArray(arguments[0])) {
    //   return new paperFull.Point(
    //     this.self.position.x + arguments[0][0],
    //     this.self.position.y + arguments[0][1]
    //   );
    // } else if (typeof arguments[0] === "object") {
    //   return new paperFull.Point(
    //     this.self.position.x + arguments[0].x,
    //     this.self.position.y + arguments[0].y
    //   );
    // }
  }
}

export class Mushuk extends paperFull.Raster {
  constructor(props) {
    super("/static/cat.svg");
    console.log(this);
  }

  joyniOrnat(joy) {
    this.position = joy;
  }

  qadamTashla() {
    this.position += new Point(10, 10);
    console.log(this);
  }
}
