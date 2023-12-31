const ActivityFeed = () => {
  const recentActivity = [
    {
      type: 'Graph',
      title: 'Reseach Study',
      timestamp: '2023-12-29T12:00:00Z'
    },
    {
      type: 'Collection',
      title: 'Crowd funding',
      timestamp: '2023-12-29T10:30:00Z'
    },
    {
      type: 'Query',
      title: 'Sales Strategy',
      timestamp: '2023-12-29T15:45:00Z'
    }
  ];

  return (
    <div className="w-full rounded-md  justify-center gap-4 m-auto border-[0px] p-0 my-10">
      {/* <div className="mx-auto my-2"> */}
      <h2 className="text-3xl font-extrabold mb-6 text-blue-600">
        Recent Activity
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recentActivity.map((activity, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-6 bg-gray-800 text-white overflow-hidden"
          >
            <p className="text-xl mb-4 overflow-ellipsis whitespace-nowrap md:text-lg">
              {activity.type === 'Graph' && (
                <span className="text-red-500 font-bold">Graph:</span>
              )}
              {activity.type === 'Collection' && (
                <span className="text-green-500 font-bold">Collection:</span>
              )}
              {activity.type === 'Query' && (
                <span className="text-yellow-500 font-bold">Query:</span>
              )}
              <span className="ml-2">{activity.title}</span>
            </p>
            <p className="text-gray-400 text-sm">
              {new Date(activity.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ActivityFeed;
