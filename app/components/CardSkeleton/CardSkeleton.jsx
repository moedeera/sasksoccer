import { Card } from "../../../components/Card/Card";
import { Skeleton } from "../../../components/ui/skeleton";
import React from "react";

const CardSkeleton = () => {
  return (
    <div className="component-container grid  md:grid-cols-3 lg:grid-cols-4 gap-8 p-3">
      {" "}
      <Card className=" w-full h-48 p-3">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px] " />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </Card>
      <Card className=" w-full h-48 p-3">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px] " />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </Card>
      <Card className=" w-full h-48 p-3">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px] " />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </Card>
      <Card className=" w-full h-48 p-3">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px] " />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardSkeleton;
