import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/user/reducer";
import { selectUserData } from "../../store/user/reducer";
import { selectAuth } from "../../store/auth/reducer";
import SocialMediaLinks from "./SocialMediaLinks";

const Hero = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuth);
  const { data } = useSelector(selectUserData);

  useEffect(() => {
    if (isLoggedIn) {
      try {
        dispatch(getCurrentUser());
      } catch (error) {
        console.error("Failed to fetch current user:", error);
      }
    }
  }, [isLoggedIn, dispatch]);

  return (
    <div className="h-full text-3xl text-center py-28 text-white">
      Hi welcome here...
      <div className="mt-4">
        {data && (
          <div className="flex flex-col items-center gap-2">
            <img src={data.picture} alt="" className="w-24" />
            <div><h5>Username: {data.username}</h5></div>
            <div><h5>Email: {data.email}</h5></div>
            <SocialMediaLinks socialMedia={data.socialMedia} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
