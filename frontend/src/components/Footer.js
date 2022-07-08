import { Navbar, Nav } from "react-bootstrap";
import "./nav.css";

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className=" justify-content-center">
          <p style={{ color: "rgb(88, 198, 1)" }}> &copy; Hullaghan 2022 </p>
      </Navbar>
    </>
  );
};

export default Footer;
