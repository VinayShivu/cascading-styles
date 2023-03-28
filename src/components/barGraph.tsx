import "../styles/barGraph.css";

const scores = [0, 10, 20, 30, 40, 50, 60, 70, 80];

const BarGraph = (props: any) => {
  const { data } = props;
  return (
    <div className="holder">
      <div className="yAxisContainer">
        <div className="scoreHolder">
          {scores.map((score, index) => {
            return (
              <div className="scores">
                <div>{index % 2 == 0 ? score : null}</div>
                <div
                  style={{
                    border: "1px solid gray",
                    width: `${index % 2 == 0 ? "15px" : "10px"}`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="yAxisBorder"></div>
      </div>
      <div
        className="graphHolder"
        style={{ marginTop: `${data.length > 8 ? "19px" : "-15px"}` }}
      >
        <div className="graphContainer">
          <div className="barsContainer">
            {data.map((grades: any) => {
              return (
                <div className="barsHolder">
                  <div
                    style={{
                      width: "15px",
                      height: `${
                        grades.twoPlusGradeBelow <= 80
                          ? grades.twoPlusGradeBelow * 5
                          : 400
                      }px`,
                      backgroundColor: "red",
                      marginLeft: "10px",
                    }}
                    title={grades.twoPlusGradeBelow.toString()}
                  ></div>
                  <div
                    style={{
                      width: "15px",
                      height: `${
                        grades.oneGradeBelow <= 80
                          ? grades.oneGradeBelow * 5
                          : 400
                      }px`,
                      backgroundColor: "#749995",
                      marginLeft: "10px",
                    }}
                    title={grades.oneGradeBelow.toString()}
                  ></div>
                  <div
                    style={{
                      width: "15px",
                      height: `${
                        grades.onGradeLevel <= 80
                          ? grades.onGradeLevel * 5
                          : 400
                      }px`,
                      backgroundColor: "#749995",
                      marginLeft: "10px",
                    }}
                    title={grades.onGradeLevel.toString()}
                  ></div>
                  <div
                    style={{
                      width: "15px",
                      height: `${
                        grades.aboveGradeLevel <= 80
                          ? grades.aboveGradeLevel * 5
                          : 400
                      }px`,
                      backgroundColor: "#749995",
                      marginLeft: "10px",
                    }}
                    title={grades.aboveGradeLevel.toString()}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="xAxisContainer">
          <div className="xAxisBorder"></div>
          <div className="gradeHolder">
            {data.map((name: any) => {
              return (
                <>
                  <div className="grades">{name.gradeName}</div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
