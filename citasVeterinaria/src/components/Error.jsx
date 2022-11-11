const Error = ({ children }) => {
  return (
    <div className="bg-danger bg-gradient d-flex justify-content-center rounded-pill">
      {children}
    </div>
  );
};

export default Error;
