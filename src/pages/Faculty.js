import { Skeleton } from 'antd';
import CustomSlide from 'components/Slide/CustomSlide';
import ProfileCard from 'components/ProfileCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchListCellBiology,
  fetchListMachineLearning,
  fetchListManagerialEconomic,
} from '../redux/Faculty/action';

const Faculty = () => {
  const dispatch = useDispatch();
  const {
    isLoadingCellBiology,
    isLoadingMachineLearning,
    isLoadingManagerialEconomics,
    cellBiologyTitle,
    machineLearningTitle,
    managerialEconomicsTitle,
    cellBiology,
    machineLearning,
    managerialEconomics,
  } = useSelector((state) => state.faculty);
  useEffect(() => {
    dispatch(fetchListCellBiology());
    dispatch(fetchListMachineLearning());
    dispatch(fetchListManagerialEconomic());
  }, []);

  return (
    <>
      <div className="mx-[25px] mb-5">
        <Skeleton className="h-full" active loading={isLoadingCellBiology}>
          <p className="ml-[25px] mt-0 mb-1 text-base font-semibold">
            Top authors in {cellBiologyTitle}
          </p>
          <CustomSlide>
            {cellBiology?.map((item) => (
              <ProfileCard
                photo={item.photo}
                name={item.name}
                position={item.position}
                department={item.department.inst_name}
                totalAwards={item.total_awards}
                totalPublications={item.total_publications}
              />
            ))}
          </CustomSlide>
        </Skeleton>
      </div>
      <div className="mx-[25px] mb-5">
        <Skeleton className="h-full" active loading={isLoadingMachineLearning}>
          <p className="ml-[25px] mt-0 mb-1 text-base font-semibold">
            Top authors in {machineLearningTitle}
          </p>
          <CustomSlide>
            {machineLearning?.map((item) => (
              <ProfileCard
                photo={item.photo}
                name={item.name}
                position={item.position}
                department={item.department.inst_name}
                totalAwards={item.total_awards}
                totalPublications={item.total_publications}
              />
            ))}
          </CustomSlide>
        </Skeleton>
      </div>
      <div className="mx-[25px] mb-5">
        <Skeleton
          className="h-full"
          active
          loading={isLoadingManagerialEconomics}
        >
          <p className="ml-[25px] mt-0 mb-1 text-base font-semibold">
            Top authors in {managerialEconomicsTitle}
          </p>
          <CustomSlide>
            {managerialEconomics?.map((item) => (
              <ProfileCard
                photo={item.photo}
                name={item.name}
                position={item.position}
                department={item.department.inst_name}
                totalAwards={item.total_awards}
                totalPublications={item.total_publications}
              />
            ))}
          </CustomSlide>
        </Skeleton>
      </div>
    </>
  );
};
export default Faculty;
