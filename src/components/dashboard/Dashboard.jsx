const Dashboard = ({ allTodosCount, isDoneCount, isActiveCount, isImportantCount }) => {
  return (
    <>
      <h2 className='text-center'>All todos: {allTodosCount}</h2>
      <div className='d-flex justify-content-between'>
        <h3 className='h5'>Active: {isActiveCount}</h3>
        <h3 className='h5 text-decoration-line-through'>Done: {isDoneCount}</h3>
        <h3 className='h5 fw-bold text-success'>Important: {isImportantCount}</h3>
      </div>
    </>
  );
};

export default Dashboard;
