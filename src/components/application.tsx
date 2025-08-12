import { PropsWithChildren } from 'react';

/**
 * Things you could try:
 *
 * JSX.Element;
 * JSX.Element | JSX.Element[];
 * React.ReactNode;
 * React.ReactChildren;
 * React.ReactChild[];
 */
//most of the time use ReactNode
  //type BoxProps = { children: JSX.Element[] /* 👈 Get rid of this! */ }; - use with one children, and children required

  //PropsWithChildren default ReactNode? - Use most of the time to pass props, null children
type BoxProps= PropsWithChildren<{
  style?: React.CSSProperties; //type safety
}>
const Box = ({ children,style }: BoxProps) => {
  return (
    <section
      className="m-4"
      //style={{ padding: '1em', border: '5px solid purple'}} - fixed style unchangeable
      style={{ padding: '1em', border: '5px solid purple' ,...style }} // can merge/add/overiding default style by passing
    >
      {children}
    </section>
  );
};

const Application = () => {
  return (
    <main className="m-8">
      <Box style={{ padding: '1em', backgroundColor: 'blue' }}> {/*example for passing style*/}
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box>
          <h2>Another React component with one child.</h2>
        </Box>
        <Box>
          <h2 className="mb-4">A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
    </main>
  );
};

export default Application;
