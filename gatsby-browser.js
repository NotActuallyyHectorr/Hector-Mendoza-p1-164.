import { GlobalStyle } from "./src/styles/GlobalStyles";

export const wrapRootElement = ({ element }) => {
    return (
        <>
          <GlobalStyle />
          {element}
        </>
    );
};