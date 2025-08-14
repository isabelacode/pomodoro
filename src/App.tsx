import { Container } from "./components/Container";
import { Menu } from "./components/Menu";
import { Logo } from "./components/Logo";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

import "./styles/global.css";
import "./styles/themes.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="Nome da atividade"
              id="meuInput"
              type="text"
              placeholder="Digite algo"
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>
          <div className="formRow">
            <button>enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
