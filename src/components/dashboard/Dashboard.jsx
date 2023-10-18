const Dashboard = ({ allTodosCount, isDoneCount, isActiveCount }) => {
  return (
    <>
      <h2 className='text-center'>All todos: {allTodosCount}</h2>
      <div className='d-flex justify-content-between'>
        <h3 className='h5'>Active: {isActiveCount}</h3>
        <h3
          className='h5'
          style={{ textDecoration: 'line-through' }}
        >
          Done: {isDoneCount}
        </h3>
        <h3 className='h5 font-weight-bold text-success'>Important: ***</h3>
      </div>
    </>
  );
};

export default Dashboard;
