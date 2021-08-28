import { Spinner, Alert, Card } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";

import {
  ERROR_OCCURED,
  TEST_FAILED,
  TEST_SUCCESS,
} from "../../../../utils/constants";

function ShowCodeRunResponse({ response, status, handleCloseResponseShow }) {
  console.log("came", response);

  if (status === "pending") {
    return "";
  }

  return (
    <div className="challenge__code__response__show d-block mb-2">
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
          <div className="container">
            <ShowResponseMessage response={response} />
          </div>
        </>
      )}
    </div>
  );
}

function ShowResponseMessage({ response }) {
  let contentToShow = "";
  switch (response.status) {
    case TEST_SUCCESS:
      contentToShow = (
        <div>
          <h6 className="text-success">Muvaffaqiyatli bajarildi</h6>
          <Alert variant="success">Barcha testlardan o'tdi.</Alert>
        </div>
      );
      break;
    case TEST_FAILED:
      contentToShow = (
        <div>
          <h6 className="text-warning">To'liq bajarilmadi</h6>
          <p className="text-secondary">
            {response.index} / {response.allCases} testdan o'ta olmadi.
          </p>
          <div className="">
            <Card.Body className="bg-light mb-1 p-3">
              <div className="d-flex">
                <div className="mr-3">
                  <p className="mb-0">
                    <strong>Berildi:</strong>
                  </p>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0">{response?.inputs?.join(", ")}</p>
                </div>
              </div>
            </Card.Body>
            <Card.Body className="bg-light p-3">
              <div className="d-flex">
                <div className="mr-3">
                  <p className="mb-0">
                    <strong>Kutilgan natija:</strong>
                  </p>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0">{response?.output}</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="mr-3">
                  <p className="mb-0">
                    <strong>Sizning natijangiz:</strong>
                  </p>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0 text-warning">
                    {response?.yourOutput === undefined
                      ? "undefined"
                      : response?.yourOutput}
                  </p>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      );
      break;
    case ERROR_OCCURED:
      contentToShow = (
        <div>
          <h6 className="text-danger">Runtime Error</h6>
          <Alert variant="secondary">
            <p>
              <strong>{response.name}</strong>
            </p>
            <p>{response.message}</p>
          </Alert>
        </div>
      );
      break;
    default:
      contentToShow = "";
      break;
  }

  return contentToShow;
}

export default ShowCodeRunResponse;

// console.log({ err });
// if (err.status === ERROR_OCCURED) {
//   console.log("Error OCcured while doing", err.message);
// } else if (err.status === TEST_FAILED) {
//   console.log("Test failed in ", err.index, err.allCases);
// }
