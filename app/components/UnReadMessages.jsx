"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const UnReadMessages = ({ session }) => {
  const { unreadCount, setUnreadCount } = useGlobalContext();
  console.log(unreadCount.count);

  useEffect(() => {
    if (!session) return;

    const fetchUnreadMessages = async () => {
      try {
        const res = await fetch("/api/messages/unread-count");

        if (res.status === 200) {
          const data = await res.json();
          setUnreadCount(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUnreadMessages();
  }, [session, setUnreadCount]);

  return (
    unreadCount.count > 0 && (
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
        {unreadCount.count}
      </span>
    )
  );
};

export default UnReadMessages;
