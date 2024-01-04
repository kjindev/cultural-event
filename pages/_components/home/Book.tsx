// import "../_style/css/book.css";

import { ReactNode } from "react";

interface DataType {
  width: number;
  height: number;
  color: string;
  children: ReactNode;
  className?: string;
}
export default function Book({
  width,
  height,
  color,
  children,
  className,
}: DataType) {
  return (
    <div className={className}>
      <style>{style}</style>
      <div id="container">
        <div className="book">
          <div className="bookCover">
            <div className="binder"></div>
            <div className="content">
              <div className="title">{children}</div>
            </div>
          </div>
          <div className="bookSide"></div>
          <div className="bookBack"></div>
        </div>
      </div>
    </div>
  );
}

const style = `
#container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.book {
  display: flex;
  align-items: center;
  position: relative;
  width: 210px; 
  height: 240px; 
  border-radius: 6px; 

  .bookCover {
    z-index: 10;
    background-color: #e5e7eb; /* 책 색깔 */
    border-radius: inherit;
    box-shadow: inset -2px -2px 8px rgba(0, 0, 0, 0.03);
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    transform: perspective(300px) rotateY(0deg);

    .binder {
      width: 15%; 
      box-shadow: inset -2px -2px 5px rgba(0, 0, 0, 0.03);
      border-top-left-radius: 6px; 
      border-bottom-left-radius: 6px;
    }

    .content {
      width: 85%;
      padding: 36px;
      display: flex;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
      flex-direction: column;
      align-items: center;
      
      .title {
        font-weight: 600;
        margin-bottom: 3px;
      }
    }
  }

  .bookSide {
    z-index: 5;
    position: absolute;
    right: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    box-shadow: inset 4px 0 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 20px;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    transform: perspective(300px) rotateY(90deg) translateX(20px);
  }

  .bookBack {
    position: absolute;
    right: 0;
    background-color: #e5e7eb; /* 책 색깔 */
    border-radius: inherit;
    width: 80%;
    padding-left: 20px;
    height: calc(100% - 10px);
    transition: transform 0.5s ease-in-out;
    transform: perspective(300px) rotateY(0deg);
  }
}

.book:hover {
  cursor: pointer;

  .bookCover {
    transition: transform 0.5s ease-in-out;
    transform: perspective(300px) rotateY(-5deg);
  }
  .bookSide {
    animation: transform 0.5s ease-in-out;
    transform: perspective(300px) rotateY(30deg) translateX(20px);
  }
  .bookBack {
    transition: transform 0.5s ease-in-out;
    transform: perspective(300px) rotateY(-5deg) translateX(20px);
  }
}`;
