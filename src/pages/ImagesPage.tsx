import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPhotos } from '../actions/loadPhotos';
import { updateFetching } from '../actions/updateFetching';
import { Loader } from '../components/Loader/Loader';
import { RootState } from '../store';

export const ImagesPage: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state: RootState) => state.photos.photos);
  const currentPage = useSelector((state: RootState) => state.page.page);
  const fetching = useSelector((state: RootState) => state.fetching.fething);

  const scrollHandler = (event: Event) => {
    if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 300) {
      dispatch(updateFetching(true));
    }
  };

  useEffect(() => {
    if (fetching) {
      dispatch(loadPhotos(currentPage, 100));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  return (
    <>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 33%)', justifyContent: 'space-evenly'}}>
      {photos.map(item => {
        return (
          <div key={item.id}>
            <img src={item.download_url} width='100%' height='auto'/>
          </div>
        );
      })}
      </div>
      {fetching ? <Loader /> : <></>}
    </>
  );
}