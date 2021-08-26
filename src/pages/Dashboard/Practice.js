import { Col, FloatingLabel, Form, Table } from "react-bootstrap";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Select from "react-select";

const challenges = [
  {
    id: 1,
    type: "challenge",
    title: "Ikki sonni bir biriga qo'shing",
    content: "Ikki sonni bir-biriga qo'shuvchi dastur tuzing",
    difficulty: "oson",
    status: false,
    acceptance: 96,
  },
  {
    id: 2,
    type: "challenge",
    title: "Ikki sonni ko'paytirish",
    content: "Ikki sonni bir-biriga ko'paytiruvchi dastur tuzing",
    difficulty: "oson",
    status: false,
    acceptance: 94,
  },
];

function Practice(props) {
  const { path, url } = useRouteMatch();
  console.log(`${path}/challenge/:taskID`);
  return (
    <div className="container mt-3">
      <h2 className="text-center mb-3">Solve Problems and Improve!</h2>
      <div>
        <Form>
          <div className="row">
            <div className="col-8 col-sm-4 mb-2 mb-sm-0">
              <Select
                options={[
                  { value: "challenges", label: "Masalalar" },
                  { value: "uitasks", label: "UI topshiriqlar" },
                ]}
              />
            </div>
            <div className="col-sm-8">
              <Form.Control type="text" placeholder="Normal text" />
            </div>
          </div>
        </Form>
      </div>
      <div className="mt-3">
        <Table bordered hover responsive="sm">
          <thead>
            <tr>
              <th>status</th>
              <th style={{ minWidth: 250 }}>Title</th>
              <th>Qabul qilinishi</th>
              <th>Qiyinligi</th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((quest) => (
              <tr key={quest.id} className="table__row">
                <td>{quest.status ? "+" : "-"}</td>
                <td className="cursor__pointer">
                  <Link to={`${url}/${quest.type}/${quest.id}`}>
                    {quest.id}.{quest.title}{" "}
                  </Link>
                </td>
                <td>{quest.acceptance}%</td>
                <td>{quest.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Practice;
