import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ThreeDots
      height="60"
      width="60"
      radius="9"
      color="rgb(255, 195, 64)"
      wrapperStyle={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255, 198, 158, 0.8)',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      ariaLabel="three-dots-loading"
      wrapperClassName=""
      visible={true}
    />
  );
}
