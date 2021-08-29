// import paperFull from "paper";
import { useEffect, useRef } from "react";
import { CANVAS_ID } from "../../utils/constants";
// import { Mushuk } from "../../uzscript-engine/playground-engine";
import useScriptTag from "./useScriptTag";

const Canvas = ({ uzScriptCode, rerenderIndex, ...rest }) => {
  const runCode = useScriptTag();
  const canvasRef = useRef(null);

  useEffect(() => {
    // console.log("cliclinggg ", uzScriptCode);
    runCode({ value: `${uzScriptCode}`, rerenderIndex });
  }, [rerenderIndex]);

  return <canvas id={CANVAS_ID} ref={canvasRef} {...rest} />;
};

export default Canvas;

// paper.project.view.onMouseDown = function(event) {
//     console.log('inside onmouseDown');
//     path = new paper.Path({
//        segments: [event.point],
//        strokeColor: "black",
//      });
//    }

//    paper.project.view.onMouseDrag = function (event) {
//    path.add(event.point);
//    };
/*


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
*/
