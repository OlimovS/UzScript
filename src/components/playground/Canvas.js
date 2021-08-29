import paperFull from "paper";
import { useEffect, useRef } from "react";
import { Mushuk } from "../../uzscript-engine/playground-engine";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // "use strict";
    const canvas = canvasRef.current;
    paperFull.setup(canvas);
    paperFull.Mushuk = Mushuk;
    console.log(paperFull);

    function evalInContext() {
      eval(` 
            // this bu yerda paperFullga teng: this = paperFul
            const Point = this.Point;
            const Path = this.Path;
            const Raster = this.Raster;
            const view = this.view;

            const Mushuk = this.Mushuk;

            const runBtn = document.getElementById('playgroundRunID');

            var path;



            const mushuk = new Mushuk();
            mushuk.joyniOrnat(view.center);
            // runBtn.addEventListener('click', function() {
            //     console.log('clicking')
            //     mushuk.qadamTashla();
            // });



            
            // mushuk.qadamTashlaX(10);

            // console.log(view.center)
              
                
            // this.view.onMouseDown = function(event) {
            //  path = new Path({
            //     segments: [event.point],
            //     strokeColor: "black",
            //   });
            // }
        
            // this.view.onMouseDrag = function (event) {
            // path.add(event.point);
            // };
        `);
    }

    evalInContext.call(paperFull);

    // paperFull.view.draw();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
