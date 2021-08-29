import paperFull from "paper";
import { useEffect, useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // "use strict";
    const canvas = canvasRef.current;
    paperFull.setup(canvas);
    console.log(paperFull);

    function evalInContext() {
      eval(` 
            // this bu yerda paperFullga teng: this = paperFul
            const Point = this.Point;
            const Path = this.Path;

            var path;
                
            this.view.onMouseDown = function(event) {
             path = new Path({
                segments: [event.point],
                strokeColor: "black",
              });
            }
        
            this.view.onMouseDrag = function (event) {
            path.add(event.point);
            };
        `);
    }

    evalInContext.call(paperFull);

    // paperFull.view.draw();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
