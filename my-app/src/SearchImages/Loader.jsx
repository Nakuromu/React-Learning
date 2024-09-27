import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      wrapperClass='loader'
      height="50"
      width="50"
      color="#3f51b5"
      wrapperStyle={{}}
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
};

export default Loader;