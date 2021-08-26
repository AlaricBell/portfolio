import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

const overrideVisible = css`
  display: block;
  margin: 0 auto;
  transition: opacity: .5s linear;
  opacity: 1;
`;

const overrideHide = css`
  display: block;
  margin: 0 auto;
  transition: opacity: .5s linear;
  opacity: 0;
`;

const Load: React.FC<{endLoading: boolean}> = ({endLoading}) => {
    return (
        <section id="load" className={endLoading ? "hide" : ""}>
          <BounceLoader color="#4A4A4A" loading={true} css={endLoading ? overrideHide : overrideVisible} size={120} />
        </section>
    )
}

export default Load;