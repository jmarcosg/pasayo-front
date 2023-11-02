const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return <pre className=''>{atob(outputDetails?.compile_output)}</pre>;
    } else if (statusId === 3) {
      return <pre className=''>{atob(outputDetails.stdout) !== null ? `${atob(outputDetails.stdout)}` : null}</pre>;
    } else if (statusId === 5) {
      return <pre className=''>{`Time Limit Exceeded`}</pre>;
    } else {
      return <pre className=''>{atob(outputDetails?.stderr)}</pre>;
    }
  };

  return (
    <>
      <h4 className=''>Salida</h4>
      <div className=''>{outputDetails ? <>{getOutput()}</> : null}</div>
    </>
  );
};

export default OutputWindow;
