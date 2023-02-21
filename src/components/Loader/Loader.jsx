import { RotatingLines } from 'react-loader-spinner';

function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        paddingBottom: 80,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loader;
