"use client";

import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";


interface ActionTooltipProps{
    label:string
    children:React.ReactNode
    side?:"top"|"right"|"bottom"|"left"
    align?:"start"|"center"|"end"
}

const ActionTooltip :React.FC<ActionTooltipProps>= ({label,children,side,align}) => {
  return (
    <TooltipProvider>
        <Tooltip delayDuration={50}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} align={align}>
                <p className="font-semibold text-sm capitalize dark:bg-black/20 mx-1 rounded-sm p-2 flex items-center justify-center">
                    {label.toLocaleLowerCase()}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default ActionTooltip