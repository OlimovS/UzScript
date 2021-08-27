import { Spinner } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";

import { ERROR_OCCURED, TEST_FAILED } from "../../../../utils/constants";

function ShowCodeRunResponse({ response, status, handleCloseResponseShow }) {
  if (status === "pending") {
    return "";
  }

  return (
    <div className="challenge__code__response__show d-block">
      {status === "loading" ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-end">
            <div className="cursor__pointer" onClick={handleCloseResponseShow}>
              <AiOutlineDown size="25" />
            </div>
          </div>
          <div>
            <h1>lorem ipsum</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default ShowCodeRunResponse;

// console.log({ err });
// if (err.status === ERROR_OCCURED) {
//   console.log("Error OCcured while doing", err.message);
// } else if (err.status === TEST_FAILED) {
//   console.log("Test failed in ", err.index, err.allCases);
// }
