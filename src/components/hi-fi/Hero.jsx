import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/user/reducer";
import { selectUserData } from "../../store/user/reducer";
import { selectAuth } from "../../store/auth/reducer";

const Hero = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuth);
  const { data } = useSelector(selectUserData);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCurrentUser());
    }
  }, [isLoggedIn]);

  return (
    <div className="h-full text-3xl text-center py-28 text-white">
      Hi welcome here...
      <div className="mt-4">
        {data && (
          <div className="flex flex-col items-center gap-2">
            <img src={data.picture} alt="" className="w-24" />
            <div>{data?.username && <h5>Username: {data.username}</h5>}</div>
            <div>{data?.email && <h5>Email: {data.email}</h5>}</div>
            <div>
              {data?.socialMedia?.facebook && (
                <h5>Facebook: {data.socialMedia.facebook}</h5>
              )}
            </div>
            <div>
              {data?.socialMedia?.instagram && (
                <h5>Instagram: {data.socialMedia.instagram}</h5>
              )}
            </div>
            <div>
              {data?.socialMedia?.twitter && (
                <h5>Twitter: {data.socialMedia.twitter}</h5>
              )}
            </div>
            <div>
              {data?.socialMedia?.linkedIn && (
                <h5>LinkedIn: {data.socialMedia.linkedIn}</h5>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
