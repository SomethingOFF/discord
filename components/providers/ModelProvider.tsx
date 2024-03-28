"use client";

import { useEffect, useState } from "react";
import CreateServerModel from "../model/CreateServerModel";
import CreateChannelModel from "../model/CreateChannelModel";
import DeleteChannelModel from "../model/DeleteChannelModel";
import DeleteMessageModel from "../model/DeleteMessageModel";
import DeleteServerModel from "../model/DeleteServerModel";
import EditChannelModel from "../model/EditChannelModel";
import EditServerModel from "../model/EditServerModel";
import InviteModel from "../model/InviteModel";
import LeaveServerModel from "../model/LeaveServerModel";
import MembersModel from "../model/MembersModel";
import MessageFileModel from "../model/MessageFileModel";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModel />
      <CreateChannelModel />
      <DeleteChannelModel />
      <DeleteMessageModel />
      <DeleteServerModel />
      <EditChannelModel />
      <EditServerModel />
      <InviteModel />
      <LeaveServerModel />
      <MembersModel />
      <MessageFileModel />
    </>
  );
};
