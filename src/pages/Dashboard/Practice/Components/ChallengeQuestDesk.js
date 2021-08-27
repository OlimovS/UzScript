import { Card, Pagination } from "react-bootstrap";

function ChallengeQuestDesk({ challenge = {} }) {
  return (
    <div className="challenge__scrollable__content  d-sm-flex flex-column w-100">
      <div className="h-sm-100-50px container overflow-auto">
        <div className="p-1">
          <h3>{challenge.title}</h3>
          <p>{challenge.content}</p>
        </div>
        <div>
          {challenge?.examples.map((example, idx) => {
            return (
              <div key={idx} className="mb-2">
                <h6>Misol {idx + 1}</h6>
                <Card body className="challenge__quest__example bg-light">
                  <p className="p-0 m-0">
                    <strong>Berildi: </strong>
                    {example.input}
                  </p>
                  <p className="p-0 m-0">
                    <strong>Natija: </strong>
                    {example.output}
                  </p>
                  <p className="p-0 m-0">
                    <strong>Izoh: </strong>
                    {example.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className="challenge__bottom__navbar mb-2 mb-sm-0">
        <Pagination size="small" className="mb-0 d-flex justify-content-center">
          <Pagination.Prev />
          <div className="d-flex align-items-center justify-content-center px-3">
            <p className="m-0">1/2</p>
          </div>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
}

export default ChallengeQuestDesk;
