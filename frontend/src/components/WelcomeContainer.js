import BooksIcon from "./BooksIcon";
import "./WelcomeContainer.css";
const WelcomeContainer = () => {
  return (
    <div className="welcome">
      <div className="welcome-sara">
        <b>{`Welcome, `}</b>
        <i className="sara">{`Sara! `}</i>
      </div>
      <img className="welcome-child" alt="" src="/vector-726.svg" />
      <BooksIcon
        booksIconBooks="/books1.svg"
        booksIconPosition="absolute"
        booksIconWidth="17.76%"
        booksIconHeight="100%"
        booksIconTop="0%"
        booksIconRight="3.86%"
        booksIconBottom="0%"
        booksIconLeft="78.38%"
        booksIconMaxWidth="100%"
        booksIconOverflow="hidden"
        booksIconMaxHeight="100%"
      />
    </div>
  );
};

export default WelcomeContainer;
