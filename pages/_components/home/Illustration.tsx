export function Illustration() {
  return (
    <>
      <style>{style}</style>
      <div className="head-plane">
        <div className="plane">
          <div className="square"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}

const style = `
  .head-plane {
    width: 360px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, #57a3f2, #3c86ec);
    border-radius: 16px;
    box-shadow: inset 2px 2px 7px rgba(255, 255, 255, 0.2),
      2px 2px 6px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .plane {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, #474a4a, #2b3131);
    width: 110px;
    height: 150px;
    border-radius: 16px;
    transform: rotate(0);
    box-shadow: inset 2px 2px 7px rgba(255, 255, 255, 0.2),
      2px 2px 6px rgba(0, 0, 0, 0.2);
    z-index: 7;
  }
  
  .square {
    background: linear-gradient(
      to bottom right,
      rgb(142, 189, 47),
      rgb(119, 161, 35)
    );
    width: 80px;
    height: 30px;
    z-index: 10;
    border-radius: 7px;
    box-shadow: inset 2px 2px 7px rgba(255, 255, 255, 0.2),
      2px 2px 6px rgba(0, 0, 0, 0.2);
  
    margin: 9px;
  }
  
  .line {
    background: linear-gradient(to bottom right, #ffffff, #b7b7b7);
    width: 80px;
    height: 5px;
    z-index: 10;
    border-radius: 16px;
    box-shadow: inset 2px 2px 7px rgba(255, 255, 255, 0.2),
      2px 2px 6px rgba(0, 0, 0, 0.2);
    margin: 5px;
  }
  `;
