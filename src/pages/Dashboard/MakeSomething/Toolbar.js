import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AiFillCaretRight, AiFillFlag } from "react-icons/ai";
import { BsCodeSlash, BsX } from "react-icons/bs";
import Select from "react-select";
import { playgroundExamples } from "../../../utils/data/playgroundExamples";

export function PlaygroundToolbar(props) {
  return (
    <div>
      <div className="d-flex justify-content-center py-1 px-3">
        <div
          className="cursor__pointer p-1 run__icon__div"
          id="playgroundRunID"
        >
          <AiFillFlag size="30" color="#05a805" />
        </div>
      </div>
    </div>
  );
}

export function EditorToolbar({
  handleClickRunBtn,
  handleChangeExample,
  selectedExample,
}) {
  const [open, setOpen] = useState(false);

  const handleModalVisibility = () => {
    setOpen((prev) => !prev);
  };

  const handleCodeExampleChange = (example) => {
    handleChangeExample(example.value);
  };
  return (
    <div className="d-flex py-1 px-3">
      <div className="d-flex align-items-center">
        <div className="run__icon__div cursor__pointer p-1">
          <BsCodeSlash
            size="30"
            color="darkblue"
            onClick={handleModalVisibility}
          />
        </div>

        <h6 className="mb-0 pl-2">Oyingoh kodlarini sinab koring! </h6>
      </div>
      <div
        className="cursor__pointer p-1 run__icon__div ml-auto"
        onClick={handleClickRunBtn}
      >
        <AiFillCaretRight size="30" color="#05a805" />
      </div>
      <Modal show={open} onHide={handleModalVisibility}>
        <Modal.Header>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <Modal.Title>Oyingoh kodlarini sinab koring!</Modal.Title>
            <BsX size="30" onClick={handleModalVisibility} />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Select
              options={[
                ...playgroundExamples.map((el) => ({
                  value: el.id,
                  label: `${el.id} - O'yingoh kodi`,
                })),
              ]}
              onChange={handleCodeExampleChange}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
