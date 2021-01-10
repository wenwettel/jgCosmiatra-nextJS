import Image from "next/image";
import styled from "styled-components";

const Menu = styled.nav`
  .principal {
    display: flex;
    align-items: center;
    background-color: gainsboro;
    width: 100%;
    padding: 5px 10px;
  }

  .principal:hover {
    cursor: pointer;
  }

  .principal li {
    display: flex;
    position: relative;

    list-style: none;
    margin-right: 20px;
    font-weight: 300;
  }

  .principal li ul {
    display: none;
    position: absolute;
    top: 100%;
    padding: 0;
  }

  .principal li ul li {
    padding: 10px 0;
  }

  .principal li:hover ul {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Header = () => {
  return (
    <Menu>
      <ul className="principal">
        <li>
          <Image src="/image/logo.png" alt="logo" width="64" height="50" />
        </li>
        <li>Nostros</li>
        <li>
          Tratamientos
          <ul className="secundario">
            <li>Faciales</li>
            <li>Corporales</li>
          </ul>
        </li>

        <li>Promos</li>
        <li>Contacto</li>
      </ul>
    </Menu>
  );
};

export default Header;
