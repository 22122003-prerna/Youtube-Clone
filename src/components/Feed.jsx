import React, { useContext, useEffect } from 'react';
import { Context } from '../context/contextapi';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard';

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-white">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {Array.isArray(searchResults) &&
              searchResults.map((item) => {
                if (item.type !== 'video') return null;
                return <VideoCard key={item?.video?.videoId} video={item?.video} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
