import { useMemo } from "react";
import "./BooksIcon.css";
const BooksIcon = ({
  booksIconBooks,
  booksIconPosition,
  booksIconWidth,
  booksIconHeight,
  booksIconTop,
  booksIconRight,
  booksIconBottom,
  booksIconLeft,
  booksIconMaxWidth,
  booksIconOverflow,
  booksIconMaxHeight,
}) => {
  const booksIconStyle = useMemo(() => {
    return {
      position: booksIconPosition,
      width: booksIconWidth,
      height: booksIconHeight,
      top: booksIconTop,
      right: booksIconRight,
      bottom: booksIconBottom,
      left: booksIconLeft,
      maxWidth: booksIconMaxWidth,
      overflow: booksIconOverflow,
      maxHeight: booksIconMaxHeight,
    };
  }, [
    booksIconPosition,
    booksIconWidth,
    booksIconHeight,
    booksIconTop,
    booksIconRight,
    booksIconBottom,
    booksIconLeft,
    booksIconMaxWidth,
    booksIconOverflow,
    booksIconMaxHeight,
  ]);

  return (
    <img
      className="books-icon"
      alt=""
      src={booksIconBooks}
      style={booksIconStyle}
    />
  );
};

export default BooksIcon;
